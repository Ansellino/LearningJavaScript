// Overriding Method

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("white", "B", "Galaxy S21", "Smart TV");
android.charging(); // charging Galaxy S21

/*
Output:
charging Galaxy S21
Charging Galaxy S21 with fast charger
*/
