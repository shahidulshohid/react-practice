// 1. JSON 
const student = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const studentJson = JSON.stringify(student)
const studentObj = JSON.parse(studentJson)
// console.log(student)
// console.log(studentJson)
// console.log(studentObj)

//fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// keys values
const keys = Object.keys(student)
const values = Object.values(student)
console.log(keys)
console.log(values)