const BASE_URI = "http://localhost:3000/";

//insert data from db into the DOM
const displayCarsOnUi = carsArray => {
  const carsContainer = document.querySelector(".car-group");
  carsArray.map(car => {
    const html = ` <div class="card m-4 car-card" data-car='${JSON.stringify(
      car
    )}'>
          <img src=${car.imageUrl} class="card-img-top car-card-img" alt=${
      car.make
    } />
          <div class="card-body" >
            <h3 class="card-title car-name">${car.make} ${car.model}</h3>
            <p class="card-text">Price: ₦<span class="price">${
              car.price
            }</span></p>
            <a href="#"  class="btn btn-all-features details-link" id="details_btn">View Details</a>
          </div>
        </div>`;
    return carsContainer.insertAdjacentHTML("beforeend", html);
  });
};

// //loads details.html page for the selected car
const loadDetailsPage = ({ path }) => {
  const car = JSON.parse(path[2].dataset.car);
    localStorage.setItem('car', JSON.stringify(car))

  window.location = "details.html";
};

const uiCanInteract = () => {
  const viewDetails = document.querySelectorAll("#details_btn");
  viewDetails.forEach(carCard => {
    carCard.addEventListener("click", loadDetailsPage);
  });
};

//grab cars from the data base
const getCars = async () => {
  const response = await fetch(`${BASE_URI}cars`);
  const carsArray = await response.json();
  displayCarsOnUi(carsArray);
  uiCanInteract();
};
getCars();
