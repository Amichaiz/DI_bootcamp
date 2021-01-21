let calc = ``;
function  my_f(argument) {
    console.log(argument)
    if (argument == `=`){
        console.log(calc)
        document.getElementById("demo").innerHTML = (eval(calc));
        startOver();
        return;
    }
    if (argument == "CLEAR"){
        document.getElementById("demo").innerHTML = "sum";
        startOver()
        return;
    }
    calc += argument;  
}
function  startOver() {
    calc=``;
}