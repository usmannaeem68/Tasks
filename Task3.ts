let personName = "usman naeem";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase()));