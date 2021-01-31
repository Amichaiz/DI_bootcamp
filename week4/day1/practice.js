let arr = [1, 2, 3, 4, 5, 6]

const rev= (arr) => {
    let newarr = []
    for (let i = arr.length; i > 0; i--) {
         newarr.push(arr[i])
    }
    return newarr
}
console.log(rev(arr))