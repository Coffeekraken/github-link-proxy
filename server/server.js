const __express = require('express');
const __path = require('path');
const __fs = require('fs');
const __cors = require('cors');
const __bodyParser = require('body-parser');
const __extend = require('lodash/extend');
const __exec = require('child_process').spawnSync;
const __jsdom = require('jsdom');
const __semver = require('semver');
const __urldecode = require('urldecode');

module.exports = function(config) {

	// creating the app
	const app = __express();

	// parser body
	app.use(__bodyParser.json());
	app.use(__bodyParser.urlencoded({ extended: true }));

	// cors
	app.use(__cors());

	// attach config to request
	app.use((req, res, next) => {
		req.config = Object.assign({}, config);
		next();
	});

	// JS
	app.get(/.*/, function (req, res) {

		// variables
		let timeout;
		let versionsArray = [];

		// options
		const options = __extend({
		}, req.body.options || {});

		// split url
		const urlSegments = req.url.split('/');
		const user = urlSegments[1];
		const repo = urlSegments[2];
		const version = __urldecode(urlSegments[3]);

		// check url requirements
		if ( ! user || ! repo) {
			return res.status(404).send('Invalid url. The url format has to be like {user}/{repo}/{version}');
		}

		// scrape the github page
		const html = __exec('curl', [`https://github.com/${user}/${repo}`]);

		// if error while scraping the github page
		if ( ! html.stdout) {
			if ( ! html.stdout.toString()) {
				return res.redirect(`https://github.com/${user}/${repo}`);
			}
			return res.redirect(`https://github.com/${user}/${repo}`);
		}

		// parse the dom
		const dom = __jsdom.env(html.stdout.toString(), (error, window) => {

			// clear the timeout
			clearTimeout(timeout);

			// handle error
			if (error) {
				return res.redirect(`https://github.com/${user}/${repo}`);
			}

			const versions = window.document.querySelectorAll('[data-tab-filter="tags"] [data-name]');
			[].forEach.call(versions, (version, index) => {
				let v = version.getAttribute('data-name').toString();
				versionsArray.push(v);
			});
			// reverse array
			versionsArray = versionsArray.reverse();
			// loop on each versiosn to check if it satisfie the wanted one
			let satisfiedVersion = null;
			for(let i=0; i<versionsArray.length; i++) {
				let versionToCheck = versionsArray[i];
				if (__semver.valid(versionToCheck) && __semver.satisfies(versionToCheck, version)) {
					// stop here cause this is not satisfiing the version we want
					satisfiedVersion = versionToCheck;
				}
			}

			// check if we have a version that satisfy the wanted one
			if ( ! satisfiedVersion) {
				return res.redirect(`https://github.com/${user}/${repo}`);
			} else {
				return res.redirect(`https://github.com/${user}/${repo}/tree/${satisfiedVersion}`);
			}
		});

		// default redirect if grabing version take to many time...
		timeout = setTimeout(() => {
			res.redirect(`https://github.com/${user}/${repo}`);
		}, 5000);

	});

	// start demo server
	app.listen(config.port, function () {
		console.log('Github link proxy : ✓ running on port ' + config.port + '!');
	});
}
