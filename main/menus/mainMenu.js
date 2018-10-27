const { open } = require('./functions/open');
const { save } = require('./functions/save');

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
      {
        label: 'Save',
        click() {
          save();
        },
      },
    ],
  },
];
