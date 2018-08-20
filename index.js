let store = {
  drivers:[]
}

let id = 0;
class Driver{
  constructor(name,id){
    this.name = name;
    this.id = id;
    store.drivers.push(this);
  }
}