import crypto from 'crypto'
import fs from 'fs'
import consts from './consts'

class SnippetManager {
  constructor() {
    this.defaultSnippet = [
      {
        id: crypto.randomBytes(16).toString('hex'),
        name: 'Dummy text',
        prefix: ['lorem', 'ipsum'],
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
    this.snippets = []
    this.expandSnippet = this.expandSnippet.bind(this)
    this.init = this.init.bind(this)
    this.assignSnippets = this.assignSnippets.bind(this)
  }

  init() {
    if (fs.existsSync(consts.SNIPPET_FILE)) {
      try {
        const parsed = JSON.parse(
          fs.readFileSync(consts.SNIPPET_FILE, { encoding: 'UTF-8' })
        )
        this.snippets = Array.isArray(parsed) ? parsed : this.defaultSnippet
      } catch (error) {
        console.log('Error while parsing snippet file')
        this.snippets = this.defaultSnippet
      }
      return
    }
    fs.writeFileSync(
      consts.SNIPPET_FILE,
      JSON.stringify(this.defaultSnippet, null, 4),
      'utf8'
    )
    this.snippets = this.defaultSnippet
  }

  assignSnippets(snippets) {
    this.snippets = snippets
  }

  expandSnippet(wordBeforeCursor, cursor, cm) {
    const templateCursorString = ':{}'
    if (!Array.isArray(this.snippets)) return false

    for (let i = 0; i < this.snippets.length; i++) {
      const item = this.snippets[i]
      if (!item || !Array.isArray(item.prefix) || typeof item.content !== 'string') {
        continue
      }
      if (item.prefix.indexOf(wordBeforeCursor.text) === -1) {
        continue
      }
      if (item.content.indexOf(templateCursorString) !== -1) {
        const snippetLines = item.content.split('\n')
        let cursorLineNumber = 0
        let cursorLinePosition = 0

        let cursorIndex
        for (let j = 0; j < snippetLines.length; j++) {
          cursorIndex = snippetLines[j].indexOf(templateCursorString)

          if (cursorIndex !== -1) {
            cursorLineNumber = j
            cursorLinePosition = cursorIndex

            break
          }
        }

        cm.replaceRange(
          item.content.replace(templateCursorString, ''),
          wordBeforeCursor.range.from,
          wordBeforeCursor.range.to
        )
        cm.setCursor({
          line: cursor.line + cursorLineNumber,
          ch: cursorLinePosition + cursor.ch - wordBeforeCursor.text.length
        })
      } else {
        cm.replaceRange(
          item.content,
          wordBeforeCursor.range.from,
          wordBeforeCursor.range.to
        )
      }
      return true
    }

    return false
  }
}

const manager = new SnippetManager()
export default manager
