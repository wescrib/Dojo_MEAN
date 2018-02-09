let _ = {
    map:function(data,cb){
        for(let i=0;i<data.length;i++){
            data[i] = cb(data[i],i);
        }
        return data;
    },
    reduce:function(data,cb,memo){
        let res = 0;
        for(let i=0;i<data.length;i++){
            res += cb(data[i],memo);
        }
        return res;
    },
    find:function(data,cb){
        for(let i=0;i<data.length;i++){
            if(cb(data[i])){
                return data[i];
            }
        }
    },
    filter:function(data,cb){
        let arr = [];
        for(let i=0;i<data.length;i++){
            cb(data[i]) ? arr.push(data[i]):false;
        }
        return arr;
    },
    reject:function(data,cb){
        let arr = [];
        for(let i=0;i<data.length;i++){
            !cb(data[i]) ? arr.push(data[i]):false;
        }
        return arr;
    }
}
var evens = _.filter([1,2,3,4,5,6],function(num){
    return num % 2 == 0;
});
var odds = _.reject([1,2,3,4,5,6],function(num){
    return num % 2 == 0;
});
var hasVal = _.find([6,3,4,10,5],function(num){
    return num == 10;
})
var sum = _.reduce([1,2,3],function(memo,num){ 
    return memo + num;
},0);
var multAdd = _.map([1, 2, 3], function(num,key){ return num*4+key+1; });


console.log(evens);
console.log(odds);
console.log(hasVal);
console.log(sum);
console.log(multAdd);



module.export = {
    command : command
}