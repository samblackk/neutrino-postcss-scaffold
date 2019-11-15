## Neutrino v9 Scaffold with PostCSS

A starter template using `@neutrinojs/react ^9.0.0-rc.3` with PostCSS and style modules baked in.

## Development

Clone the repository and use the package manager [yarn](https://yarnpkg.com) to install the project's dependancies.

```bash
yarn install
```

#### File Hierarchy

`src/views` - Page entry points, everything starts here
<br />`src/components` - Reusable small-chunk components
<br />`src/styles` - Root styles and style variables

#### Styling

Utilizes `style modules` by including a `styles.module.css` file as needed for
each code chunk.
<br/>CSS variables should be used and can imported as needed into the
style module files.

```CSS
@import 'styles/_colors.css';

.fooClass {
  color: var(--black);
}
```

## Lint

Uses [ESLint](https://eslint.org/) and [Stylelint](https://github.com/stylelint/stylelint) to ensure consistent syntax.

```bash
yarn lint
```

## Build Production

For production, minimized static files are built and exported:

```bash
yarn build
```

Due to the nature of `ReactRouter` it's important to include rewrite file on your platform, typicaly on NGINX:

```
location / {
  try_files $uri /index.html;
}
```

A `_redirects` file is included to enable quick setup on Netlify. <br /> Can be removed if not deploying to Netlify.

## Built With

- [Neutrino](https://neutrinojs.org/) - Create and build modern JavaScript applications with zero initial configuration
- [ReactRouter](https://reacttraining.com/react-router/) - Collection of navigational components that compose declaratively with your application.
- [PostCSS](https://postcss.org/) - A tool for transforming styles with JS plugins.
