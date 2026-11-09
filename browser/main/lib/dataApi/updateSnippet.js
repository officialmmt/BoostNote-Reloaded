import fs from 'fs'
import consts from 'browser/lib/consts'

function updateSnippet(snippet, snippetFile) {
  return new Promise((resolve, reject) => {
    let snippets
    try {
      snippets = JSON.parse(
        fs.readFileSync(snippetFile || consts.SNIPPET_FILE, 'utf-8')
      )
    } catch (err) {
      return reject(err)
    }

    for (let i = 0; i < snippets.length; i++) {
      const currentSnippet = snippets[i]

      if (currentSnippet.id === snippet.id) {
        if (
          currentSnippet.name === snippet.name &&
          currentSnippet.prefix === snippet.prefix &&
          currentSnippet.content === snippet.content &&
          currentSnippet.linesHighlighted === snippet.linesHighlighted
        ) {
          // if everything is the same then don't write to disk
          return resolve(snippets)
        } else {
          currentSnippet.name = snippet.name
          currentSnippet.prefix = snippet.prefix
          currentSnippet.content = snippet.content
          currentSnippet.linesHighlighted = snippet.linesHighlighted
          return fs.writeFile(
            snippetFile || consts.SNIPPET_FILE,
            JSON.stringify(snippets, null, 4),
            err => {
              if (err) return reject(err)
              resolve(snippets)
            }
          )
        }
      }
    }
    reject(new Error('Snippet not found.'))
  })
}

module.exports = updateSnippet
