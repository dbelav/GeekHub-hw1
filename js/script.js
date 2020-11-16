// max
const arrayMax = arr => {
    let max
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (typeof(max) === 'undefined') {
                max = arr[i]
            }

            if (arr[i] > max) {
                max = arr[i]
            }
        }
    }
    return max
}
arrayMax([NaN, 1, undefined, 3, 5, -3])

//min

const arrayMin = arr => {
    let min
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (typeof(min) === 'undefined') {
                min = arr[i]
            }

            if (arr[i] < min) {
                min = arr[i]
            }
        }
    }
    return min
}
arrayMin([NaN, 1, undefined, 3, 5, -3])

//sum

const arraySum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i]
        }
    }
    return sum
}
arraySum([NaN, 1, undefined, 3, 5, -3])

// tast 2

const getWaterAmong = array => {
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
    return water
}
some([0, 1, 1, 3, 1, 5, 0, 3, 4, 7, 7, 3, 3, 0])
