var fs = require('fs');
var sass = require('node-sass');

function compileSCSS(){
    sass.render({
        file: __dirname +  '/src/style.scss',
        outFile: __dirname +  '/dist/style.css',
      }, function(error, result) { 
        if(!error){
          fs.writeFile(__dirname + '/dist/style.css', result.css, function(err)
          { if(!err){
          }
        });
      }
    });
}

compileSCSS();
