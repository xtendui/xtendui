module.exports = {
  debug: true,
  repositoryUrl: 'https://github.com/minimit/xtendui',
  branches: ['master', { name: '0.16', prerelease: false, range: '0.16.x' }, { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  plugins: [
    ['@semantic-release/commit-analyzer'],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/npm', { npmPublish: true, tarballDir: 'dist' }],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
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