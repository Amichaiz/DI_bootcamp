let sub = document.getElementById("add")
sub.addEventListener('click', addstorage)

let reset = document.getElementById("clear")
reset.addEventListener('click', clear)

let a = localStorage.getItem('item')||"Not Found";
console.log(a);
let all = []
let amount = window.localStorage.length
if (amount != 0) {
    all=(a.split(','))
    console.log(all);
    for (let i = 0; i < all.length; i++) {
        show(all[i])
        console.log(all[1]);
    }
}
function addstorage() {
    let newitem = document.getElementById("newinput")
    all.push(newitem.value);
    localStorage.setItem('item', all);
    console.log(window.localStorage);
    show(newitem.value)
}
function show(newitem) {
    let h3 = document.createElement("h3")
    h3.innerHTML = newitem
    let papa = document.getElementById("list")
    papa.appendChild(h3)
}
function clear() {
    localStorage.clear()
    erase = document.querySelectorAll("h3")
    erase.forEach(element => {
        element.remove();
    }); 
    all = []
}
/*
localStorage.setItem('myCat', 'Tom');

let cat = localStorage.getItem('myCat')||"Not Found";
console.log('myCat=>',cat);

localStorage.removeItem('myCat');

cat = localStorage.getItem('myCat')||"Removed";
console.log('myCat=>',cat);

localStorage.clear();

let obj = {
  name:'Someone',
  date:'15-02-2021'
}
localStorage.setItem('myObj', JSON.stringify(obj));
let myObj = localStorage.getItem('myObj')||"Not Found";
console.log('myObj=>',JSON.parse(myObj));‏‏
*/