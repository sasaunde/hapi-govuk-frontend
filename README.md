# hapi-govuk-frontend
Hapi plugin to register govuk frontend

[![Known Vulnerabilities](https://snyk.io/test/github/defra/hapi-govuk-frontend/badge.svg)](https://snyk.io/test/github/defra/hapi-govuk-frontend)
[![Code Climate](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend/badges/gpa.svg)](https://codeclimate.com/github/DEFRA/hapi-govuk-frontend)

## Installation
`npm install --save @envag/hapi-govuk-frontend`

## Usage
Please note:
 - this example is written using the standard linter (no semicolons)
 - example usage can be found within the unit tests 
```js
const Hapi = require('hapi')
const server = hapi.server()

await server.register([{
 plugin: require('@envag/hapi-govuk-frontend'),
 options: {
   analyticsAccount: 'UA-123456789-0',
   assetPath: '/assets',
   assetDirectories: ['public/static', 'public/build'],
   serviceName: 'demo-system',
   viewPath: 'server/modules',
   includePaths: [
     // folders where partial views and macros can be found 
     // if this is not specified (not recommended) an attempt will be made crawling the node_modules to find the paths
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

## Publishing to npm

Note that each time the module is published to npm, the version number in the package.json 
file must be updated in accordance with [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
Also note that the module must be published as public

> `npm publish --access public`

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

