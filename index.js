let store = {
  drivers:[],
  passengers:[],
  trips:[]
}

let driverId = 0;
class Driver{
  constructor(name){
    this.name = name;
    this.driverId = ++driverId;
    store.drivers.push(this);
  }
}

let passengerId = 0;
class Passenger{
  constructor(name){
    this.name = name;
    this.passengerId = ++passengerId;
    store.passengers.push(this);
  }
}

let tripId = 0;
class Trip{
  constructor(name){
    this.name = name;
    this.tripId = ++tripId;
    store.trips.push(this);
  }
  driverId(driver){
    this.userId = user.id
  }
}



