function receivesAFunction(callback){
 return callback(); 
}
receivesAFunction(function() {return 4 + 5; }); 


function returnsANamedFunction(){
 return function name(){
    return "hello"
} 
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}


