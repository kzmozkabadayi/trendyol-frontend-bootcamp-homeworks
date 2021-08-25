const axios = require("axios");

const functions = {
    divide(num1, num2) {

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid Numbers!");
        }
    
        if(num2 == 0){
            throw new Error("Divide By Zero!");
        }
    
        const result = num1 / num2;
    
        return result;
    },
    toPascalCase(title){
        var splitTitle = title.toLowerCase().split(' ');
        
        for (var i = 0; i < splitTitle.length; i++) {
         splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1);     
        }
   
        return splitTitle.join(' '); 
    }
};
  
  module.exports = functions;
  