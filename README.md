# shieldman

> Badges creator

<!--@shields.flatSquare('npm', 'travis', 'coveralls')-->
[![npm version](https://img.shields.io/npm/v/shieldman.svg?style=flat-square)](https://www.npmjs.com/package/shieldman) [![Build Status](https://img.shields.io/travis/zkochan/shieldman/master.svg?style=flat-square)](https://travis-ci.org/zkochan/shieldman) [![Coverage Status](https://img.shields.io/coveralls/zkochan/shieldman/master.svg?style=flat-square)](https://coveralls.io/r/zkochan/shieldman?branch=master)
<!--/@-->

## Installation

```sh
npm i -S shieldman
```

## Usage

<!--@example('example.js')-->
```js
'use strict'
const shieldman = require('shieldman')

const shield = shieldman('travis', { repo: 'zkochan/shieldman' })

console.log(shield)
//> { text: 'Build Status',
//    link: 'https://travis-ci.org/zkochan/shieldman',
//    image: 'https://img.shields.io/travis/zkochan/shieldman.svg' }
```
<!--/@-->

## API

`shieldman(service, [opts])`

- `service` is a _String_ representing the service for which the shield will
  be created.
- `opts.style` is the style of the shield. The available styles are: flat (the
  default one), flat-square and plastic.
- `opts.repo` is the GitHub repo targeted by the shield. For the current repo
  the value would be `KenanY/shields`.
- `opts.branch` is the branch name for which the shield is created.
- `opts.npmName` is the npm name of the package for which the shield is
  created. This value is currently required only by the `npm` shield.

The `shieldman` function returns an _Object_ `obj` which has three keys:

- `obj.image` is a _String_ link to the SVG of the shield for _String_
  `service`
- `obj.link` is a _String_ link to the project page of `repo` on the website
  of `service`
- `obj.text` is a _String_ label for the `service`

## License

[MIT](./LICENSE) © [Zoltan Kochan](http://kochan.io)
