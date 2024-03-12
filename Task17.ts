let guests = ["Ali","Usama","Ahmed"];
console.log("We found a bigger dinner table");
guests.unshift("Ahsan");
let middle_index = Math.floor(guests.length / 2);
guests.splice(middle_index, 0 , "Amir");
guests.push("Adeel")
// guests.forEach(guest =>{
//     console.log(`Dear ${guest},\nYou are cordinally invited to dinner,\nUsman`)
// });
console.log("Sorry I can invite only two people for dinner");
while(guests.length > 2){
    let removedguest = guests.pop();
    console.log(`Sorry ${removedguest},we can't invite you to dinner this time.`)
}

guests.forEach(guest =>{
    console.log(`Dear ${guest},\nYou are still invited to dinner,\nUsman`)
});

guests.pop();
guests.pop();

console.log(guests)