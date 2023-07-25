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
const Kevin = new MyCard('Kevin', 'USA')
const Bob = new MyCard('Bob', 'New York')
const Jony = new MyCard('Jony', 'Los Angeles')

// Консолим всех игроков
console.log(Kevin)
console.log(Bob)
console.log(Jony)


// Голосуем за Bob.
Bob.voice()
// Провреяем голос Boba.
console.log(Bob)

// Провреяем время дату.
MyCard.time()









