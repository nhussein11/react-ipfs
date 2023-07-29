# React IPFS

### Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

## Using this library

Install the library running `pnpm i ipfs-react`.

To import the styles the library needs:

```js
/* _app.tsx */
import '<your-library>/dist/style.css'
// More imports and your App component ...
```

To import library components:

```js
/* pages/index.tsx */
import { Dummy } from '<your-library>'
// More imports and your Page component...
```

## License

[MIT](LICENSE)
