var multiply = function(x,y){
    if(x.constructor === Array){
        for(var i=0; i < x.length; i++){
            console.log(x[i]*y);
        }
    }
    else if(y.constructor === Array){
        for(var i=0; i < y.length; i++){
            console.log(y[i]*x);
        }
    }
    // else if(typeof x == "string" || typeof y == "string"){
    //     return "Cannot multiply string";
    else if(typeof x == "string"){
        return x.repeat(y);
    }
    else if(typeof y == "string"){
        return y.repeat(x);
    }else{
        return x*y;
    }

}


module.exports = {
    multiply : multiply
};