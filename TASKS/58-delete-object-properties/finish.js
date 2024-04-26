/** ЗАДАЧА 58 - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

{
  let _id, processed, cart
  ({_id, processed, cart, ...person} = person)
}

console.log(person)

/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/

// const myFN = (personNew) => {

//   let {_id, processed, cart, ...restPerson } = person;

//   return restPerson
// }





console.log(myFN(person))

// delete person.id
// delete person.processed
// delete person.cart


// console.log(person)



const myObg = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
}


let {name: imya, age } = myObg


console.log(imya); // John Doe



const arr = [12, 'Alisa', false, null]

let [num, name, bulion] = arr

console.log(num, name, bulion)




const arrTest = [12,34, 456, 567]

console.log(arrTest)

const arrTest2 = arrTest.reduce((acc, elm) => acc + elm)


console.log(arrTest2)


