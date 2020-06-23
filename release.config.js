const commitAnalyzerOptions = {
  preset: 'angular',
  releaseRules: [
    { type: 'breaking', release: 'major' },
    { type: 'refactor', release: 'patch' },
    { type: 'config', release: 'patch' },
    { scope: 'no-release', release: false },
    { scope: 'test', release: false },
  ],
  parserOpts: {
    noteKeywords: [],
  },
}

const releaseNotesGeneratorOptions = {
  writerOpts: {
    transform: (commit, context) => {
      const issues = []

      if (commit.type === 'breaking') {
        commit.type = 'Breaking'
      } else if (commit.type === 'feat') {
        commit.type = 'Features'
      } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes'
      } else if (commit.type === 'refactor') {
        commit.type = 'Code Refactoring'
      } else if (commit.type === 'config') {
        commit.type = 'Config'
      } else if (commit.type === 'test') {
        commit.type = 'Tests'
      } else if (commit.type === 'docs') {
        commit.type = 'Documentation'
      } else if (commit.type === 'no-release') {
        return
      }
      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7)
      }
      if (typeof commit.subject === 'string') {
        let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl
        if (url) {
          url = `${url}/issues/`
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue)
            return `[#${issue}](${url}${issue})`
          })
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
            if (username.includes('/')) {
              return `@${username}`
            }
            return `[@${username}](${context.host}/${username})`
          })
        }
      }
      // remove references that already appear in the subject
      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true
        }
        return false
      })
      return commit
    },
  },
}

module.exports = {
  debug: true,
  repositoryUrl: 'https://github.com/minimit/xtend-library',
  branches: ['master', 'release-0.14', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  plugins: [
    // analyze commits with conventional-changelog
    ['@semantic-release/commit-analyzer', commitAnalyzerOptions],
    // generate changelog content with conventional-changelog
    ['@semantic-release/release-notes-generator', releaseNotesGeneratorOptions],
    // updates the changelog file
    '@semantic-release/changelog',
    // publishes to npm
    ['@semantic-release/npm', { npmPublish: true }],
    // creating a new version commit
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
}
