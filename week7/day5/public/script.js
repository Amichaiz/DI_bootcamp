function sendData() {
    let user = document.getElementById('user').value;
    fetch('http://localhost:3000/action?name='+user)
        .then(res => res.json())
        .then(data => {
           console.log(data);
            // showUsers(data);
        })
}
/*function sendData1() {
    let user = document.getElementById('user').value;
    fetch('http://localhost:3000/action1/'+user)
        .then(res => res.json())
        .then(data => {
           console.log(data);
            // showUsers(data);
        })
}*/
function showUsers(data) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    data.forEach(item => {
        let div = document.createElement('div');
        div.innerText = item.username;
        root.appendChild(div)
    })
}


