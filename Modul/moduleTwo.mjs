//////////////////////////////   ДЕФОЛТНЫЙ "export" и "import!!!   //////////////////////////////

// Пример 1
// import printMyName from './moduleOne.mjs'

// printMyName() // Vlad


import sumNumbers from './moduleOne.mjs'
// При импорте мы можем поменять имя переменной допустим на "sumNumbers."

const res = sumNumbers(10, 2)
console.log(res) // 12

// Если с одного модуля делаем ДЕФОЛТНЫЙ експорт то можем импонтировать в другой модуль переменную под любым названием.



//////////////////////////////   НЕСКОЛЬКО ЭКСПОРТОВ!!!   //////////////////////////////

// ВАЖНО! Если импорт нескольких переменных то ИМЕНА переменных должны совподать!!!

import {
   one,
   two 
} from './moduleOne.mjs'
// Путь на экспортированные переменные.
// Импорт несколких переменных с модуля moduleOne.mjs.

console.log(one) // ответ 1 переменной которая находится в другом модуле.
console.log(two) // ответ two переменной которая находится в другом модуле.



//////////////////////////////   ПЕРЕИМЕНОВАНИЕ ИМПОРТОВ !!!   //////////////////////////////

// С помощью синтаксиса "as" мы можем переименовать экспортированную переменную, в данном примере  С "one1" В "oneRenamed" синтаксис (one1 as oneRenamed)
// То есть в этом куске кода one1 as oneRenamed мы переименовать экспортированную переменную "one1" в "oneRenamed"
// import {
//    one1 as oneRenamed
//  } from './moduleOne.mjs'

//  console.log(oneRenamed) // 1
//  console.log(two1) // two

 // NODE.JS ПОДЕРЖИВАЕТ ES6 МОДУЛИ, НАЧИНАЯ с ВЕРСИИ 13 это с 2015 года!



 //////////////////////////////   ПРАВИЛА РАБОТЫ С МОДУЛЯМИ !!!   //////////////////////////////


//  import {sum, mult } from './moduleOne.mjs'

//  console.log(sum(10,2)) // 12
//  console.log(mult(10,2)) // 20




import {sum, mult as multNambers } from './moduleOne.mjs'
// Переименовали переменную mult в multNambers

console.log(sum(10,2)) // 12
console.log(multNambers(10,2)) // 20