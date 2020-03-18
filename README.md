# ordinalize-tr

> Add ordinal suffix to a number - for Turkish language

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
