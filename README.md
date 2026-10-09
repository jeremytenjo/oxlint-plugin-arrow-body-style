# oxlint-plugin-arrow-body-style

An Oxlint JavaScript plugin that requires braces and an explicit `return` for
arrow function bodies.

## Installation

```bash
npm install --save-dev oxlint oxlint-plugin-arrow-body-style
```

## Configuration

Add the package to `.oxlintrc.json`:

```json
{
  "jsPlugins": [
    {
      "name": "arrow-body-style",
      "specifier": "oxlint-plugin-arrow-body-style"
    }
  ],
  "rules": {
    "arrow-body-style/always": "error"
  }
}
```

This reports:

```ts
const value = () => 42
```

and Oxlint can fix it with `oxlint --fix`:

```ts
const value = () => {
  return 42
}
```

## Development

```bash
npm test
```
