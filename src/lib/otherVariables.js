const otherVariables = (json,options)=>{
  let pretty = options.pretty || false;
  let language = options.lang;
  let css = "";

  css += "/*\n/* Media Queries List\n\/* Author: Farhad Bagheri\n/* Url: https://github.com/CFarhad/MySize\n*/\n\n";


      for (let key in json) {
        /**
         * value set to array
         * @type {Array} value
         */
        let value = json[key];
        if(value instanceof Array){
          for(let i = 0 ; i < value.length ; i++){
            css += `${language === 'less' ? '@' : '$'}${value[i]}: ${key};`;
            if (pretty) {
              css += "\n";
            }
          }
        }
        else{
          css += `${language === 'less' ? '@' : '$'}${value}: ${key};`;
          if (pretty) {
            css += "\n";
          }
        }

      }

      return css;
}

module.exports = otherVariables;