# urban-enigma

[![Build Status](https://travis-ci.org/madr/urban-enigma.svg?branch=master)](https://travis-ci.org/madr/urban-enigma)

Workout companion PWA, offline first: all data is stored on the
device.

The app interface language is swedish. All weights are presented in
the metric system: kilograms (kg) and tons (1000 kg).

## Getting started

Install all dependencies using NPM, and start the Parcel bundler and
development web server.

    $> npm i
    $> npm start

Site is now running at http://localhost:1234.

Starting the Jest test watcher is highly recommended.

    $> npm test

Use `npm run test-once` to run tests once.

## How to contribute

Contributions are most welcome! Feel free to create an issue 
describing your idea, or start a Pull request here on Github.

Please make sure that **the following requirements** are met
with your changes:

 * Green tests.
 * Code is formatted using Prettier.

## Goals

Written with the following personal goals and challenges of technical
nature in mind:

- Building something [offline-first][1].
- Get to know the [Parcel bundler][2].
- Get in line according to [Prettier formatter][3].
- Continous progression in the [7-1 Sass guidelines][4].
- Keep discovering [React together with Redux][5].
- Make [LocalStorage][6] and [Redux-sagas][7] work together for
  offline-first with server sync.
- Setup and implement React-stacked PWA testing using [Jest][8]
  (with snapshots) and [Enzyme][9].

[1]: http://offlinefirst.org/
[2]: https://parceljs.org/
[3]: https://prettier.io/
[4]: https://sass-guidelin.es/
[5]: https://redux.js.org/basics/usage-with-react
[6]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[7]: https://redux-saga.js.org/
[8]: https://jestjs.io
[9]: https://airbnb.io/enzyme/
