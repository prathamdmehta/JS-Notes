const accountId = 144553
let accountEmail = "pratham@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pm@pm.com"
accountPassword = "21212121"
accountCity = "New Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])