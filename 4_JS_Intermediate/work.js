var starString = function(num){
    var s = "*"
    return s.repeat(num);

}

var drawStars = function(arr){
    for(var i=0; i< arr.length; i++){
        console.log("*".repeat(arr[i]));
    }
    return arr;
}

var drawLetters = function(arr){
    for(var i=0; i< arr.length; i++){
        if(typeof arr[i]==="string"){
            console.log(arr[i][0].toLowerCase().repeat(arr[i].length));
        }else{
        console.log("*".repeat(arr[i]));
        }
    }
    return arr;
}


module.exports = {
    starString : starString,
    drawStars : drawStars,
    drawLetters : drawLetters
};