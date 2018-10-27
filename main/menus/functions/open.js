const { dialog } = require('electron');
const { readFileSync } = require('fs');

module.exports = {
  open() {
    // Create open file dialog which looks for txt files by default
    const files = dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        {
          name: 'Text',
          extensions: ['txt'],
        },
        {
          name: 'All Files',
          extensions: ['*'],
        },
      ],
    });

    if (!files) return; // return function if no files selected

    const file = files[0];
    const contents = readFileSync(file).toString(); // read file content
    console.log(contents);
  },
};
