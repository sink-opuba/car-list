$(document).ready(function() {
  const displayResult = ([car]) => {
    if(car.id === 1) {
        const img = document.querySelector("img");
        img.src = car.imageUrl;
    }
  }
  const Url = "http://localhost:3000/cars";
  $.ajax({
    url: Url,
    type: "GET",
    success: function(result) {
      displayResult(result);
    //   console.log(result);
    },
    error: function(err) {
      console.log(err);
    }
  });
});
