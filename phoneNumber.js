let phoneNumber = arr =>{
    let area = ['']
    let number = ['']
    let number2 = ['']

    for (i = 0; i < arr.length; i++)
    
    if (arr[i] > 0 && arr[i] < 4){
        area += arr[i].toString()
    } else if (arr[i] >= 4 && arr[i] <= 6){
        number += arr[i].toString()
    } else if (arr[i] >= 7){
        number2 += arr[i].toString()
    } else if (arr[i] === 0){
        number2 += arr[i].toString()
    }
    return `(${area}) ${number} - ${number2}`
}

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))