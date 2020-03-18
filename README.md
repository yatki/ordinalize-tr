# ordinalize-tr

> Add ordinal suffix to a number - for Turkish language

[![NPM version](https://badge.fury.io/js/ordinalize-tr.svg)](https://www.npmjs.com/package/ordinalize-tr)
[![npm](https://img.shields.io/npm/dt/ordinalize-tr.svg)](https://www.npmjs.com/package/ordinalize-tr)
[![Coverage Status](https://coveralls.io/repos/github/yatki/ordinalize-tr/badge.svg?branch=master&)](https://coveralls.io/github/yatki/ordinalize-tr?branch=master)

✅ It can calculate all ordinal suffixes, up to Trillion and beyond! 🚀

## Install

```bash
npm install ordinalize-tr
```

## Usage

```js
const { ordinal } = require('ordinalize-tr');

ordinal(5); // Returns: "5'inci"
ordinal(5, false); // Returns: "inci"
```

## Usage in Browser

```html
<script src="https://unpkg.com/ordinalize-tr/dist/index.umd.js"></script>
<script>
  window.ordinalizeTR.ordinal(43); // Returns: "43'üncü"
</script>
```

## Type Signature

```ts
const ordinal = (num: number, onlySuffix: boolean = false) => string;
```

## Contribution

As always, I'm open to any contribution and would like to hear your feedback.

### Just an important reminder:

If you are planning to contribute to **any** open source project,
before starting development, please **always open an issue** and **make a proposal first**.
This will save you from working on features that are eventually going to be rejected for some reason.

## LICENCE

MIT (c) 2020 Mehmet Yatkı
