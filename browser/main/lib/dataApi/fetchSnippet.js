import fs from 'fs'
import consts from 'browser/lib/consts'

function fetchSnippet(id, snippetFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(snippetFile || consts.SNIPPET_FILE, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      let snippets
      try {
        snippets = JSON.parse(data)
      } catch (parseErr) {
        return reject(parseErr)
      }
      if (!Array.isArray(snippets)) {
        return reject(new Error('Snippet data is not an array'))
      }
      if (id) {
        const snippet = snippets.find(snippet => {
          return snippet && snippet.id === id
        })
        return resolve(snippet)
      }
      return resolve(snippets)
    })
  })
}

module.exports = fetchSnippet
