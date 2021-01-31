/*
1Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
2Create an array using forEach that contains the usernames of all players which score is bigger than 5.
Tip: Use ternary operator
3Find the total score of the users, and display it.*/

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
   let arr = [];
   let bigarr = [];
   let sumscore = 0;
   gameInfo.forEach((element) =>{
       arr.push(element.username+"!")
       element.score > 5 ? bigarr.push(element.username):"";
       sumscore += element.score
   })
   console.log(arr)
   console.log(bigarr)
   console.log(sumscore)