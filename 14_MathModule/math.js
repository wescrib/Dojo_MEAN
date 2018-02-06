var add = function(num1, num2){
    console.log( num1 + num2 );
};

var multiply = function(num1, num2){
    console.log( num1*num2 )
};

var square = function(num){
    console.log(num*num);
};

var random = function(num1, num2){
    console.log(Math.floor(Math.random()*(num2-num1)+num1));
}

module.exports = {
    add : add,
    multiply : multiply,
    square : square,
    random : random


};