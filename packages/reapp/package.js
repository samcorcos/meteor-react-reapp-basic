Package.describe({
  name: 'samcorcos:reapp',
  version: '0.0.1',
  summary: 'Reapp.io for Meteor',
  git: 'https://github.com/samcorcos/reapp',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'reapp': '0.8.28'
})

Package.onUse(function(api) {
  api.use(['react@0.1.7', 'cosmos:browserify@0.5.0']);
  api.imply(['react@0.1.7']);

  api.addFiles([
    'app.browserify.options.json',
    'app.browserify.js'
  ])

  api.export('Reapp')
});

//
// Package.onUse(function(api) {
//   api.use(['react@0.1.7', 'cosmos:browserify@0.5.0']);
//   api.imply(['react@0.1.7']);
//
//   api.add_files([
//     'react-router.browserify.options.json',
//     'react-router.browserify.js'
//   ]);
//
//   api.export('ReactRouter');
// });
