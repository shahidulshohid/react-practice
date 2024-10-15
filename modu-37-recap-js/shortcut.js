// truthy value
//'alas', 5, true, {}, []
// falsy value 
// '', 0, false, null, undefine

let myVar = 500;
//check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0
}
// console.log(myVar)

let myMoney = 50;
// you check negative or falsy any thing 
if(!myMoney){
    myMoney = 0
}
else{
    myMoney = myMoney * 2
}
// console.log(myMoney)

let money = 800;
let food;
if(money > 100){
    food = 'biriany'
}
else{
    food = 'cha biscuit'
}
// console.log(food)

//ternary
const food1 = money > 100 ? 'biriany' : 'cha biscuit'
// console.log(food1)

const drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water'
// console.log(drink)

const num1 = 52
// console.log(num1)
const numString = num1 + ''
// console.log(numString)
// string to number
const input = '560'
const inputNumber = +input
// console.log(inputNumber)

//
const isActive = true
const showUser = () => {console.log('display user')}
const hideUser = () => {console.log('hide user')}
// isActive ? showUser() : hideUser()

// use && = if the left side is true then right side will be executed
// isActive && showUser()

//use || if the left side is false the right side will be executed
isActive || showUser()

//toggle boolean
isActive = !isActive