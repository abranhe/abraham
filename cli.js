#!/usr/bin/env node

var color = require('./colors')

var help = (`
  Usage
    $ abraham <Option> …
    Options:
      -help               View Information
      -version            Know the version of the package
      -social <media>     Social Network
               github
               twitter
               linkedin
`);

var ERROR = color.red + "ERROR" + color.reset + help;

var INFO = (`
  Name: Carlos Abraham
  Website: www.19cah.com
  Email: abraham@19cah.com
  Github: @19cah
  Twitter: @19cah
  linkedin: @19cah
`);

var version =  require("./package").version

var args = process.argv.slice(2);

// if(process.argv.length >= 4){
//   console.log(ERROR)
// }

switch (args[0]) {
   case '-help':
     console.log(help);
     break;

   case '-version':
     console.log(version);
     break;

   case '-social':{
     switch(args[1]){
       case 'github':
        var url = "https://github.com/19cah"
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
        require('child_process').exec(start + ' ' + url);
          break;
       case 'twitter':
        var url = "https://twitter.com/19cah"
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
        require('child_process').exec(start + ' ' + url);
         break;
       case 'linkedin':
        var url = "https://www.linkedin.com/in/19cah"
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
         require('child_process').exec(start + ' ' + url);
          break;
        default:
            console.log(INFO);
        }
     }
     break;

   default:
     console.log(ERROR);
 }
