//CHALLENGE 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// console.log("CHALLENGE 1:")

// for(let item in students){
//     console.log("Name: " + students[item].name + ", Cohort: " + students[item].cohort);
// }

let users = {
    employees: [
        {first_name:  'Miguel', last_name : 'Jones'},
        {first_name : 'Ernie', last_name : 'Bertson'},
        {first_name : 'Nora', last_name : 'Lu'},
        {first_name : 'Sally', last_name : 'Barkyoumb'}
    ],
    managers: [
       {first_name : 'Lillian', last_name : 'Chambers'},
       {first_name : 'Gordon', last_name : 'Poe'}
    ]
 };

//  console.log(users.employees);

var employees = users.employees;
for(let user in employees){
    console.log(employees[first_name]);
}