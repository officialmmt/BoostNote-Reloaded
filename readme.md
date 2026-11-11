<h1 align="center">BoostNote-Reloaded</h1>

<p align="center">
  <strong>A community-maintained continuation of the classic BoostNote desktop app.</strong><br>
  A note-taking app for programmers, built with Electron, React, and Redux.
</p>

<p align="center">
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/releases">
    <img alt="Download" src="https://img.shields.io/badge/Download-Releases-blue?style=for-the-badge">
  </a>
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/issues">
    <img alt="Report issue" src="https://img.shields.io/badge/Report-Issue-orange?style=for-the-badge">
  </a>
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="#about">About</a> ·
  <a href="#development">Development</a> ·
  <a href="#contributing">Contributing</a>
</p>

> **Project status:** This fork is actively maintained and developed by **[@officialmmt](https://github.com/officialmmt)**. The original BoostNote-Legacy project is no longer the focus of upstream development; this repository continues its work independently. Contributions and feedback are welcome.

## About

BoostNote-Reloaded is based on the classic BoostNote desktop app, created for writing and organizing notes and code snippets. It is an Electron application for macOS, Windows, and Linux.

This repository is the legacy desktop application. It is separate from the newer collaborative Boost Note product at [BoostIO/BoostNote-App](https://github.com/BoostIO/BoostNote-App).

## Downloads

See the [Releases page](https://github.com/officialmmt/BoostNote-Reloaded/releases) for builds published for this fork. Availability of installers may vary by release and operating system.

## Development

This project uses an older Electron and JavaScript toolchain. The existing build documentation specifies Node.js 8 and npm 6; newer environments may require compatibility adjustments.

### Prerequisites

- Node.js 8.x
- npm 6.x
- Yarn

### Install dependencies and run

From the repository root:

```bash
yarn
yarn run dev
```

### Available commands

| Command | Description |
| --- | --- |
| `yarn run dev` | Start the development app with the development configuration. |
| `yarn start` | Start the app using the configured Electron entry point. |
| `yarn test` | Run the AVA and Jest test suites. |
| `yarn lint` | Run ESLint. |
| `yarn compile` | Run the Grunt compile task. |

For additional build and packaging details, see [`docs/build.md`](./docs/build.md). The documented packaging process uses Grunt; unsigned builds may not support the automatic updater.

## Contributing

Issues, suggestions, and pull requests are welcome. Before submitting a change, please:

- Explain the problem or improvement clearly.
- Include steps to reproduce or verify the change where applicable.
- Run the relevant tests and lint checks.
- Note any operating system or runtime limitations, especially given the project's legacy toolchain.

Please open an issue in this repository for bugs or feature requests: [officialmmt/BoostNote-Reloaded/issues](https://github.com/officialmmt/BoostNote-Reloaded/issues).

## License and acknowledgements

This project is distributed under the [GNU General Public License v3.0](./LICENSE). BoostNote-Reloaded builds on the work of the original BoostNote project and its contributors. Copyright notices and attribution requirements in the source code remain applicable.
