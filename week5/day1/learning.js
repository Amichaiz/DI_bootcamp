/*
/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
97  122
*/
function pangrams(s){
    for (let i = 97; i < 123; i++) {
        if (!s.includes(String.fromCharCode(i))){
            return "not pangram"
        }   
    }
   return "pangram"
}
console.log(pangrams("abcdefg hijklmnopqrstuvwxyz"))