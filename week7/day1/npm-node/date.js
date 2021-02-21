
/*
const jan1 = () =>{
let now = new Date()
let first=new Date(now.getFullYear()+1, 0, 1);
let one_day=1000*60*60*24;
let days = Math.floor((first-now)/(one_day))
let hours = Math.floor((first-now)%(one_day)/(one_day/24))
let min = Math.round((first-now)%(one_day)%(one_day/24)/(one_day/24/60))
console.log(`the 1st January is in ${days} days and ${hours}:${min} hours`);
}
module.exports ={
    date: jan1 
}*/
const allive = (birth) =>{
    let now = new Date()
    let one_day=1000*60*60*24;
    let min = Math.round((now-birth)/(one_day/24/60))
    console.log(`allive ${min} minutes`);
    }
    module.exports ={
        date: allive 
    }