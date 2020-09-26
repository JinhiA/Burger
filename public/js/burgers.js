$(function() {
  $(".devourButton").on("click", function(event) {
    const id = $(this).data("id");
    const devouredBurger = $(this).data("devoured");

    const newDevoured = {
      devoured: devouredBurger
    };
  
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});