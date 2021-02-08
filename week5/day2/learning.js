/*
/*
A teacher has created a gradeLabs function
that verifies if student programming labs work.
This function loops over an array of JavaScript objects
that should contain a student property and runLab property.

The runLab property is expected to be a function containing
the student's code.
The runLab function is called and the result is compared
to the expected result.
If the result and expected result don't match,
then the lab is considered a failure.
*/
/*  3 */
/*  27 



let labsdata = [
    {
       student: 'Carly',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Erica',
       runLab: function (num) {
          return num * num;
       }
    }
 ];

let labsdata = [
    {
        student: 'Blake',
        myCode: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Jessica',
        runLab: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Mya',
        runLab: function (num) {
            return num * num;
        }
    }
];

student(labsdata)
function student(obj) {
    obj.forEach(element => {
        try {
            if(element.runLab(3) == 27) {
                console.log(element.student + " true")
            }
            else console.log(element.student + " false")   
        } catch (error) {
            console.log(error)
        }});
}*/


