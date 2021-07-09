module.exports = {
  debug: true,
  repositoryUrl: 'https://github.com/xtendui/xtendui',
  branches: ['master', { name: 'beta', prerelease: true }, { name: '1.0-stable', prerelease: false, range: '1.x.x' }],
  plugins: [
    ['@semantic-release/commit-analyzer'],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/changelog'],
    ['@semantic-release/npm', { npmPublish: true, tarballDir: 'dist' }],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'dist/*.tgz',
      },
    ],
  ],
}
