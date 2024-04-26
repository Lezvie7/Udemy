/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */


const processPosts = (posts) => {

  const clon = structuredClone(posts) // Глубокое клонирование массива объектов!

  return clon.map((elm, index, arr) => {
    elm.postId += 1000,
    arr[1].commentsQty = 0,
    elm.postAuthor = elm.author,
    delete elm.author
      
     return elm

  })

}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)


/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений













const arr = ['Lusya', 27, 'New York']


let [name, age, city] = arr

console.log(name, age, city)



const myObg = {
  name: 'Bob',
  city: 'New York',
  age: 27
}

let {name: imya, city: gorod, age: vozrast, id = 'Не известно'} = myObg


console.log(imya, gorod, vozrast, id)




const myJbjTest = [{

name: 'Kolya',
city: 'Los Angeles',
age: 30,
hobby: 'Reading'
}, 
{
name: 'Kolya',
city: 'Los Angeles',
hobby: 'Reading'
}
]

const ress = myJbjTest.map((elm) => {
  elm.name = 'Vasya'
  
  return elm
  });
  
  
  console.log(myJbjTest)
  console.log(ress)








const arrTest = [12, 435, 546]

const resalt = arrTest.map((elm) => {

return elm * 2

})


console.log(arrTest)
console.log(resalt)





const tempArray = [
  {
    id: '1',
    name: 'Tom',
    age: 11
  },
  {
    id: '2',
    name: 'Jerry',
    age: 13
  }
]


const myObg2 = {
  name: 'Lusya',
  age: 98,
  city: 'New York'
}

const clon = {}


Object.assign(clon, myObg2)

clon.name = 'Petya'

console.log(myObg2)

console.log(clon)



