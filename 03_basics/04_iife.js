// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // there will be a error if you dont put `;` 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pratham')

