const config = require('./sizes.config.json');
const cssVariable = require("json-to-css-variables");
const path = require('path');
const fs = require('fs');

const css = cssVariable(config,{element: ":root",pretty:true});

const buildPath = path.join(__dirname, '../build/css/sizes.css');

// check directory build/css exists in previous folder
if (!fs.existsSync(path.join(__dirname, '../build/css'))) {
    fs.mkdirSync(path.join(__dirname, '../build','css'),{recursive: true});
}

fs.writeFile(buildPath, css,(err)=> {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

