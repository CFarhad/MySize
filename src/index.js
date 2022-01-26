const config = require('./sizes.config.json');
const path = require('path');
const fs = require('fs');
const cssVariable = require('./lib/cssVaribales');
const otherVariable = require('./lib/otherVariables');

let langs = ["css","less","scss","stylus"];
langs.map(lang=>{
  let css;
  css = lang === 'css' ? cssVariable(config,{pretty:true}) : otherVariable(config,{pretty:true,lang:lang});
  if (!fs.existsSync(path.join(__dirname, `../build/${lang}`))) {
    fs.mkdirSync(path.join(__dirname, '../build',`${lang}`),{recursive: true});
  }

  
  fs.writeFile(path.join(__dirname,"../build",lang,`media.${lang}`), css,(err)=> {
      if (err) throw Error(err)
  });

})



