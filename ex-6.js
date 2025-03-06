const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)) {
    // ถ้ามียี่ห้อรถนี้ใน carCollection
    const index = carCollection.indexOf(carBrand);
    return `${carBrand} has already existed in the ${
      index + 1
    } position of car collection.`;
  } else {
    // ถ้าไม่มี
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection.join(",")}.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
