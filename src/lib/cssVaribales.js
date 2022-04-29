const cssVariable = (json,options)=>{
  options = options || {};

  let start = options.element || ":root";
  let pretty = options.pretty || false;
  let css = "";



    css += "/*\n/* Media Queries List\n\/* Author: Farhad Bagheri\n/* Url: https://github.com/CFarhad/MySize\n*/\n\n";


    if (pretty) {
      css += start + " {\n";
    } else {
      css += start + " {";
    }
    
  
    for (let key in json) {
      /**
       * value set to array
       * @type {Array} value
       */
      let value = json[key];
      if(value instanceof Array){
        for(let i = 0 ; i < value.length ; i++){
          css += `  --${value[i]}: ${key};`;
          if (pretty) {
            css += "\n";
          }
        }
      }
      else{
        css += `  --${value}: ${key};`;
        if (pretty) {
          css += "\n";
        }
      }
    }
  
    if (pretty) {
      css += "}\n";
    } else {
      css += "}";
    }
  
    return css;

}

export default cssVariable;