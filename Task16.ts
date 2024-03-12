let guests = ["Ali","Usama","Ahmed"];
console.log("We found a bigger dinner table");
guests.unshift("Ahsan");
let middle_index = Math.floor(guests.length / 2);
guests.splice(middle_index, 0 , "Amir");
guests.push("Adeel")
guests.forEach(guest =>{
    console.log(`Dear ${guest},\nYou are cordinally invited to dinner,\nUsman`)
});