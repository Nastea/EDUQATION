var fs = require('fs');
var sass = require('node-sass');

function compileSCSS(){

    sass.render({
        file: __dirname +  '/src/style.scss',
        outFile: __dirname +  '/dist/style.css',
      }, function(error, result) { // node-style callback from v3.0.0 onwards
        if(!error){
          // No errors during the compilation, write this result on the disk
          fs.writeFile(__dirname + '/dist/style.css', result.css, function(err)
          { if(!err){
            //file written on disk
          }
     
    
        });
      }
    });
}



compileSCSS();
