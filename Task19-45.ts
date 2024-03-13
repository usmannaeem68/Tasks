console.log("2 peoples are invited for dinner");

//Task 20
console.log("-------------------------------------------Task 20-------------------------------------------")
let mountains = ["K2","mounteverest"]
let rivers = ["Ravi","Indus","Jehlum"]
let cities = ["Islamabad","Karachi","Lahore"]
let categories = {"mountains":mountains,"rivers":rivers,"cities":cities}
console.log(categories.mountains)
console.log(categories.rivers)
console.log(categories.cities)

//Task 21
console.log("-------------------------------------------Task 21-------------------------------------------")
let mountainDatails = {"Everest":{"height":"8848","location":"Nepal"},
                        "K2":{"height":"8611","location":"Pakistan"}}
console.log(mountainDatails)

//Task 22
console.log("-------------------------------------------Task 22-------------------------------------------")
console.log(cities[4]);
console.log(cities[2])

//Task 23
console.log("-------------------------------------------Task 23-------------------------------------------")
let car = "sabaru"
let bike = "yamaha"
let city = "lahore"
let country = "Pakistan"
let mountain = "k2"
console.log(car == 'sabaru')
console.log(car == 'Honda')
console.log(bike == 'yamaha')
console.log(bike == 'Suzuki')
console.log(city == 'lahore')
console.log(city == 'Islamabad')
console.log(country == 'Pakistan')
console.log(country == 'India')
console.log(mountain == 'k2')
console.log(mountain == 'everest')

//Task 24
console.log("-------------------------------------------Task 24-------------------------------------------")
console.log(car == 'sabaru')
console.log(car == 'Honda')
console.log(car == 'SABARU')

let number = 29;
console.log(number == 29)
console.log(number != 29)
console.log(number >= 25)
console.log(number <= 30)
console.log(number <= 30 && number >= 25)
console.log(number <= 25 || number >= 25)
console.log(cities.includes('Lahore'));
console.log(cities.includes('Rawalpindi'))

//Task 25
console.log("-------------------------------------------Task 25-------------------------------------------")
let alien_color = "Green"
if(alien_color == "Green"){
    console.log("Player just earned 5 points")
}

if (alien_color == "Green"){
    console.log("Test Passed");
}
if (alien_color == "Red"){
}

//Task 26
console.log("-------------------------------------------Task 26-------------------------------------------")
if(alien_color == "Green"){
    console.log("Player just earned 5 points for shooting the alien")
}
else{
    console.log("Player just earned 10 points")
}

if(alien_color == "Green"){
    console.log("Player just earned 5 points for shooting the alien")
}
else{
    console.log("Player just earned 10 points")
}

if(alien_color == "Red"){
    console.log("Player just earned 5 points for shooting the alien")
}
else{
    console.log("Player just earned 10 points")
}

//Task 27
console.log("-------------------------------------------Task 27-------------------------------------------")
if(alien_color == "Green"){
    console.log("Player just earned 5 points")
}
else if(alien_color == "Red"){
    console.log("Player just earned 10 points")
}
else{
    console.log("Player just earned 15 points")
}

if(alien_color == "Green"){
    console.log("Player just earned 5 points")
}
else if(alien_color == "Red"){
    console.log("Player just earned 10 points")
}
else{
    console.log("Player just earned 15 points")
}

alien_color = "Red"
if(alien_color == "Green"){
    console.log("Player just earned 5 points")
}
else if(alien_color == "Red"){
    console.log("Player just earned 10 points")
}
else{
    console.log("Player just earned 15 points")
}
alien_color = "Black"
if(alien_color == "Green"){
    console.log("Player just earned 5 points")
}
else if(alien_color == "Red"){
    console.log("Player just earned 10 points")
}
else{
    console.log("Player just earned 15 points")
}

//Task 28
console.log("-------------------------------------------Task 28-------------------------------------------")
let age = 15
if(age < 2){
    console.log("Person is a baby")
}
else if(age == 2 || age < 4){
    console.log("Person is a toddler")
}
else if(age == 4 || age < 13){
    console.log("Person is a kid")
}
else if(age == 13 || age < 20){
    console.log("Person is a teenager")
}
else if(age == 20 || age < 65){
    console.log("Person is an adult")
}
else if(age == 65 || age > 65){
    console.log("Person is an elder")
}

//Task 29
console.log("-------------------------------------------Task 29-------------------------------------------")
let fav_fruits = ["Apple","Orange","Kiwi","Mango"]
if (fav_fruits.includes("Apple")){
    console.log("Apple")
}
if (fav_fruits.includes("Orange")){
    console.log("Orange")
}
if (fav_fruits.includes("Kiwi")){
    console.log("Kiwi")
}
if (fav_fruits.includes("Mango")){
    console.log("Mango")
}
fav_fruits = ["Apple","Orange","Kiwi"]
if (fav_fruits.includes("Apple")){
    console.log("I really like Apple")
}
if (fav_fruits.includes("Orange")){
    console.log("I really like Orange")
}
if (fav_fruits.includes("Kiwi")){
    console.log("I really like Kiwi")
}
if (fav_fruits.includes("Banana")){
    console.log("I really like Banana")
}
if (fav_fruits.includes("Mango")){
    console.log("I really like Mango")
}

//Task 30
console.log("-------------------------------------------Task 30-------------------------------------------")
let username = ["ali123","admin","usman68","randomuser","qasim786"]
for (var index in username){
    if(username[index] == "admin"){
        console.log(`Hello ${username[index]}, would you like to see a status repot?`)
    }
    else{
        console.log(`Hello ${username[index]}, thank you for logging in again.`)
    }
}

//Task 31
console.log("-------------------------------------------Task 31-------------------------------------------")
if(username.length == 0){
    console.log("we need to find some users!")
}
username = []
if(username.length == 0){
    console.log("we need to find some users!")
}

//Task 32
console.log("-------------------------------------------Task 32-------------------------------------------")
let current_users = ["ali123","admin","usman68","randomuser","qasim786","usama145"]
let new_users = ["ALI123","admin","usman689","randomuser145","qasim78","usama14"]

for(var index in new_users){
    if(current_users.some(users => users.toLowerCase() === new_users[index].toLowerCase())){
        console.log("Person need to enter a new username.")
    }
    else{
        console.log(`"${new_users[index]}" username is available`);
    }
}

//Task 33
console.log("-------------------------------------------Task 33-------------------------------------------")
let numbers = [1,2,3,4,5,6,7,8,9]
for (var index in numbers){
    if (numbers[index] == 1){
        console.log(numbers[index]+"st")
    }
    else if (numbers[index] == 2){
        console.log(numbers[index]+"nd")
    }
    else if (numbers[index] == 3){
        console.log(numbers[index]+"rd")
    }
    else{
        console.log(numbers[index]+"th")
    }
}

//Task 34
console.log("-------------------------------------------Task 34-------------------------------------------")
let pizzas = ["chicken tikka","perri perri","pepperoni"]
for (var index in pizzas){
    console.log(`I like ${pizzas[index]} pizza.`);
}
console.log("Margherita with its simplicity sublime, \nLoaded supreme with toppings of all kind, \nBBQ chicken with its tangy zing, Pizza \nin any form is my favorite thing!")
console.log("I really love pizza.")

//Task 35
console.log("-------------------------------------------Task 35-------------------------------------------")
let animals = ["Dog","Cat","Rabbit"]
for (var animal of animals){
    console.log(animal)
}
for (var animal of animals){
    switch(animal){
        case "Dog":
            console.log("A Dog would be a great pet.")
            break;
        case "Cat":
            console.log("A Cat can be a good companion.")
            break;
        case "Rabbit":
            console.log("A Rabbit is cute.")
            break;
    }
}
console.log("Any of these animals would make a greate pet.")

//Task 36
console.log("-------------------------------------------Task 36-------------------------------------------")
function make_shirt(size,message){
    console.log(`Creating a ${size}-size shirt with message: "${message}". `)
}
make_shirt("small","Learnig Typescript")

//Task 37
console.log("-------------------------------------------Task 37-------------------------------------------")
function make_shirt37(size="Large",message="I Love TypeScript"){
    console.log(`Creating a ${size}-size shirt with message: "${message}". `)
}
make_shirt37()
make_shirt37("Medium")
make_shirt37("Small","Want to learn TypeScript");

//Task 38
console.log("-------------------------------------------Task 38-------------------------------------------")
function describe_city(city,country="Pakistan"){
    console.log(`${city} is in ${country}.`)
}
describe_city("Karachi","Pakistan")
describe_city("Lahore")
describe_city("Madina","Saudia")

//Task 39
console.log("-------------------------------------------Task 39-------------------------------------------")
function city_country(city,country){
    return `${city},${country}`
}
console.log(city_country("Lahore","Pakistan"))
console.log(city_country("Karachi","Pakistan"))
console.log(city_country("Islamabad","Pakistan"))

//Task 40
console.log("-------------------------------------------Task 40-------------------------------------------")
// function make_album(title,artist,tracks?){
//     let album = {"artist":artist,"title":title}
//     if (tracks !== undefined){
//         album["tracks"] = tracks
//     }
//     return album
// }
// console.log(make_album("Hello","myself"))
// console.log(make_album("Hello","myself",16))

// Getting "SyntaxError: Unexpected token '?'"

//Task 41
console.log("-------------------------------------------Task 41-------------------------------------------")
function show_megicians(magicians){
    for(var name of magicians){
        console.log(name);
    }
}
let magicians = ["ali","haider","Adil","Awais"]
show_megicians(magicians)

//Task 42
console.log("-------------------------------------------Task 42-------------------------------------------")
function make_great(magicians){
    let modified_array = magicians.map(name => "Greate "+name)
    return modified_array
}
show_megicians(make_great(magicians))

//Task 43
console.log("-------------------------------------------Task 43-------------------------------------------")
let modified_array = make_great([...magicians])
show_megicians(magicians)
show_megicians(modified_array)

//Task 44
console.log("-------------------------------------------Task 44-------------------------------------------")
function makeSandwitch(...items){
    console.log("Making a sandwitch with following items:")
    for(var item of items){
        console.log("- "+item)
    }
}
makeSandwitch("Ham","Cheez")
makeSandwitch("Ham","Cheez","Chicken")
makeSandwitch("Ham","Cheez","Turkey","Avacado")

//Task 45
console.log("-------------------------------------------Task 45-------------------------------------------")
function car_info(manufacturer,model,...options){
    let car = {"Manufacturer":manufacturer,"Model":model,"Options":{}}
    for(let option of options){
        for (let key in option){
            car.Options[key] = option[key]
        }
    }
    return car
}
let myCar = car_info("Honda","city",{"color":"white"},{"year":2024})
console.log(myCar)
console.log(myCar.Options)
