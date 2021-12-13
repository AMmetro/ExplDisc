# Running

Assuming all is configured correctly, the application should run with only minor
setup.

### Install dependencies:

```shell
npm ci
```

### Configure environment:

```shell
cp .env.example .env
```

Optional: change these to match your desired configuration

### Ensure you have translations

The first time you install the app you'll need to extract/compile translations
or else you'll see errors about missing files.

```shell
npm run i18n:all
```

For more information see: [translations](i18n.md)

### Run the dev server

```shell
npm run dev
```

This will run both the Next development server/watch and the GraphQL watcher in
parallel via pm2.

### Run without mocks

The default configuration will use mocked API responses. To call the real APIs
instead, change `MOCKS_ENABLED` to `false` in your `.env`.
