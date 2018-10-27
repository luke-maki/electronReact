const { dialog } = require('electron');
const { writeFileSync, readFileSync } = require('fs');

module.exports = {
  save() {
    const content = readFileSync('./data/contents.txt').toString();
    // Create open file dialog which looks for txt files by default
    dialog.showSaveDialog((file) => {
      if (file === undefined) return; // eslint-disable-line
      writeFileSync(file, content, (err) => {
        if (err) console.log('There was an error');
        console.log('File was saved');
      });
    });
  },
};
