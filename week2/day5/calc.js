let calc = ``;
function  my_f(argument) {
    if (!isNaN(argument)){
        calc+=argument;
        document.getElementById("demo").innerHTML = calc;
        return;
    }
    document.getElementById("demo").innerHTML = argument;
    if (argument == `=`){
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