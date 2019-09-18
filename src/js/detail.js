const car = localStorage.getItem('car');
const carDetails = document.querySelector('car-name-box');
console.log(carDetails);
console.log(car);
const detailsHtml = `<h1>
          ${car.year} ${car.colour} ${car.transmission} ${car.make} ${car.model}
          <span id="price_data"> ₦${car.price}</span>
        </h1>`;

carDetails.innerHTML += detailsHtml;