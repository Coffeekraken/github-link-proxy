# Coffeekraken Github Link Proxy <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/coffeekraken/github-link-proxy">
		<img src="https://img.shields.io/travis/coffeekraken/github-link-proxy.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/coffeekraken-github-link-proxy">
		<img src="https://img.shields.io/npm/v/coffeekraken-github-link-proxy.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/github-link-proxy/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-github-link-proxy.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/github-link-proxy">
		<img src="https://img.shields.io/npm/dt/coffeekraken-github-link-proxy.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/github-link-proxy">
		<img src="https://img.shields.io/github/forks/coffeekraken/github-link-proxy.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/github-link-proxy">
		<img src="https://img.shields.io/github/stars/coffeekraken/github-link-proxy.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Provide a simple rest API for compiling js, coffee, sass, scss, etc... files through a node server

## Table of content

1. [Install](#readme-install)
2. [Get Started](#readme-get-started)
2. [Configuration](#readme-configuration)
2. [CLI](#readme-cli)
3. [Contribute](#readme-contribute)
4. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
5. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-github-link-proxy --save-dev
```

<a name="readme-get-started"></a>
## Get Started

This package expose only a CLI that is used to start a small Express server. This server will make the redirections to github depending on the requested URL.

```json
{
	"scripts": {
		"github-link-proxy" : "coffeekraken-github-link-proxy"
	}
}
```

<a id="readme-configuration"></a>
## Configuration

This package will read the ```github-link-proxy.config.js``` file at the root of your project. Here's the configuration references:

```js
module.exports = {
	// server port
	port : 8181
}

```

<a id="readme-cli"></a>
## CLI

This package expose a simple CLI that you can use to start the redirection server.

```
coffeekraken-github-link-proxy [options]
```

#### Arguments

- ```-p --port``` : The port on which the server will run. Default **8181**
- ```-c --config``` : A path to a config file to load. Default **./github-link-proxy.config.js**

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
