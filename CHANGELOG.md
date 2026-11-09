# Changelog

All notable changes to BoostNote-Reloaded will be documented in this file.

## [v0.16.2] - 2026-11-09

### Fixed

#### Critical & Data Integrity
- **Attachment Filenames**: Added full support for hyphens, underscores, spaces, and Unicode characters in attachment filenames.
- **Attachment Path Stripping**: Replaced flawed regex path trimming with robust `path.basename()` and `decodeURIComponent()` parsing.
- **Image Paste Blobs**: Fixed clipboard image paste corruption where base64 data was erroneously duplicated (`+=`), generalized mime detection to all image formats (`data:image/\w+;base64`), and migrated from deprecated `new Buffer()` to `Buffer.from()`.
- **Storage Initialization**: Guarded storage validation prior to `.filter()` calls to prevent application crash on corrupted storage definitions.
- **Attachment Size Calculation**: Added error handling around `fs.statSync` to avoid `ENOENT` crashes during storage preferences rendering.
- **Window Actions**: Added fallback to `mainWindow` when `BrowserWindow.getFocusedWindow()` is null during devtools toggling, reloads, and dialog prompts.

#### Editor & Markdown
- **Split Editor Scroll Sync**: Fixed `Cannot read property 'top' of undefined` crash when scrolling notes with empty/missing heading blocks.
- **Indent Size Configuration**: Corrected logic error comparing font size instead of indent size in `MarkdownSplitEditor`.
- **Prettier Hotkey**: Wrapped `prettierConfig` JSON parsing with error handling to guard against malformed user configuration.
- **Table of Contents Generator**: Added try/catch around `decodeURI(token.slug)` to handle malformed URI characters without throwing `URIError`, and guarded against undefined lines in `wrapTocWithEol`.
- **PlantUML Sanitization**: Added string validation to prevent undefined errors when PlantUML server address is empty.
- **HTML Escape Regex**: Fixed stateful RegExp reuse bug (`lastIndex = 0`) inside code block detection.

#### State, Memory & Lifecycles
- **Event Listener Leaks**: Correctly unbound and cleaned up all event listeners (`editor:lock`, `editor:focus`, `editor:orientation`, `topbar:togglemodebutton`, `topbar:toggledirectionbutton`, `hotkey:deletenote`, `list:navigate`) in `componentWillUnmount`.
- **DOM & Iframe Listeners**: Safely guarded iframe window and body cleanup in `MarkdownPreview` against early destruction.
- **Unmounted State Updates**: Prevented `setState` memory leak warnings in `PreferencesModal/InfoTab` by tracking and clearing timers on unmount.
- **IPC Update Handler**: Moved `ipc.on('update-check')` out of a 10-second startup delay directly into `app.on('ready')`, allowing manual update checks to function immediately.

#### Storage, Notes & Snippets
- **Safe JSON Parsing**: Protected localStorage access in `findStorage`, `ConfigManager`, and drag-and-drop note drop handlers against corrupted JSON.
- **Snippet Management**: Added missing `return reject(err)` in async snippet operations, protected `expandSnippet` against non-array prefixes, and added fallback to default snippet templates on corrupted config.
- **Export Reliability**: Added fallbacks in `exportStorage` for notes with missing/deleted folder keys (`path.join(undefined)` bug) and added array guards to `exportTag`.
- **Note Updates**: Properly captured filtered snippet array assignments and corrected default snippet description type.
- **Note Moving**: Prevented assigning `content = undefined` to snippet notes when moving across storages.
- **URL Note Import**: Fixed missing return on invalid URLs to prevent firing requests with malformed URLs, and handled rejected note creation promises.
- **PropTypes & UI**: Fixed `isrequired` typo in note items and corrected `.blur` call in search input.
