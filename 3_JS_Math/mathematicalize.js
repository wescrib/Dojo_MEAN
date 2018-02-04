var zero_negativity = function(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] <= 0){
            return false;
        }
    }
    return true;
}

var is_even = function(num){
    if(num%2 == 0){
        return true;
    }
    return false;
}

var how_many_even = function(arr){
    var counter = 0;
    for(var i=0; i<arr.length; i++){
        if(is_even(arr[i])==true){
            counter++;
        }
    }
    return counter;
}

var create_dummy_array = function(num){
    var newArr =[]
    for(var i=0; i<num; i++){
        var index = Math.random()*10;
        newArr.push(Math.floor(index));
    }
    return newArr;
}

var random_choice = function(arr){
    var index = Math.floor(Math.random()*10);
    if(index < arr.length){
        return arr[index];
    }else{
        return random_choice(arr);
    }
}


module.exports = {
    zero_neg : zero_negativity,
    is_even : is_even,
    how_many_even : how_many_even,
    create_dummy_array : create_dummy_array,
    random_choice : random_choice
};