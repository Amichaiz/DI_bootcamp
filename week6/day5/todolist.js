let sub = document.getElementById("add")
sub.addEventListener('click', addstorage)

let reset = document.getElementById("clear")
reset.addEventListener('click', clear)

let a = localStorage.getItem('item') || "Not Found";

let all = []
if (a != "Not Found") {
    all = JSON.parse(a);
    console.log(all);
    for (let i = 0; i < all.length; i++) {
        showname(all[i])
    }
}
function addstorage() {
    let newname = document.getElementById("name")
    let desc = document.getElementById("description")
    let start = document.getElementById("starttime")
    let end = document.getElementById("endtime")
    let status = "active"
    all.push({
        "name": newname.value,
        "description": description.value,
        "starttime": starttime.value,
        "endtime": endtime.value,
        "status":status
        });
    localStorage.setItem('item', JSON.stringify(all));
    console.log(window.localStorage);
    showname(all[all.length-1])
}
function showname(newitem) {
    let papa = document.getElementById("list")
    let box = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.innerHTML = newitem.name
    box.appendChild(h3)
    let p = document.createElement("p")
    p.innerHTML = newitem.description
    p.style.display ="none";
    box.appendChild(p)
    let sta = document.createElement("p")
    sta.innerHTML = "start time - "+newitem.starttime
    box.appendChild(sta)
    let sto = document.createElement("p")
    sto.innerHTML = diff(newitem.endtime)
    box.appendChild(sto)
    let stat = document.createElement("p")
    stat.innerHTML = "status - "+ newitem.status
    box.appendChild(stat)
    box.classList.add("box")
    h3.addEventListener("click",displaydesc)
    box.addEventListener("dblclick",changestatus)
    papa.appendChild(box)
}
function changestatus(e) {
    
    console.log(this);
}
function diff(end){
    let today = new Date();
    let anotherDay = new Date(end.slice(0,4),end.slice(5,7)-1,end.slice(8,10), end.slice(11,13), end.slice(14,16))
    let diff = anotherDay - today;
    console.log('diff',diff);
    let days = diff / (1000 * 60 * 60 * 24);
    if(Math.floor(days)>0){
    return ("Deadline in-"+Math.floor(days)+" days");
    }
    if(Math.floor(days)==0){
        return ("Deadline Today")
    }
    /*console.log(this.nextSibling);
    if(end){
        console.log(localStorage.getItem('item').status);
    return ("overdue")
    }*/   
    return "Deadline passed"
    
}
function displaydesc() {
    let x = this.nextSibling
        if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function clear() {
    localStorage.clear()
    erase = document.getElementById("list").querySelectorAll("div")
    erase.forEach(element => {
        element.remove();
    });
    all = []
}
/*
console.log(all);
const singers = all
  
  function compare(a, b) {
    console.log(a,b)
    const bandA = a.starttime;
    const bandB = b.starttime;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  console.log(singers.sort(compare));*/