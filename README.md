<!--@h1([pkg.name])-->
# shieldman
<!--/@-->

<!--@blockquote([pkg.description])-->
> Badges creator
<!--/@-->

<!--@shields.flatSquare('npm', 'travis', 'coveralls')-->
[![NPM version](https://img.shields.io/npm/v/shieldman.svg?style=flat-square)](https://www.npmjs.com/package/shieldman) [![Build status for master](https://img.shields.io/travis/zkochan/shieldman/master.svg?style=flat-square)](https://travis-ci.org/zkochan/shieldman) [![Test coverage for master](https://img.shields.io/coveralls/zkochan/shieldman/master.svg?style=flat-square)](https://coveralls.io/r/zkochan/shieldman?branch=master)
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

* * *

<!--@dependencies({ shield: 'flat-square' })-->
## <a name="dependencies">Dependencies</a> [![Dependency status for master](https://img.shields.io/david/zkochan/shieldman/master.svg?style=flat-square)](https://david-dm.org/zkochan/shieldman/master)

None
<!--/@-->

<!--@devDependencies({ shield: 'flat-square' })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status for master](https://img.shields.io/david/dev/zkochan/shieldman/master.svg?style=flat-square)](https://david-dm.org/zkochan/shieldman/master#info=devDependencies)

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog): Commitizen adapter following the conventional-changelog format.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://github.com/feross/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [ghooks](https://github.com/gtramontina/ghooks): Simple git hooks
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [semantic-release](https://github.com/semantic-release/semantic-release): automated semver compliant package publishing
- [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg): Script to validate a commit message follows the conventional changelog standard

<!--/@-->
