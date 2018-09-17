const { open } = require('./functions/open');

module.exports = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click() {
          open();
        },
      },
    ],
  },
];
