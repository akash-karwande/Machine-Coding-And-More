const obj = {
    name: "Akash",
    lastName: "Karwande"
}

function logDetails(city) {
    console.log(this.name + ' ' + this.lastName + ' ' + city)
}

logDetails.call(obj, "Basmath"); /// call method

logDetails.apply(obj, ["Basmath"]); /// call method
let callmeBack = logDetails.bind(obj, "Basmath");
callmeBack();
