const plugin = require('tailwindcss/plugin');
const config = require('../sizes.config.js');


module.exports =  function(filter=[]){

  plugin(function({ addVariant }) {
    addVariant('optional', '&:optional')
    addVariant('hocus', ['&:hover', '&:focus'])
    addVariant('supports-grid', '@supports (display: grid)')
    addVariant('samsung','@media (min-width: 1024px)')
  })
}
