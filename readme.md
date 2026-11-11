<h1 align="center">BoostNote-Reloaded</h1>

<p align="center">
  <strong>Classic BoostNote’un topluluk tarafından sürdürülen devamı.</strong><br>
  Programcılar için Electron, React ve Redux ile geliştirilmiş not uygulaması.
</p>

<p align="center">
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/releases">
    <img alt="İndir" src="https://img.shields.io/badge/İndir-Sürümler-blue?style=for-the-badge">
  </a>
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/issues">
    <img alt="Hata bildir" src="https://img.shields.io/badge/Hata%20bildir-Issue-orange?style=for-the-badge">
  </a>
  <a href="https://github.com/officialmmt/BoostNote-Reloaded/blob/master/LICENSE">
    <img alt="Lisans" src="https://img.shields.io/badge/Lisans-GPL--3.0-green?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="#about">Hakkında</a> ·
  <a href="#development">Geliştirme</a> ·
  <a href="#contributing">Katkıda bulun</a>
</p>

> **Proje durumu:** Bu fork, [@officialmmt](https://github.com/officialmmt) tarafından aktif olarak sürdürülmektedir. Orijinal BoostNote-Legacy projesi artık upstream geliştirme odağının dışındadır.

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

This project is distributed under the [GNU General Public License v3.0](./LICENSE). BoostNote-Reloaded builds on the work of the original BoostNote project and its contributors. Copyright notices and [...]
