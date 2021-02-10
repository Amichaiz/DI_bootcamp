/*
We have a tree that goes through 2 cycles
of growth every year.
In the spring it doubles
in height and in the summer it increases
in height by 1 (whatever measurement system you want to use).
The purpose of the function is to output the height
of the tree after a certain number of growth cycles.
If we want to know the height of the tree after 5 growth cycles,
here is how we will calculate it:‏
At cycle 0, the initial height of the tree is 1.
At cycle 1, the tree doubles in height so its height is now 2.
At cycle 2, the tree increases in height by 1.
The tree’s height is 3.
At cycle 3, the tree doubles in height again so its height is now 6.
At cycle 4, the tree increases in height by 1.
The tree’s height is now 7.
At the final cycle - 5- , the tree doubles in height
making the tree’s height 14.
The function will output 14.*/
/** */
const iterate = (cycle) => {
    const spring = (num) => num * 2
    const summer = (num) => num + 1
    let num = 1
    for (let i = 0; i < cycle; i++) {
        num = spring(num)
        i++
        if (i < cycle){
            num = summer(num)  
        }
    }
    return num
}
let cycles = 5
console.log(iterate(cycles));