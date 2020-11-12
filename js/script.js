// мин, макс, сумма
const masMax = arr => {
    let max
    let min
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && isNaN(arr[i]) === false) {
            if (typeof(min, max) === 'undefined') {
                min = arr[i]
                max = arr[i]
            }

            if (arr[i] > max) {
                max = arr[i]
            }

            if (arr[i] < min) {
                min = arr[i]
            }
            sum += arr[i]
        }
    }
    console.log('Максимальное: ' + max + '  Минимальное: ' + min + '  Сумма: ' + sum)
}
masMax([NaN, 1, undefined, 3, 5, -3])

// задача с ямками

const some = array => {
    let water = 0
    let first = 0
    let second = first + 2
    let max = Math.max(...array)
    while (array.length >= 3) {
        if (array[first] <= array[first + 1]) {
            array.splice(first, 1)
            second = 0
        }
        if (array[first] === max) {
            array.reverse()
        }
        for (; second < array.length; second++) {
            if (array[0] <= array[second]) {
                for (let s = first + 1; s < second; s++) {
                    water += array[first] - array[s]
                }
                array.splice(0, second)
                second = 0
                continue;
            }
        }
    }
    console.log(water)
}
some([0, 1, 1, 3, 1, 5, 0, 3, 4, 7, 7, 3, 3, 0])