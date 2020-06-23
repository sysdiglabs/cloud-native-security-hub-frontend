# PromCat

![last commit](https://flat.badgen.net/github/last-commit/sysdiglabs/promcat-frontend?icon=github) ![licence](https://flat.badgen.net/github/license/sysdiglabs/promcat-frontend)

## Usage

This code requires a recent NodeJS version (check Dockerfile for exact version used) and it uses [NuxtJS](https://nuxtjs.org)
as Javascript framework.

### ENV Vars

They are located in the .env file. They are injected on build time, not in runtime (beware for docker).

* API_URL: The content API URL.
* GOOGLE_ANALYTICS_ID: Google analytics id.
* BASE_URL: Base url of the website. Used for SEO.

### Commands

``` bash
# install dependencies
$ npm install

# recreate dependencies for CI
$ npm ci

# start dev server with hot reload at localhost:3000
$ npm start

# run unit tests watching for changes since the last commit
$ npm run test # You can then press 'a' to run all tests and 'u' to update the snapshots

# run unit test with coverage
$ npm run test:unit:coverage

# run acceptance test
$ npm run test:e2e

# run acceptance test headless
$ npm run test:e2e:headless

# build for production and launch server
$ npm run build
$ npm run serve

# push disabling unit test check (husky)
$ git push --no-verify
```

Module dependencies can be fixed by:
```
rm -fr node_modules package-lock.json
npm install
```
## Code style

We're following the default set of rules of eslint according to nuxt. Please use the .editorconfig to follow the indent style.
If you are using Visual Studio Code you might want to add the following snippet to your settings.json (and disable autosave)

```JSON
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "configFile": ".eslintrc.js"
  }
```

## Contributing

Contributors are welcome!
