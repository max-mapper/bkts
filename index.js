#!/usr/bin/env node
require('child_process').exec('open -a Brackets ' + require('path').resolve(process.cwd(), process.argv[2] || ''))
