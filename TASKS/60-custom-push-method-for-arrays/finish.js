/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */


class CustomArray extends Array {
    customPush(newElement) {
        console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
return this.customPush[this.length] = newElement;
    }
}


const arr = new CustomArray (5, 7, 9)

console.log(arr)

console.log(arr.customPush(11))














function myFn () {
    const element = document.createElement('div');
    element.id = '1'
    element.innerText = 'some text'

    return element;
}

const newElement = myFn()

console.log(newElement)





// const link = ['vk', 'youtube', 'facebook']
// // https://vk.com

// console.log(link)

const newlink = link.map((elm) => {
return 'https://' + elm
})

console.log(newlink)



const link = ['vk', 'youtube', 'facebook']
// https://vk.com

console.log(link)

const fixLinks = (newLink) => {

    const correctLink = []

newLink.forEach((elm)=> correctLink.push('https://www' + elm + '.com'))
       return correctLink 
    }

const res = fixLinks(link)

console.log(res)



let x  = 1;

const logToConsole = function() {
    console.log(x)
}


x = 2

x = 3

logToConsole()




const Arr66 = [12, 23, 45, 67]

const res66 = Arr66.reduce((acc, elm) => acc + elm)

console.log(res66)



arrNew3 = [312, 4556, 546, 56]
arrNew2 = [12, 45, 546, 56]

const myFn66 = (arrNew) => {
     return  arrNew.reduce((acc, elm) => acc + elm)
}

console.log(myFn66(arrNew2))


const stars = 5
let price

switch (stars) {
case 1:
case 2:
  price = 20
  break;

  case 3:
  price = 40
  break;

  case 4:
  price = 50
  break;

  case 5:
  price = 60
  break;

  default: 'Такого количества здвезд нет'
}

console.log(price);



for (let i = 50; i >= 0; i -= 5) {
  console.log(i)
}


const value = 5

if (value) {
console.log(true)
} else{
    console.log(false)
}


const result = 9 > 7 ? "больше" : "меньше";

console.log(result)


const newValue = 67

if (!newValue) {
console.log('Это ноль')
} else {
    console.log('Это НЕ ноль!')
}

