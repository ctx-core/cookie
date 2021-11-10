# @ctx-core/cookie

## 10.0.18

### Patch Changes

- compile using swc

## 10.0.17

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4

## 10.0.16

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 10.0.15

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 10.0.14

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 10.0.13

### Patch Changes

- exports: + "package.json": "./package.json"

## 10.0.12

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 10.0.11

### Patch Changes

- tsconfig.json: "target": "es2019"

## 10.0.10

### Patch Changes

- fix: cjs: load as a Promise

## 10.0.9

### Patch Changes

- "main": "./dist/index.cjs"

## 10.0.8

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 10.0.7

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 10.0.6

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 10.0.5

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 10.0.4

### Patch Changes

- support cjs & esm: + "exports"

## 10.0.3

### Patch Changes

- fix: module imports;types

## 10.0.2

### Patch Changes

- fix: "type": "module"

## 10.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 10.0.0

### Major Changes

- "type": "module": module npm type

## 9.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 9.0.9

### Patch Changes

- dist directory

## 9.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 9.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 9.0.6

### Patch Changes

- fix: deploying \*.js files

## 9.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 9.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 9.0.3

### Patch Changes

- fix: npm run clean

## 9.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 9.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 9.0.0

### Major Changes

- move from dist to src directory

## 8.0.2

### Patch Changes

- version bump: run build

## 8.0.1

### Patch Changes

- fix: build: clean up old build files in dist

## 8.0.0

### Major Changes

- \$ suffix for stores
- \_ suffix for factory functions

## 7.3.1

### Patch Changes

- update dependencies

## 7.3.0

### Minor Changes

- fix tsc build directory issues

## 7.2.1

### Patch Changes

- .gitignore: - \*.js

## 7.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 7.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 7.1.2

### Patch Changes

- .npmignore: + ~

## 7.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 7.1.0

### Minor Changes

- "noImplicitAny": true

## 7.0.10

### Patch Changes

- update dependencies

## 7.0.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 7.0.8

### Patch Changes

- version bump

## 7.0.7

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 7.0.6

### Patch Changes

- fix: npm run compile: tsc -b .

## 7.0.5

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 7.0.4

### Patch Changes

- version bump

## 7.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 7.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 7.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 7.0.0

### Major Changes

- src directory

## 6.0.1

### Patch Changes

- - .rush

## 6.0.0

### Major Changes

- get**cookie->get_cookie,has**cookie->has_cookie,remove**cookie->remove_cookie,set**cookie->set_cookie

## 5.0.5

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 5.0.4

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 5.0.3

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 5.0.2

### Patch Changes

- version bump to sync with npm

## 5.0.1

### Patch Changes

- version bump to sync with npm

## 5.0.0

### Major Changes

- Typescript strict checking

## 4.1.37

### Patch Changes

- fix: npm run compile: path to tsc
