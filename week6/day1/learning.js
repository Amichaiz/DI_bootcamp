function fibo(length){
    let arr = [0,1]
    while (arr.length < length){
        let x = arr.length
        arr.push(arr[x-1]+arr[x-2])
    }
   return arr;
}
console.log(fibo(7))