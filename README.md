# Vanilla JS Starter

> 💻⚡🚀 Bare minimum sandbox to get you started with Vanilla JS prototyping in a browser environment

[![Node Version](https://img.shields.io/badge/node-v12.4.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.4.0)
[![NPM Version](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://github.com/npm/cli/releases/tag/v6.9.0)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/vanillajs-starter/blob/master/LICENSE)

Sometimes it's nice to prototype locally **without all the bloat**. If that's what you're after, this repo has got you covered. ✨

This project outputs production-optimised `javascript` to a folder called `dist`. The resulting file, called `main.js` is compiled out of the [index.js][3] file, which is the main source.

**You can use ES6 syntax**, do imports of local helpers, utilities, frameworks or modules introduced through `npm`. The sky is the limit, _but here you get started with the bare minimum setup._

## Development

### Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

### Run it locally

To start the app locally, run:

    npm run dev

This command fires up the application on port `9889`, making it visible on http://localhost:9889.

Every time you make changes to [index.js][3], your page will refresh and reflect the changes.

### Building for production

When you're satisfied with your script and ready to build for production, run:

     npm run build

This command compiles the production-optimised `javascript` to `main.js`, a file compiled out of [index.js][3].

When your script is ready, rename this file to your liking and start referring to your functions, objects, arrays, variables - or whatever it was you defined in your script.

### License

[MIT](LICENSE)

### About

**Vanilla JS Starter** is based on [Webpack's Getting Started Guide](https://webpack.js.org/guides/getting-started/) and put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴

  [1]: http://sidhree.com/
  [2]: https://nodejs.org/
  [3]: https://github.com/dreamyguy/vanillajs-starter/blob/master//src/index.js
