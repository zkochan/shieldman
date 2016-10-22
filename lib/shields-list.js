'use strict'

module.exports = {
  npm: {
    text: 'npm version',
    path: 'npm/v/{npmName}',
    link: 'https://www.npmjs.com/package/{npmName}',
  },
  travis: {
    text: 'Build Status',
    path: 'travis/{repo}',
    link: 'https://travis-ci.org/{repo}',
    hasBranchVersion: true,
  },
  appveyor: {
    text: 'Build Status on Windows',
    path: 'appveyor/ci/{repo}',
    link: 'https://ci.appveyor.com/project/{repo}',
    branchLink: 'https://ci.appveyor.com/project/{repo}/branch/{branch}',
    hasBranchVersion: true,
  },
  coveralls: {
    text: 'Coverage Status',
    path: 'coveralls/{repo}',
    link: 'https://coveralls.io/r/{repo}?branch=master',
    branchLink: 'https://coveralls.io/r/{repo}?branch={branch}',
    hasBranchVersion: true,
  },
  climate: {
    text: 'Code Climate',
    path: 'codeclimate/github/{repo}',
    link: 'https://codeclimate.com/github/{repo}',
  },
  deps: {
    text: 'dependency status',
    path: 'david/{repo}',
    link: 'https://david-dm.org/{repo}',
    branchLink: 'https://david-dm.org/{repo}/{branch}',
    hasBranchVersion: true,
  },
  devdeps: {
    text: 'devDependency status',
    path: 'david/dev/{repo}',
    link: 'https://david-dm.org/{repo}#info=devDependencies',
    branchLink: 'https://david-dm.org/{repo}/{branch}#info=devDependencies',
    hasBranchVersion: true,
  },
  peerdeps: {
    text: 'peerDependency status',
    path: 'david/peer/{repo}',
    link: 'https://david-dm.org/{repo}#info=peerDependencies',
    branchLink: 'https://david-dm.org/{repo}/{branch}#info=peerDependencies',
    hasBranchVersion: true,
  },
  gemnasium: {
    text: 'Gemnasium',
    path: 'gemnasium/{repo}',
    link: 'https://gemnasium.com/{repo}',
  },
  gitter: {
    text: 'Gitter',
    path: 'gitter/room/{repo}',
    link: 'https://gitter.im/{repo}',
  },
}
