    var f = "fizz ";
    var b = "buzz";
    
    for (j = 1; j <= 101; j++){
            if(j===101){
               break;
           }
           if(((j % 3)===0)&&(j % 5==0)){
             document.write(f + b + "<br />");
               continue;
           }
            if((j % 3)===0){
             document.write(f + "<br />");
               continue;
           }
              if((j % 5)===0){
             document.write(b + "<br />");
               continue;
           } 
                
            else {
               document.write(j + "<br />");
               continue;
            }      
       }
