'use strict';

exports.defaultWidth = 0;

function cliWidth() {
	console.log("####### process.stdout.getWindowSize = ", process.stdout.getWindowSize);
  if (process.stdout.getWindowSize) {
    return process.stdout.getWindowSize()[0] || exports.defaultWidth;
  }
  else {
	  console.log("in tty check");
    var tty = require('tty');
	console.log(" tty.getWindowSize = ", tty.getWindowSize);
    if (tty.getWindowSize) {
      return tty.getWindowSize()[1] || exports.defaultWidth;
    }
    else {
		console.log("lets check CLI_WIDTH var: ", process.env.CLI_WIDTH);
      if (process.env.CLI_WIDTH) {

        var width = parseInt(process.env.CLI_WIDTH, 10);
		console.log("after parsing width is: ", width, " isNaN(width) = ", isNaN(width));
        if (!isNaN(width)) {
          return width;
        }
      }

	  console.log("will return the defaultWidth (0)");
      return exports.defaultWidth;
    }
  }
};

cliWidth();
