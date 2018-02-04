console.log(hello);
var hello = 'world';
//WILL PRINT UNDEFINED

var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
//PRINTS MAGNET

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//PRINTS SUPER COOL

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//PRINTS "CHICKEN" THEN "HALF CHICKEN"

// mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//PRINT UNDEFINED, UNDEFINED

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//UNDEFINED, ROCK, R&B, DISCO