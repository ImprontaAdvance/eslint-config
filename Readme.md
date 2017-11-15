# @improntaadvance/eslint-config

An ESLint Shareable Config from ImprontaAdvance.

This module is for advanced users.

### Autopilot Install

There's an handy tool to simplify the install process in a single command, named `install-peerdeps`:

```sh
$ yarn global add install-peerdeps
// or npm install -g install-peerdeps 
...
$ install-peerdeps -d @improntaadvance/eslint-config
```

## Manual Install

First, install the module in your `package.json` using `npm` or `yarn`:

```sh
$ yarn add --dev @improntaadvance/eslint-config
// OR
$ npm install --save-dev @improntaadvance/eslint-config
```

Then install all the `peer-dependencies` of the module:

```sh
$ yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype eslint-plugin-prettier eslint-plugin-react babel-eslint
// OR
$ npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype eslint-plugin-prettier eslint-plugin-react babel-eslint
```

## Usage

In your ESlint configuration file (either `.eslintrc`, `.eslintrc.js` or the `eslintConfig` property in your `package.json`) add the following fields:

```json
{
  "extends": ["@improntaadvance"],
  ...
}
```

You can append the `"@improntaadvance"` value if you're having other configs already.

### Using Flow

While it is not mandatory it can be useful to install `flow` too.
Please refer to the `flow` [ufficial documentation](https://flow.org/en/docs/install/) for the installation steps.

## Using Prettier

Because the [`prettier`](https://github.com/prettier/prettier) configuration is already integrated in this configuration you can just execute `eslint --fix` as usual to apply prettier style to your code:

```sh
$ ./node_modules/.bin/eslint --fix
// or if you have it globally installed
$ eslint --fix
```

However it may be useful to have a handy script to call for that, together with other awesome `fix` `eslint` provides.
Therefore in your `package.json` file just add in the `scripts` section:

```json
...
"scripts": {
  ...
  "eslint:fix": "eslint --fix"
}
```

## IDE Integration

Integrating this with your editor will check your code during development together with automatically fix many issues on save. Most issues may arise from the `prettier` rules inside this package, that `eslint --fix` can easily solve for you.

### VSCode

Install a `eslint` extension and enable the `eslint --fix` on save in the IDE preferences:

```
...

"eslint.autoFixOnSave": true,
...
```

### Atom

Install a `eslint` plugin and enable from the extension configuration the label :

![Fix errors on save setting]( doc/atom-plugin.png )

## Badge

```
[![js-impronta-style](https://img.shields.io/badge/code--style-@improntaadvance-green.svg?style=flat-square)](http://improntaadv.com/)
```

[![js-impronta-style](https://img.shields.io/badge/code--style-@improntaadvance-green.svg?style=flat-square)](http://improntaadv.com/)
