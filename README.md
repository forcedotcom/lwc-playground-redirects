# LWC Playground Url Redirects

This repository is used to track requests to redirect URLs from the old LWC Playground to webcomponents.dev. We hope this will make it easier for you to migrate and ensure that existing samples and URLs are still discoverable.

> NOTE: Url redirects will be created shortly before February 1st, 2021 when the Playground site is taken offline.

In order to request a new URL redirect submit a pull request to this repository and add your redirects to the `redirects.json` file. The format of each redirect is as follows:

```json
{
  "playground_url": "https://developer.salesforce.com/docs/component-library/tools/playground/7yD2PkxT7",
  "webcomponents_dev_url": "https://webcomponents.dev/edit/uShFGMf55HIszx4pgxi9"
}
```

When you send a pull request, it will be tested to ensure the format is valid and that the code is formatted with Prettier. In order to validate the pull request yourself run `npm run test` and `npm run format-test`.
