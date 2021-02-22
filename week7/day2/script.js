function sendData(){
    alert('hello there')
    let username = document.getElementById('username').nodeValue;
    let password = document.getElementById('password').nodeValue;
    /*fetch('http://localhost:3000/login?u='+username+'&p='+password)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e=> console.log(e))*/
}
