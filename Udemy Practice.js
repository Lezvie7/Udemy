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


const data = [[1,2,3], [3,4,5], [5,6,7]]

console.log(data)

const newData = data.flatMap((Element) => Element)

console.log(newData)



/////////////////////////////////////////////////////////////////////////










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

