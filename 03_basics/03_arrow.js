const user = {
    username: "pratham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "pratham"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "pratham"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "pratham"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   ...explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) ...implicit return

const addTwo = (num1, num2) => ({username: "pratham"}) //returing object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()