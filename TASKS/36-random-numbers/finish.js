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

// const(MIN) = 1000
// const MAX = 9999

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

function randomNumbersFn() {

let random = Math.round(Math.random() * (MAX -(MIN)) +(MIN)) // <-- Получаем рандомное число от(MIN) до MAX, после округляем его с помощью Math.round()  Math.round(Math.random() * (MAX -(MIN)) +(MIN))

if (myNumbers !== random) { // <-- Проверяем, что это новое случайное число не совпадает ни с одним из чисел переданного в функцию внешнего массива.
    console.log('Число совпадает с уже существующим числом в массиве!')
    random = Math.round(Math.random() * (MAX -(MIN)) +(MIN))
} else {
    myNumbers.push(random)

} 

return console.log(myNumbers) // <-- Возвращаем myNumbers массив с добавленными рандом числами по условию от(MIN) до MAX.
}

randomNumbersFn() // <-- Вызов функции






// function randomNumbersFn(arr) {

// const res = arr.map((Element) => Element) // <-- Получаем новый массив чтобы не мутировать внешний!

// const random = Math.round(Math.random() * (MAX -(MIN)) +(MIN)) // <-- Получаем рандомное число от(MIN) до MAX, после округляем его с помощью Math.round()

// if (res !== random) { // <-- Проверяем, что это новое случайное число не совпадает ни с одним из чисел переданного в функцию внешнего массива.
//     res.push(random)
// } else {
//     console.log('Число совпадает с уже существующим числом в массиве!')
// }

// return console.log(res) // <-- Возвращать новый массив с добавленными рандом числами по условию от(MIN) до MAX.
// }

// randomNumbersFn(myNumbers) // <-- Вызов функции и передача внешнего массива.


// const(MIN) = 1000
// const MAX = 9999

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]


function randomNumbersFn() {

    let random = 2355 // <-- Получаем рандомное число от(MIN) до MAX, после округляем его с помощью Math.round()

for (i = 0; i < myNumbers.length; i += 1) {
    if (myNumbers[i] !== random) { // <-- Проверяем, что это новое случайное число не совпадает ни с одним из чисел переданного в функцию внешнего массива.
        console.log('Число совпадает с уже существующим числом в массиве!')
       
    } else {

        myNumbers.push(random)
    }
}
        
 
    
    return console.log(myNumbers) // <-- Возвращать новый массив с добавленными рандом числами по условию от(MIN) до MAX.
    }
    
    randomNumbersFn() // <-- Вызов функции и передача внешнего массива.






// const(MIN) = 1000
// const MAX = 9999

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

// function randomFn(MIN), MAX) {

//    return Math.round(Math.random() * (MAX -(MIN)) +(MIN))
    
//     }

//     let random = randomFn(MIN), MAX)


//     function NumbersFn(arr) {

//         do {
//             random = randomFn(MIN), MAX)
//         } while (arr.includes(random))

// if (arr.includes(random)) {
    
//     console.log(`Ваш номер ${random}, но он уже есть!`)
// } else {
//     arr.push(random)
//     console.log(`Ваш новый номер: ${random}`)
// }
      

    
// return console.log(arr)
//     }

//     NumbersFn(myNumbers)








    // Функция для проверки, существует ли число в массиве
function numberExistsInArray(number, array) {
    return array.includes(number);
  }

// Генерация случайного числа и проверка на уникальность
function generateUniqueRandomNumber() {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(1000, 9999);
    } while (numberExistsInArray(randomNumber, myNumbers));
    return randomNumber;
  }













do {
    random = randomFn(MIN, MAX)
} while (arr.includes(random))





arr.push(random)
console.log(`Ваш новый номер: ${random}`)




    console.log(`Ваш номер ${random}, но он уже есть!`)
    arr.includes(2355)



















const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const myNumbersTest = [1, 2, 3, 4, 5]

function randomFn(min, max) {

//    return Math.round(Math.random() * (MAX -(MIN)) +(MIN))
return Math.floor(Math.random() * (max - min + 1) + min)

    }

 
    function NumbersFn(arr, min, max) {

        let random

        const updatedArr = [...arr]

        do {
            console.log(`Ваш номер ${random}, но он уже есть!`)
           random = randomFn(min, max)
        } while (updatedArr.includes(random))

        console.log(`Ваш новый номер: ${random}`)

        arr.push(random)
  
return console.log(updatedArr)
    }

    NumbersFn(myNumbers, 10, 20)






