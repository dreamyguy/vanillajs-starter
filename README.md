# Vanilla JS Starter

> 💻⚡🚀 Bare minimum sandbox to get you started with Vanilla JS prototyping in a browser environment

[![Node Version](https://img.shields.io/badge/node-v12.4.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.4.0)
[![NPM Version](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://github.com/npm/cli/releases/tag/v6.9.0)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/vanillajs-starter/blob/master/LICENSE)

Sometimes it's nice to prototype locally **without all the bloat**. If that's what you're after, this repo has got you covered. ✨

This project outputs production-optimised `javascript` to a folder called `dist`. The resulting file, called `main.js` is compiled out of the [index.js][3] file, which is the main source.

**You can use ES6 syntax**, do imports of local helpers, utilities, frameworks or modules introduced through `npm`. The sky is the limit, _but here you get started with the bare minimum setup._

# Development

## Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

## Run it locally

To start the app locally, run:

    npm run dev

This command fires up the application on port `9889`, making it visible on http://localhost:9889.

Every time you make changes to [index.js][3], your page will refresh and reflect the changes.

## Building for production

When you're satisfied with your script and ready to build for production, run:

     npm run build

This command compiles the production-optimised `javascript` to `main.js`, a file compiled out of [index.js][3].

When your script is ready, you may use it in other pages by doing the usual script inclusion:

```html
<script src="/path/to/js/renamed-to-your-discretion.min.js"></script>
<script>
  yourAwesomeFunction({
    so: 'much',
    wow: 'zee'
  });
</script>
```

You may rename the compiled file to your liking and start referring to your functions, objects, arrays, variables - or whatever it was you defined in your script.

Remember to do some sensible checks, like the vanilla js equivalent to jQuery's _"on document ready"_:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // document has finished loading
}
```

# Testing

This project wouldn't be complete without proper testing frameworks, so I've included two: one for **Unit Testing** and another for **E2E (End to End) testing**.

## Unit testing

[Jest][4] is my Unit Testing framework of choice. It's well documented and shares good practices & syntax with its most known predecessors (Mocha, Jasmine, etc). [Babel][6] was introduced as a dependency to the project because of Jest, but it was worth it since now we can use **ES6** syntax on our tests as well.

Run all tests, once:

    npm run test

Initialise the tests in watch mode:

    npm run test:watch

> All tests reside beside the file they are testing, and should have the same name, suffixed with `.test.js`. See example: [sumUtil.test.js](https://github.com/dreamyguy/vanillajs-starter/blob/master/utils/).

## E2E / Integration testing

[Cypress][4] is an up-and-coming modern integratonn test framework. It has an extensive and consise documentation that will get you to write complex integration tests without all the headache. A must for testing interactive behaviour and DOM manipulation.

Initialise Cypress:

    npm run cypress:open

This will open Cypress' binary. From there one will be able to initialise the whole test suite or individual tests.

> All tests reside on the folder [cypress/integration/](https://github.com/dreamyguy/vanillajs-starter/blob/master/cypress/integration/) and should be suffixed with `_spec.js`. See example: [main-heading_spec.js](https://github.com/dreamyguy/vanillajs-starter/blob/master/cypress/integration/main-heading_spec.js).

## Good to know

### License

[MIT](LICENSE)

### About

**Vanilla JS Starter** was inspired by [Webpack's Getting Started Guide](https://webpack.js.org/guides/getting-started/) and a desire to go beyond _Codepen / Codesandbox_ inherent limitations. It was put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴

  [1]: http://sidhree.com/
  [2]: https://nodejs.org/
  [3]: https://github.com/dreamyguy/vanillajs-starter/blob/master/src/index.js
  [4]: https://jestjs.io/
  [5]: https://www.cypress.io/
  [6]: https://babeljs.io/
