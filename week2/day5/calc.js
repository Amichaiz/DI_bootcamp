let calc = ``;
function  my_f(argument) {
    console.log(argument)
    if (argument == `=`){
        console.log(calc)
        console.log(eval(calc));
        startOver();
        return;
    }
    if (argument == "CLEAR"){
        startOver()
        return;
    }
    calc += argument;  
}
function  startOver() {
    calc=``;
}