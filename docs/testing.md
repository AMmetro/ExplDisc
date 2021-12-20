# Testing

We have two suites of tests. One that runs in the browser, and one that doesn't.
You can think of the former as "end to end (e2e)" and the latter as
unit/integration tests, if it helps.

Tests are run as follows:

Run the unit/integration suite:

```shell
npm run test
```

Run the browser/e2e suite:  
Before run: ensure that your local environment file has `MOCKS_ENABLED` set to `true`.
```shell
npm run build
npm run test:e2e
```

### Notes

You may get moaned at about firewall restrictions on macOS. You may be able to
resolve this by codesigning Chromium:

```shell
codesign --deep --sign - -f ~/Library/Caches/ms-playwright/chromium-xxx/chrome-mac/Chromium.app
```

(Replace xxx with your version of Chromium.)
