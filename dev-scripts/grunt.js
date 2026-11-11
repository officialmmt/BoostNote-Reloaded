#!/usr/bin/env node
const major = parseInt(process.versions.node.split('.')[0], 10)
if (major >= 17 && (!process.env.NODE_OPTIONS || !process.env.NODE_OPTIONS.includes('--openssl-legacy-provider'))) {
  process.env.NODE_OPTIONS = ((process.env.NODE_OPTIONS || '') + ' --openssl-legacy-provider').trim()
}
require('grunt').cli()
