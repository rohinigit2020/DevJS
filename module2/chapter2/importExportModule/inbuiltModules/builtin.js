import {arch,version,uptime} from 'os' // no need refer paths for inbuilt modules like ./...

//const {arch,version,uptime} = require('os') for lower versions and please remove type = 'module'

console.log(arch())
console.log(version())
console.log(uptime())