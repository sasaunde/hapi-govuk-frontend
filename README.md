# hapi-govuk-frontend
Hapi plugin to register govuk frontend

[![Build Status](https://travis-ci.com/DEFRA/hapi-govuk-frontend.svg?branch=master)](https://travis-ci.com/DEFRA/hapi-govuk-frontend)
[![Known Vulnerabilities](https://snyk.io/test/github/defra/hapi-govuk-frontend/badge.svg)](https://snyk.io/test/github/defra/hapi-govuk-frontend)
[![Code Climate](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend/badges/gpa.svg)](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend)
[![Test Coverage](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend/badges/coverage.svg)](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend/coverage)

## Installation

Via github:
```
npm install --save https://github.com/DEFRA/hapi-govuk-frontend.git#master
```

It is recommended that tie to a specific commit/version as follows:
```
npm install --save https://github.com/DEFRA/hapi-govuk-frontend.git#commit_or_version
```
## Usage
Please note:
 - this example is written using the standard linter (no semicolons)
 - example usage can be found within the unit tests 
```
const Hapi = require('hapi')
const server = hapi.server()

await server.register([{
 plugin: require('hapi-govuk-frontend'),
 options: {
   analyticsAccount: 'UA-123456789-0',
   assetPath: '/assets',
   assetDirectories: ['public/static', 'public/build'],
   serviceName: 'demo-system',
   viewPath: 'server/modules,
   includePaths: [
     // folders where partial views and macros can be found 
     'node_modules/govuk-frontend',
     'node_modules/@ministryofjustice/frontend'
   ],
   options : { 
     tags: ['asset']
   },
   context: {
     data: 'some data'
   }
 }
}])
```

## Contributing to this project

Please read the [contribution guidelines](/CONTRIBUTING.md) before submitting a pull request.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

>Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.

