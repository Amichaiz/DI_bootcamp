const fs = require("fs");
fs.readFile('./rightleft.txt', (err, data) => {
    let count = 0
    let i = 0;
    let side = 1;
    if (err) {
        console.log(err);
    }
    else {
        while (i < data.toString().length) {
            if ((data.toString().charAt(i))== '>'){
                count++
            }
            else count--
            i++
        }
        i = 0
        while (i < data.toString().length) {
            if (data.toString().charAt(i) == '>') {
                side++
            }
            else side--
            if (side < 0) {
                console.log(i + 'left side man');
                break;
            }
            i++
        }
        console.log(count+" steps")
    }
})