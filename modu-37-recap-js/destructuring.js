// 1 array destructuring
const numbers = [42, 65]
// const x = numbers[0]
// const y = numbers[1]
// console.log(x, y)

//const [x, y] = [42, 65]
// const [x, y] = numbers
// console.log(x,y)

const boxify = (num1, num2) => {
    const nums = [num1, num2]
    return nums
}
// console.log(boxify(42, 65))
const [first, second] = boxify(42,65)
// console.log(first, second)

const student = {
    name:'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan', 'mastan number one']
}

// const [firstMovie, secondMovie] = student.movies
// const [firstMovie1, secondMovie1, thurdMovies] = student.movies
// console.log(firstMovie, secondMovie)
// console.log(firstMovie, secondMovie, thurdMovies)

// 2. object destructuring 
// const {name, age} = {name: 'alu', age:'14'}
// console.log(name, age)

const employee = {
    id:'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 65,
        weight:67,
        address: 'kumar khali',
        drink: 'water',
        watch: {
            color:'black',
            price: 500,
            brand: 'garman'
        }
    }
}
const {id, machine} = employee
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch
// console.log(id, machine)
// console.log(weight, address)
console.log(brand)



