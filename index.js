'use strict'
module.exports = shieldman

var shieldsList = require('./lib/shields-list')

function shieldman (service, opts) {
  if (!service) {
    throw new TypeError('`service` is required')
  }

  opts = opts || {}

  var ext = opts.ext || 'svg'

  var shieldTemplate = shieldsList[service.toLowerCase()]

  if (!shieldTemplate) {
    return undefined
  }

  var branch = shieldTemplate.hasBranchVersion ? opts.branch : null

  var linkTemplate = branch && shieldTemplate.branchLink || shieldTemplate.link

  return {
    text: shieldTemplate.text,
    link: format(linkTemplate, opts),
    image: getShieldImage(shieldTemplate.path),
  }

  function getShieldImage (imagePath) {
    var branchSuffix = branch && ('/' + branch) || ''
    return 'https://img.shields.io/' + format(imagePath, opts) +
      branchSuffix + '.' + ext + (opts.style ? '?style=' + opts.style : '')
  }
}

function format (str, params) {
  return str.replace(/{([^{}]+)}/g, function (str, match) { return params[match] })
}
