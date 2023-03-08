// Code your solutions in this file
function writeCards(arr, str){
    let newArr = []
    for (let i of arr){
        newArr.push(`Thank you, ${i}, for the wonderful ${str} gift!`)
    }
    return newArr
}

function countDown(n){
    while (n >= 0){
        console.log(n)
        n -= 1
    }
}