const path = require('path');

module.exports = {
  entry: './js/main.js', // Ubah path entry sesuai dengan struktur folder kamu
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'), // Menyimpan bundle di dalam folder 'js'
  },
};
