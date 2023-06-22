// And && operator (Both condition must be true)
// Or || operator (Either condition can be true)

/*
let temp = 15;

if(temp > 0 && temp <30){
    console.log('The weather is good');
}
else{
    console.log('The weather is bad');
}
*/

let temp = 15;

if(temp <= 0 || temp >= 30){
    console.log('The weather is bad');
}
else{
    console.log('The weather is good');
}