module.exports = {
  debug: true,
  repositoryUrl: 'https://github.com/minimit/xtend-library',
  branches: [
    'master',
    { name: 'release-0.14', prerelease: false, range: '0.14.x' },
    { name: 'release-0.15', prerelease: false, range: '0.15.x' },
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer'],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/npm', { npmPublish: true }],
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
        assets: [{ path: 'dist/*.min.*', label: 'UMD distribution' }],
      },
    ],
  ],
}
