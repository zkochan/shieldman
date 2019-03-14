'use strict'
var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect

var shieldman = require('./index')

describe('shieldman', function () {
  it('travis', function () {
    var shield = shieldman('travis', {
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Build Status',
      image: 'https://img.shields.io/travis/zkochan/shieldman.svg',
      link: 'https://travis-ci.org/zkochan/shieldman',
    })
  })

  it('coveralls for branch', function () {
    var shield = shieldman('coveralls', {
      repo: 'zkochan/shieldman',
      branch: 'dev',
    })
    expect(shield).to.eql({
      text: 'Coverage Status',
      image: 'https://img.shields.io/coveralls/zkochan/shieldman/dev.svg',
      link: 'https://coveralls.io/r/zkochan/shieldman?branch=dev',
    })
  })

  it('standard shield when branch shield not supported', function () {
    var shield = shieldman('npm', {
      npmName: 'shieldman',
      branch: 'dev',
    })
    expect(shield).to.eql({
      text: 'npm version',
      image: 'https://img.shields.io/npm/v/shieldman.svg',
      link: 'https://www.npmjs.com/package/shieldman',
    })
  })

  it('flat square styled travis', function () {
    var shield = shieldman('travis', {
      style: 'flat-square',
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Build Status',
      image: 'https://img.shields.io/travis/zkochan/shieldman.svg?style=flat-square',
      link: 'https://travis-ci.org/zkochan/shieldman',
    })
  })

  it('gemnasium', function () {
    var shield = shieldman('gemnasium', {
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Gemnasium',
      image: 'https://img.shields.io/gemnasium/zkochan/shieldman.svg',
      link: 'https://gemnasium.com/zkochan/shieldman',
    })
  })

  it('spacemacs', function () {
    var shield = shieldman('spacemacs')
    expect(shield).to.eql({
      text: 'Built with Spacemacs',
      image: 'https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg',
      link: 'http://spacemacs.org',
    })
  })
})
