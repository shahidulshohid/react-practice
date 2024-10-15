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
// console.log(keys)
// console.log(values)

const numbers = [23, 44, 53, 565, 66, 767, 22]
// numbers.forEach(num => console.log(num))
const multiplyNumbers = numbers.map(num => num * 2)
// console.log(multiplyNumbers)

// for of on array like object 
// loop on an object using for in

const products = [
    {name:'laptop', price:3200, brand:'len', color:'silver'},
    {name:'phone', price:7000, brand:'HTC', color:'golden'},
    {name:'watch', price:3000, brand:'casio', color:' yellow'},
    {name:'sunglass', price:300, brand:'ribon', color:'black'},
    {name:'camera', price:9000, brand:'canon', color:'gray'}
]

const newProduct = {name: 'webcam', price:'700', brand: 'lal'}
//copy products array and then add newProduct
const newProducts = [...products, newProduct]
// console.log(newProducts)

//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone')
console.log(remaining)

