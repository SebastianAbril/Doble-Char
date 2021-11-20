var pepe = 'hola Mundo';

function dobleChar(str){
    var newString = '';
    for(var i=0; i< str.length ; i++){
        newString += str[i] + str[i];
    }
    
    return newString;
}