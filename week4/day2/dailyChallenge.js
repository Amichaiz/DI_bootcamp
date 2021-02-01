/*Copy this object using the method that was taught in today’s lesson.
Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?*/

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//1
let grose = {...groceries}
let grose1 = groceries
let grose2 = JSON.parse(JSON.stringify(groceries))

//2 
groceries.totalPrice = "35$"
console.log(grose)//no
console.log(grose1)//yes
console.log(grose2)//no

//3
groceries.other.payed = false
console.log(grose)//yes
console.log(grose1)//yes
console.log(grose2)//no