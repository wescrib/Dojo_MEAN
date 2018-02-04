var mathematicalize = require("./mathematicalize");

var arr=[4,1,3,4,-6]

//WILL RETURN TRUE IF ARRAY CONTAINS NO ITEMS BELOW 0, ELSE FALSE
// console.log(mathematicalize.zero_neg(arr));

//RETURNS TRUE IF INPUT NUMBER IS EVEN, ELSE FALSE
// console.log(mathematicalize.is_even(5))

//RETURNS NUMBER OF EVEN NUMBERS IN GIVEN ARRAY
// console.log(mathematicalize.how_many_even(arr));

//RETURNS ARRAY WITH GIVEN NUMBER OF INDEXES MADE UP OF RANDOM NUMBERS
// console.log(mathematicalize.create_dummy_array(4));

//RETURNS RANDOM INDEX OF A GIVEN ARRAY
console.log(mathematicalize.random_choice(arr));