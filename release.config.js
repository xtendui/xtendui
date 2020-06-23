module.exports = {
  debug: true,
  repositoryUrl: 'https://github.com/minimit/xtend-library',
  branches: [
    'master',
    { name: 'release-0.14', prerelease: false },
    { name: 'release-0.15', prerelease: false },
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],
  plugins: [
    // analyze commits with conventional-changelog
    ['@semantic-release/commit-analyzer'],
    // generate changelog content with conventional-changelog
    ['@semantic-release/release-notes-generator'],
    // updates the changelog file
    '@semantic-release/changelog',
    // publishes to npm
    ['@semantic-release/npm', { npmPublish: true }],
    // creating a new version commit
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md', '**/*.js'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
}
