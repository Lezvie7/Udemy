/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */


const meanScore = (...arr) => {
  let resalt = 0


    const sumConcat = [...arr].reduce((acc, elm) => {
      return acc.concat(elm)
      })


const sum = sumConcat.reduce((acc, elm) => {
  if (typeof elm !== 'number') {
return "Все аргументы в вызове функции должны быть числами!"
  } else {
    return acc += elm
  }
  
})

 // const res = (sum / sumConcat.length).toFixed(2)
 typeof sum !== 'number' ? resalt = "Все аргументы в вызове функции должны быть числами!" : resalt = +(sum / sumConcat.length).toFixed(2)

  return resalt

}




const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]





console.log(meanScore(scores1))
// 1.93

console.log(meanScore(scores1, scores2))
// 2.8

console.log(
  meanScore(scores1, scores2, scores3)
)
// 2.59

console.log(meanScore(scores4))
// Все аргументы в вызове функции должны быть числами!



















// Округлить число до 2 после запятой
+num.toFixed(5)
toFixed()
alert( Math.round(num * 100) / 100 );




// Рабочий вариант
const arrTest = [0, 1.5, 2.5, 3.7]

const sumTest = arrTest.reduce((acc, elm) => {
  return acc += elm
})

  const sumArr =  sumTest / arrTest.length
console.log(sumArr.toFixed(2))





// Рабочий вариант
const meanScoreTTT = (arr) => {
  const sum = [...arr].reduce((acc, elm) => {
  return  acc += elm
  })
  console.log(sum)

  const res = sum / arr.length

  return res.toFixed(2)

}




if (![...arr].every(arr => typeof arr === 'number')) {
}
return Math.round(res * 100) / 100;



if (typeof elm !== 'number') {}



const sum123 = []

      for (i = 0; i < arr.length; i += 1) {
        sum.push(arr[i])
      }







      if (typeof elm === 'number') {
        return acc += elm
      } else {
        return "Все аргументы в вызове функции должны быть числами!"
      }





      const meanScore2 = (...arr) => {

        if (typeof elm === 'number') {
          
        }
      
        const sumArr = [...arr]
      
          const sumConcat = sumArr.reduce((acc, elm) => {
            return acc.concat(elm)
            })
      
      
      // console.log(sumConcat)
      
      
      const sum = sumConcat.reduce((acc, elm) => {
        return acc += elm
      })
      
         
      
      // console.log(sum)
           
        const res = sum / sumConcat.length 
      
      //  console.log(res)
      
        return res.toFixed(2)
      
      }