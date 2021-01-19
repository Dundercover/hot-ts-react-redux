# Hot-TS-React-Redux

This is an highly opinionated project skeleton for single page web apps.

## Made Up Of

- [Snowpack](https://www.snowpack.dev) - Very fast builds with ESM modules in browser
- [Typescript](https://www.typescriptlang.org/) - Avoid stupid errors using static typing
- [React](https://reactjs.org/) - Component-based, declarative views
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Write stateful components without classes
- [Redux](https://redux.js.org/) + [React-Redux](https://react-redux.js.org/) -
  State you can reason about + time travel -- use the dev tools
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Async redux actions
- [Prettier](https://www.npmjs.com/package/prettier) and
  [Husky](https://github.com/typicode/husky) to automatically reformat your code
  as a pre-commit hook and to require passing tests before pushing.
- [Web Test Runner](https://github.com/modernweb-dev/web/tree/master/packages/test-runner) - Test framework.
- [Hot Module Replacement](https://www.snowpack.dev/concepts/hot-module-replacement) - Witness your changes without reloading your
  browser or losing your redux state

## Initial Setup

    yarn install

## Start the Development Server

    yarn start

This should open `localhost:8080` in your browser.

## How to build the application for deployment

    yarn build

The default output directory is `/dist`.

## How to run the tests

    yarn test       # run test once
    yarn test:watch # watch mode

## Further

- Install the react dev tools
  https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- Install the redux dev tools https://github.com/reduxjs/redux-devtools
- Install Visual Studio Code

## Based on / Special Thanks

This project is based on
[hot-ts-react-redux](https://github.com/collingreen/hot-ts-react-redux) by Collin Green which is based on another project
[ts-react-parcel](https://github.com/adhrinae/ts-react-parcel) by Ahn Dohyung
