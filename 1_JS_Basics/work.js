var basic1 = function(){
    var x = [];
    x.push("coding");
    x.push("dojo");
    x.push("rocks");
    console.log(x);
    x.pop();
    console.log(x);
    return x;
}

var basic2 = function(){ 
    const y = [];
    y.push(88);
    return y;
}

var basic3 = function(){
    let z = [9,10,6,5,-1,20,13,2]
    console.log("PRINT EACH ELEMENT OF AN ARRAY\n")
    for(var i=0; i < z.length; i++){
        console.log(z[i]);
    }
    console.log("\nPRINT EACH ITEM EXCEPT THE LAST");

    for(var i=0; i<z.length-1; i++){
        console.log(z[i]);
    }

    return z;
}

var basic4 = function(){
    let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

    console.log("PRINT LENGTH OF EACH NAME IN AN ARRAY")
    for(var i=0; i < names.length; i++){
        console.log(names[i].length);
    }
    console.log("PRINT NAMES WITH NAMES WITH LENGTH OF 5 CHARS")
    for(var i=0; i < names.length; i++){
        if(names[i].length == 5){
            console.log(names[i]);
        }
    }
    return names;
}

var basic5 = function(x){
    return x.toUpperCase();
}


module.exports = {
    basic1 : basic1,
    basic2 : basic2,
    basic3 : basic3,
    basic4 : basic4,
    yell : basic5
};