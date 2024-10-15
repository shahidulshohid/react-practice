 
 // 5 function
function multiple(num1, num2){
    const result = num1 * num2
    return result;
}
const output = multiple(20,2)
// console.log(output)

// object
// 3 ways to access property by name
const student = {
    name:'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const myVariable = 'age'
console.log(student.age) //direct by property
console.log(student['age']) // access vai property name string
console.log(student[myVariable]) // access via property name in a variable