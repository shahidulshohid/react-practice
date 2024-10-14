
const numbers = [89, 35, 98, 12]
const student = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
// 1 template string 
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movie`;
// console.log(about)

// 2 arrow function 
const getFiftyFive = () => 55
// console.log(getFiftyFive())
const addSixtyFive = num => num + 65
// console.log(addSixtyFive(2)) 
const isEven = x => x % 2 === 0
// console.log(isEven(10))
const addThree = (x, y, z) => x + y + z
// console.log(addThree(2, 3, 4))
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum
}
// console.log(doMath(2, 6))

//spread operator
// const newNumbers = numbers
// create a new array from an older array and add an element 
const newNumbers = [...numbers]
const currentNumbers = [...numbers, 77]
numbers.push(99)
numbers.push(99)
numbers.push(99)
console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
