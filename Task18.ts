let places = ["Madina","Maakka","Dubai","Turkey","Canada"];
console.log(places);
console.log([...places].sort()); //copy of original list
console.log(places);
console.log([...places].sort((a,b) => b.localeCompare(a)));
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.sort((a,b) => b.localeCompare(a)));