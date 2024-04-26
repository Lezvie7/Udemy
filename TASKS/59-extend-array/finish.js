/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */


class ExtendedArray extends Array {
    sum() {
        return this.reduce((acc, elm) => acc + elm, 0)
    }

    onlyNumbers() {
return this.filter(el => typeof el === 'number')
    }

}



const myArr2 = new ExtendedArray(1, 'a', 2, 'b', 3);

console.log(myArr2.onlyNumbers()); // [ 1, 2, 3 ]

const myArr = new ExtendedArray(12, 78, 898, 87)

console.log(myArr) // [ 12, 78, 898, 87 ]

console.log(myArr.sum()) // 1075








myArr2.onlyNumbers().forEach((elm) => console.log(elm))