# tslint-config-gb

Custom [tslint rules](https://palantir.github.io/tslint/) for my projects.

## Get started

```bash
npm install -D tslint-config-gb
```

Make sure you've already set up [tslint](https://palantir.github.io/tslint/).

Then, extend your `tslint.json`, and make sure `tslint-config-gb` is **at the end**:

```json
{
  "extends": [
    "tslint:latest",
    "tslint-config-gb"
  ]
}
```
