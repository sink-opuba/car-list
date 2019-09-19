//retrieve object from localstorage and populate DOM
const car = JSON.parse(localStorage.car);

const BASE_URI = "http://localhost:3000";
 
 //Inject formated HTML to specific portions of page 
 const carHeader = `<h1>
          ${car.year} ${car.colorType} ${car.transmission} ${car.make} ${car.model}
          <span id="price_data"> ₦${car.price}</span>
        </h1>`;
$('.car-name-box').append(carHeader);

const carDetails = `<div class="car-image">
          <img src=${car.imageUrl} alt="" width="200px" />
        </div>
        <div class="details">
          <div class="description-box">
            <h2 class="description-text">Description</h2>
            <p>${car.description}</p>
          </div>

          <h2 class="overview-text">Overview</h2>
          <div class="overview-box">
            <div class="features">
              <h2>Condition</h2>
              <p>${car.condition}</p>
            </div>
            <div class="features">
              <h2>Body Type</h2>
              <p>${car.bodyType}</p>
            </div>
            <div class="features">
              <h2>Mileage</h2>
              <p>${car.mileage}</p>
            </div>
            <div class="features">
              <h2>Transmission Type</h2>
              <p>${car.transmission}</p>
            </div>
            <div class="features">
              <h2>Year</h2>
              <p>${car.year}</p>
            </div>
            <div class="features">
              <h2>Fuel Type</h2>
              <p>${car.fuel}</p>
            </div>
            <div class="features">
              <h2>Colour</h2>
              <p>${car.colorType}</p>
            </div>
            <div class="features">
              <h2>Engine size (cc)</h2>
              <p>${car.engineSize}</p>
            </div>`

$('.details-box').append(carDetails)

if(localStorage.email) {
  $('.admin_box').css("visibility", "visible");
  $('.logout-box').css("display", "block");
}


$(document).ready(function() {
  //DELETE REQUEST
  $('#delete_car_button').click(function(){
   console.log('button clicked')
    $.ajax({
      url: `${BASE_URI}/cars/${car.id}`,
      method: 'DELETE',
      success: function() {
        window.location.replace('index.html');
      },
      error: function(err) {
        console.log('Error : ', err)
      }
    })    
  })


  //GET UPDATE DETAILS FROM DETAILS PAGE
//   $(function () {
//     $("#update_from_details").click(function () {
//       console.log("Hello");
//     });
//   });
});
