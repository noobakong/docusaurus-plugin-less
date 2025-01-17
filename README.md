<h1 align="center">docusaurus-plugin-less</h1>
<p align="center">Provides support for Less to Docusaurus v2</p>
<p align="center">
    <a href="https://github.com/noobakong/docusaurus-plugin-less/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/nonoroazoro/docusaurus-plugin-less.svg" alt="GitHub License" />
    </a>
</p>

## Getting Started

1. Install `docusaurus-plugin-less-hash`:

    ```console
    npm i -S docusaurus-plugin-less-hash
    ```

    or

    ```console
    yarn add docusaurus-plugin-less-hash
    ```

2. Add the plugin to your `docusaurus.config.js`:

    ```diff
    module.exports = {
    // ...
    + plugins: ["docusaurus-plugin-less-hash"],
    // ...
    }
    ```

    or with `options`:

    ```diff
    module.exports = {
    // ...
    + plugins: ["docusaurus-plugin-less-hash", { /* options */ sourceMap: false }],
    // ...
    }
    ```

3. Write and import your stylesheets in [Less](http://lesscss.org) as normal.
