'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const shieldman = require('.')

describe('shieldman', () => {
  it('travis', () => {
    const shield = shieldman('travis', {
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Build Status',
      image: 'https://img.shields.io/travis/zkochan/shieldman.svg',
      link: 'https://travis-ci.org/zkochan/shieldman',
    })
  })

  it('coveralls for branch', () => {
    const shield = shieldman('coveralls', {
      repo: 'zkochan/shieldman',
      branch: 'dev',
    })
    expect(shield).to.eql({
      text: 'Coverage Status',
      image: 'https://img.shields.io/coveralls/zkochan/shieldman/dev.svg',
      link: 'https://coveralls.io/r/zkochan/shieldman?branch=dev',
    })
  })

  it('standard shield when branch shield not supported', () => {
    const shield = shieldman('npm', {
      npmName: 'shieldman',
      branch: 'dev',
    })
    expect(shield).to.eql({
      text: 'npm version',
      image: 'https://img.shields.io/npm/v/shieldman.svg',
      link: 'https://www.npmjs.com/package/shieldman',
    })
  })

  it('flat square styled travis', () => {
    const shield = shieldman('travis', {
      style: 'flat-square',
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Build Status',
      image: 'https://img.shields.io/travis/zkochan/shieldman.svg?style=flat-square',
      link: 'https://travis-ci.org/zkochan/shieldman',
    })
  })

  it('gemnasium', () => {
    const shield = shieldman('gemnasium', {
      repo: 'zkochan/shieldman',
    })
    expect(shield).to.eql({
      text: 'Gemnasium',
      image: 'https://img.shields.io/gemnasium/zkochan/shieldman.svg',
      link: 'https://gemnasium.com/zkochan/shieldman',
    })
  })
})
