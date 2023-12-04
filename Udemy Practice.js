'use strict' // Строгий режим

// Функция высшего порядка + колбек функция, умножить сам на себя.

const array = [1, 2, 3, 4, 5]
const multiply = (num) => num * num

const myFn = (arr, instruction) => {
    const newarr = []
for (i = 0; i < arr.length; i+=1) {
newarr.push(instruction(arr[i]))
}
return newarr
}

console.log(myFn(array, multiply))
///////////////////////////////////////////////////////////////


// Проверка на верность ввода пароля.
const myFnPass  = (enterPassword) => {
    const password = 567
    let message = 0
if (password === enterPassword) {
    message = 'Добро пожаловать!'
return console.log(message)
}
message = 'Не верный пароль!'
return console.log(message)
}

myFnPass(567)
//////////////////////////////////////////////////////////////



// Перебор обьекта и пуш свойств и значение в новый массив.
const myArray2 = {
    name: 'Vlad',
    age: 33,
    city: 'New York'
}

const myArray2New = []

for(key in myArray2) {
    myArray2New.push(key, myArray2[key])
}

console.log(myArray2New)
////////////////////////////////////////////////////////////////

// Задача 1

// 1. Разобрать объект myCard на ключи и значения.
// 2. Сделать 2 отдельных массива с обьекта myCard.
// 3. Массив ключей объекта.
// 4. Массив значений объекта.

// На выходе мы должны получить с одного объекта 2 массива!

const myCard = {
    name: 'Bob',
    age: 25,
    city: 'New York'
}

const myCardKey = Object.keys(myCard)
const myCardValue = Object.values(myCard)

    // Object.keys(myCard).forEach((key) => {
    //     myCardKey.push(key)
    //     myCardValue.push(myCard[key])
    // })

console.log(myCardKey) // [ 'name', 'age', 'city' ]
console.log(myCardValue) // [ 'Bob', 25, 'New York' ]

////////////////////////////////////////////////////////////////

// Данная функция принимает массив в параметр arr.

// 1. Возвращает массив чисел которые больше 50-ти.
// 2. Возвращает общую сумму элементов массива.

const arrayDen = [23, 56, 78, 52, 64]


const mySort = (arr) => {
    const arrayNew = []
    let sum = 0

arrayDen.reduce((acc, element) => {
    element > 50
    arrayNew.push(element)
  return sum = acc + element

      // arrayDen.filter((value)=> {
    //     sum += value
    //     value > 50
    //     arrayNew.push(value)
    // })

    // for (i = 0; i < arr.length; i+=1) {
    //     sum += arr[i]
    //     if (arr[i] > 50) {
    //         arrayNew.push(arr[i])
    //         }
    // }

})


    console.log('Массив чисел которые больше 50-ти.',arrayNew.sort())
    console.log('Сумма элементов массива', sum)
}

mySort(arrayDen)
// [ 52, 56, 64, 78 ]
// 273

////////////////////////////////////////////////////////////////////////////////////


// Метод filter
const test2 = [23, 56, 78, 52, 64]

const test5 = test2.filter((value) => value >= 56)

console.log(test5)


for (Element of test2) {
    console.log(Element)
    }

test2.forEach((Element, index) => {
    console.log(Element, index)
})

const test3 = {
    name: 'Bob',
    age: 25,
    city: 'New York'
}


const string = 'Hello'


for (Element of string) {
    console.log(Element)
}

/////////////////////////////////////////////////////////////////////////

// Задача разгладить массив


// const data = [[1,2,3], [3,4,5], [5,6,7]]

// console.log(data)

// const newData = data.flatMap((Element) => Element)

// console.log(newData)



/////////////////////////////////////////////////////////////////////////


/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
const myNumbers2 = [2040, 7030, 8030, 1060, 2061, 8050]


function randomNumbersFn(arr) {

const res = arr.map((Element) => Element) // <-- Получаем новый массив чтобы не мутировать внешний!

const random = Math.round(Math.random() * (MAX - MIN) + MIN) // <-- Получаем рандомное число от MIN до MAX, после округляем его с помощью Math.round()

if (res !== random) { // <-- Проверяем, что это новое случайное число не совпадает ни с одним из чисел переданного в функцию внешнего массива.
    res.push(random)
} else {
    console.log('Число совпадает с уже существующим числом в массиве!')
}

return console.log(res) // <-- Возвращать новый массив с добавленными рандом числами по условию от MIN до MAX.
}

randomNumbersFn(myNumbers) // <-- Вызов функции и передача внешнего массива.


///////////////////////////////////////////////////////////////////////////////////////////////////////////




const myArray3 = [24, 88, 99, 65,34, 77]


console.log(myArray3.sort())


const myArray3New = myArray3.filter((value) => value < 65)


console.log(myArray3New)





const myArray4 = [23, 56, 78, 52, 64]


const total = myArray4.reduce((acc, element) => {
return acc + element
})

console.log(total)






const test55 = ['Vlad', 'Toka', 'Lena', 'Bob', 'Lok', 'Eli','Joil']

const testNew1 = test55.reduce((acc, element) => {
   acc[element] = 1
   return acc
},{})

console.log(testNew1)


const arr = ['Vlad', 'Toka', 'Lena', 'Bob', 'Lok', 'Eli','Joil']


arr.forEach((element, index) => {
    console.log(index, element)
})

const arrNG = [1, 2, 3, 4, 5]

const arrNGNew = arrNG.reduce((acc, element) => {
 return acc + element

})

console.log(arrNGNew) // 15





const myObect = {
    name: 'Vlad',
    age: 23,
    city: 'Sofia'
}


for(const key in myObect) {
    console.log(key, myObect[key])
}


Object.values(myObect).forEach((value) => {
    console.log(value)
})

const arrNG2 = [1, 2, 3, 4, 5]



const arrNG2New = arrNG2.reduce((acc, element) => {
   return element + acc
}
)

console.log(arrNG2New)


const assNew = [1, 2, 3, 4]


function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')) // true
  console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')) // false

  

//    Заміна циклів за допомогою рекурсії
  // Базовий випадок: якщо n рівне 0, сума дорівнює 0
  // Рекурсивний випадок: обчислення суми перших n-1 елементів та додавання останнього елемента arr[n-1]

  function sum(arr, n) {
    // Змініть код лише під цим рядком
  if (n === 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Змініть код лише над цим рядком
  }

console.log(sum([1, 2, 3, 4, 5], 3))

// Наприклад, якщо ми викличемо функцію sum([1, 2, 3, 4, 5], 3), вона поверне 6, оскільки сума перших трьох елементів [1, 2, 3] дорівнює 6.






// Пошук профілю
// У нас є масив об'єктів, які представляють різних людей зі списку контактів.

// Функція lookUpProfile, яка приймає name та властивість (prop) як аргументи, вже записана для вас.

// Функція повинна перевірити, чи name дійсно є ім’ям (firstName) контакту і надана властивість (prop) є властивістю цього контакту.

// Якщо обидва є істинними, то поверніть значення цієї власності.

// Якщо name не відповідає жодному контакту, поверніть рядок No such contact.

// Якщо prop не збігається з жодною дійсною властивістю контакту, що відповідає name, поверніть рядок No such property.

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];



  function lookUpProfile(name, prop) {

  for (let i = 0; i < contacts.length; i += 1) {
          let currentContacts = contacts[i];

    for (let key in currentContacts) {
     if (name === currentContacts.firstName && prop === key) {
        return currentContacts[prop];
          } 
        }

        for (let key in currentContacts) {
        if (name === currentContacts.firstName && prop !== key) {
            return 'No such property'
          }
        }

  } 

  if (name !== contacts.firstName) {
                 return "No such contact"; 
               } 
}

console.log(lookUpProfile("Akira", "likes"))








function checkSign(num) {
    return (num++) ? 'positive' 
    : (num--) ? 'negative'
    : 'zero';
}
   console.log(checkSign(10))



   const arrTest44 = [1, 34, 56, 45,34,56]

  const arrTest44Sum = arrTest44.reduce((acc, element) => {
return element + acc
  })

  console.log(arrTest44Sum)






  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countup(5));




  const myObect77 = {
    name: 'Vlad',
    age: 28,
    city: 'New York'
  }


for (key in myObect77) {
  console.log(key, myObect77[key])
}

//////////////////////////////   КЛАССЫ И ПРОТОТИПЫ !!!   //////////////////////////////


// Класс голосование за лучшего игрока!!!
class MyCard {
constructor(user, city) {
this.user = user
this.city = city
this.likes = 0

  }
// Проголосовать за игрока!
  voice() {
    console.log(`You have a new like from ${this.user}, from ${this.city}`)
    this.likes += 1
    // alert(`You have a new like from ${this.user}, from ${this.city}`)
  }
// Проверить время и дату.
  static time() {
    return Date()
  }

}

// Список игроков каждый из которых будет объект.
const kevin = new MyCard('Kevin', 'USA')
const bob = new MyCard('Bob', 'New York')
const jony = new MyCard('Jony', 'Los Angeles')

// Консолим всех игроков
console.log(Kevin)
console.log(Bob)
console.log(Jony)


// Голосуем за Bob.
Bob.voice()
// Проверяем голос Boba.
console.log(Bob)

// Проверяем время дату.
MyCard.time()





//////////////////////////////   РАСШИРЕНИЕ ДРУГИХ КЛАССОВ !!!   //////////////////////////////



class NumbersArray extends Array {
  sum() {
      return this.reduce((el, acc) => acc += el, 0 )
  }
}

const newmyArray = new NumbersArray(2, 5, 7)

console.log(newmyArray) // Массив [ 2, 5, 7 ]
console.log(newmyArray.sum()) // Сумма числе 14



const arr222 = [1, 2, 3, 4, 5]

const arr333 = arr222.reduce((elm, acc) => {
  return acc += elm
})

console.log(arr333)



const myObj77 = {
name: 'Vlad',
city: 'New York'
}


for (key in myObj77) {
  console.log(`${key}: ${myObj77[key]}`)
}



const arrfg = [1, 2, 3, 4, 5]




// const name = 'Vlad'
// const postsQty = 23

// const userProfile = {
//   name,
//   postsQty,
//   hasSignedAgreement: false,
//   cityGreeting() {
// console.log('Hello')
//   }
// }

function increasePersonAge(userProfile) {
  const updatedPreson = {...userProfile}
  updatedPreson.postsQty +=1
  return updatedPreson
}


const updatedPreson = increasePersonAge(userProfile)
console.log(userProfile.postsQty)
console.log(updatedPreson.postsQty)


function printMyName() {
  console.log('Bogdan')
}

setTimeout(printMyName, 3000)







const userProfile3 = Object.assign({}, userProfile)


userProfile2.name = 'Lenya'

console.log(userProfile)
console.log(userProfile3)



let a
let b

function myFn() {
  let b
  a = true
  b = 10
  console.log(a)
}

myFn()

console.log(a)
console.log(b)

'use strict'

function myFn2() {
  t = true
  console.log(t)
}

myFn2()

console.log(t)


const button = {
  width: 200,
  text: 'Buy',
  color: 'black'
}

const redButton = {
  color: 'red',
  ...button
}

console.log(button)
console.log(redButton)


const myObj333 = {
  name : "John",
}

const myObj444 = {
  city : "New York",
}

const myObjL = {
  ...myObj333,
  ...myObj444
} 

console.log(myObjL)

const myName = 'Bob'
const myCity = 'New York'

const myString = `Меня звовут ${myName} я живу в ${myCity}`

console.log(myString)



const myFnn = (a, b) => a + b


console.log(myFnn(45, 77))



function gHH(a, b = 1) {
return  a + b
}

console.log(gHH(5))



function gHH(a, multiplier) {

if (multiplier === undefined) {
  multiplier = 1
  return a + multiplier
} else {
  return  a + multiplier
}
  }
  
  console.log(gHH(5))

  const myFndd = (a, b = 1) => a + b

  console.log(myFndd(5, 10))


//   const newPost = (post, addeAt = Date()) => ({
// ...post,
// addeAt
//   })

const newPost = (post, addeAt = Date()) => {
return {
  ...post,
  addeAt
}
    }

  const firstPost = {
    ad: 1,
    author: 'Bogdan',
    title:'Hello world!'
  }

  console.log(newPost(firstPost))


  const fnWithError = () => {
    throw Error('Some error')
  }

  try {
    fnWithError()
  } catch (error) {
console.error(error)
console.log(error.message)
  }

  console.log('Continue...')


  function myFn77(a) {
console.log(a)
  }

  myFn77()


  const myArray33 = [1, 2, 3, 4]

console.log(myArray33)

// myArray33.forEach((el) => console.log(el * 2))
const myArray44 = myArray33.map((el) => el * 2)

console.log(myArray44)



const userProfile = {
  name: 'Vlad',
  commentsQty: 23,
  hasSignedAgreement: false
}

const userInfo = ({name, commentsQty}) => {
  if (!commentsQty) {
return `User ${name} has no comments`
  }

  return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))


const person = {
  age: 20
}

if (!person.name) {
  console.log('Имя не указано')
}



const age = 25

if (age > 18) {
console.log('Is asult')
} else if (age >= 12) {
console.log('Is tenager')
} else {
  console.log('Is child')
}


const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
return 'One of the arguments is not a number'
  }

  if (a <= 0 || b <= 0) {
return 'Numbers are not positive'
  }

  return a + b
}


console.log(sumPositiveNumbers('hgh', 12))


const month = 2

switch (month) {
  case 12:
    console.log('Декабырь')
     break;
  case 1:
      console.log('Январь')
      break;
  case 2:
    console.log('Февраль')
     break;
  default:
      console.log('Это не зимний месяц')
}



const namber = 45
const operator = !true


namber && operator ? console.log('Правдиво') : console.log('Ложно')


const value = 11

value ? console.log('Условие истино') : console.log('Условие ложно')

const value1 = 11
const value2 = 25 

const myFunction1 = (a, b) => {
  return console.log(a + b)
}

const myFunction2 = (a, b) => {
  return console.log(a * b)
}

value1 && value2 ? myFunction1 : myFunction2


myFunction1(value1, value2)
myFunction2(value1, value2)


const test = ['first', 'second', 'third']

test.forEach((element, index) => {
  console.log(element, index)
})



for (let i = 0; i < test.length; i += 1) {
  console.log(i, test[i])
}



let i = 0

do {
  console.log(i)
  i++
} while (i < 5)


while (i < 5) {
  console.log(i)
  i+=1
}


const myObg99 = {
  name: 'Bob',
  city: 'New York'
}

Object.values(myObg99).forEach(value => {
  console.log(value)
})


Object.keys(myObg99).forEach(key => {
  console.log(key, myObg99[key])
})


for (key in myObg99) {
  console.log(key, myObg99[key])
}


const myArray787 = [true, 10, 'abc', null]

for (const key in myArray787) {
  console.log(myArray787[key])
}


const heloo = 'Heloo'

for (const Element of heloo) {
  console.log(Element)
}



const myArray7877 = [15, 10, 20, 30]


const klKK = myArray7877.reduce((element, acc) => {
  return element + acc; 
})

console.log(klKK)



class NewCard {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.like = 0
  }

  voice() {
this.like +=1
  }

  static time() {
    return new Date().toLocaleTimeString('en-US')
  }

}

const myObj4447 = new NewCard('Bob', '27')

console.log(myObj4447)

class ObjNewNam {
  constructor (text) {
this.text = text
  }
}

const myObjll = new ObjNewNam('String')

console.log(myObjll)


fetch('https://jsonplaceholder.typicode.com/todos/56')
.then(response => response.json)
.then(json => console.log(json))
.catch(error => console.error(error))



// const getData = (url) => 
// new Promise((resolve, reject) => 
// fetch(url)
// .then(response => response.json())
// .then(json => resolve(json))
// .catch(error => reject(error))
// )

// getData('https://jsonplaceholder.typicode.com/todos/56')
// .then(data => console.log(data))
// .catch(error => console.log(error.message))




const timerPromise = () => 
new Promise((resolve, reject) => 
setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  console.log('Timer start')
  const startTime = performance.now()
  await timerPromise()
  const endTime = performance.now()
  console.log('Time ended', endTime - startTime)
}


const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/56'

try {
  const data = await getData(url)
  console.log(data)
} catch (error) {
  console.log(error.message)
}





// Практика с методом reduce




const arr = [1, 2, 3, 4, 5]

const total = arr.reduce((acc, elm) => {
  console.log("Acc ", acc, "Current elm: ", elm)
  return acc += elm
}, 10)

console.log(total)



// Пример номер 1

const items = ['Bob', 'Klava', 'Gleb']

const copy = []

// for (let i = 0; i < items.length; i += 1) {
//   copy.push('New' + items[i]);
// }

// console.log(copy);


// Пример номер 2

items.forEach((element) => {
copy.push('New' + element)
})

console.log(copy);


// Пример номер 3 


const array = [14, 45, 89, 456, 987,45]

const myFn = (elem) => elem < 90


const newArray = array.filter(myFn)


console.log(newArray)




// Пример номер 4


const arrNew = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrResalt = arrNew.map((elem) => elem * 2)

console.log(arrResalt)





// Пример номер 5


const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const totalAr = array2.reduce((acc, elm) => acc += elm)

console.log(totalAr)


// Пример номер 5

const arrayFr2 = ['apple', 'banana', "peach", 'orange']


const fruits2 = arrayFr2.reduce((acc, elem) => {
  acc[elem] = 1
  return acc;
}, {})


console.log(fruits2)




// Пример номер 6

// Проверить повторяющиеся элементы, и вывести объект без дублей.


const arrayFr = ['apple', 'banana', "peach", 'orange', 'banana', 'apple']

const fruits = arrayFr.reduce((acc, elem) => {
  if(acc[elem] === acc) {
     acc[elem] +=1
  } else {
     acc[elem] = 1;

     return acc
  }
}, {})

console.log(fruits)

