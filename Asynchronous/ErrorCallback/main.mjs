import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";
console.log(`Saya memesan ${order} di kafe buxsel`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});
