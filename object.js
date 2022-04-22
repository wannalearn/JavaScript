const car = {
    name :  "BMW",
    model : "500i",
    color : "White",
    start : function (){
        console.log("Car has started");
    },
    drive : function (){
        console.log("Car is driving");
    },
};

console.log(car.name);
console.log(car['model']);
car.start();
car.drive();
