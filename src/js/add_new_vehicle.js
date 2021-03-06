$(document).ready(function() {
  const BASE_URI = "http://localhost:3000";

  //display logout box
  if (localStorage.email) {
    $(".logout-box").css("display", "block");
  }

  const getFieldValue = () => {
    const make = document.querySelector(".car_make").value;
    const model = document.querySelector(".car_model").value;
    const year = document.querySelector(".year_of_manufacture").value;
    const bodyType = document.querySelector(".body_type").value;
    const fuel = document.querySelector(".fuel_type").value;
    const price = document.querySelector(".price").value;
    const colorType = document.querySelector(".colour_type").value;
    const interior = document.querySelector(".interior_type").value;
    const condition = document.querySelector(".condition").value;
    const engineSize = document.querySelector(".engine_size").value;
    const mileage = document.querySelector(".mileage").value;
    const imageValue = document.querySelector(".image_url").value;
    const imageUrl = imageValue.replace("C:\\fakepath\\", "images/");
    const transmission = document.querySelector(".transmission_type").value;
    const description = document.querySelector(".description").value;

    return {
      make,
      model,
      year,
      bodyType,
      fuel,
      price,
      colorType,
      interior,
      condition,
      engineSize,
      imageUrl,
      mileage,
      transmission,
      description
    };
  };

  //ADD(CREATE) A NEW CAR TO THE DATABASE

  $("#add_car_button").click(function(event) {
    event.preventDefault();
    const data = getFieldValue();
    $(function() {
      $.ajax({
        url: `${BASE_URI}/cars`,
        method: "POST",
        data,
        success: function() {
          alert("Your car has been added to the database.");
        }
      });
    });
  });

  //UPDATE EXISTING CAR DETAILS
  $("#update_car_button").click(function(event) {
    event.preventDefault();
    const { id } = JSON.parse(localStorage.car);
    const data = getFieldValue();
    $(function() {
      $.ajax({
        url: `${BASE_URI}/cars/${id}`,
        method: "PUT",
        data,
        success: function() {
          alert("Your car details have been successfully updated.");
        },
        error: function(err) {
          console.log("Error :", err);
        }
      });
    });
  });
});

//add new vehicle form field value;
