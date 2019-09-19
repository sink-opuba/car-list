$(document).ready(function() {
    //convert first-letter to uppercase
    // const upper = str => (str = str[0].toUpperCase() + str.slice(1));
    const BASE_URI = "http://localhost:3000";
    
    //display logout box
    if(localStorage.email) {
        $('.logout-box').css("display", "block");
    }

    $("#add_car_button").click(function(event) {
        event.preventDefault();
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
        const imageUrl = imageValue.replace("C:\\fakepath\\", "/images/");
        const transmission = document.querySelector(".transmission_type").value;
        const description = document.querySelector(".description").value;
        
        const data = {
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
        }
//ADD A NEW CAR TO THE DATABASE
        $(function() {
            $.ajax({
                url: `${BASE_URI}/cars`,
                method: "POST",
                data,
                success: function () {
                    alert('Your car has been added to the database.')
                }
            });
        })
    });
});
//add new vehicle form field value;
