/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const cars = [{
    carBrand: 'VW',
    price: 33,
    isAvailableForSale: true
}, {
    carBrand: 'BMW',
    price: 45,
    isAvailableForSale: true
}, {
    carBrand: 'Ford',
    price: 56,
    isAvailableForSale: false
}]


cars.push({
    carBrand: 'Audi',
    price: 39,
    isAvailableForSale: true
})

console.log(cars)

console.log(cars[0].carBrand)



