// import Config from './sizes.config.js';

import path from 'path';
// import fs from 'fs';
// import cssVariable from './lib/cssVaribales.js';
// import otherVariable from './lib/otherVariables.js';

// const Mysize = ({config,output,lang,pretty,outputFileName}) => {
//   let langs = lang || ["css","less","scss","stylus"];
//   let outputPath = output || path.join(__dirname);
//   let outputFileName = outputFileName || "sizes.css";
//   let pretty = pretty || true;

//   langs.map(item=>{
//     let css;
//     css = item === 'css' ? cssVariable(config,{pretty:true}) : otherVariable(config,{pretty:true,lang:lang});

//     if()
//   })
// }

// let langs = ["css","less","scss","stylus"];
// langs.map(lang=>{
//   let css;
//   css = lang === 'css' ? cssVariable(config,{pretty:true}) : otherVariable(config,{pretty:true,lang:lang});
//   if (!fs.existsSync(path.join(__dirname, `../build/${lang}`))) {
//     fs.mkdirSync(path.join(__dirname, '../build',`${lang}`),{recursive: true});
//   }

  
//   fs.writeFile(path.join(__dirname,"../build",lang,`media.${lang}`), css,(err)=> {
//       if (err) throw Error(err)
//   });

// })


const X = ()=>{
  let jo = import.meta.url
  return jo;
}

export default X;