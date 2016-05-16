'use strict'
module.exports = shieldman

const shieldsList = require('./lib/shields-list')

function shieldman (service, opts) {
  if (!service) {
    throw new TypeError('`service` is required')
  }

  opts = opts || {}

  const ext = opts.ext || 'svg'

  const shieldTemplate = shieldsList[service.toLowerCase()]

  if (!shieldTemplate) {
    return undefined
  }

  if (!shieldTemplate.hasBranchVersion) {
    delete opts.branch
  }

  const linkTemplate = opts.branch && shieldTemplate.branchLink || shieldTemplate.link

  return {
    text: shieldTemplate.text,
    link: format(linkTemplate, opts),
    image: getShieldImage(shieldTemplate.path),
  }

  function getShieldImage (imagePath) {
    const branchSuffix = opts.branch && ('/' + opts.branch) || ''
    return `https://img.shields.io/${format(imagePath, opts)}` +
      `${branchSuffix}.${ext}${opts.style ? `?style=${opts.style}` : ''}`
  }
}

function format (str, params) {
  return str.replace(/{([^{}]+)}/g, (str, match) => params[match])
}
