
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Please fill in all the required fields.");
      return false; // Prevent form submission
    }

    // Form validation successful, allow form submission
    return true;
  }


  /////////for changing the login in html----------------

// Get the form element
var form = document.getElementById("form");

// Attach an event listener to the form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Perform form validation here

  // Store the login status in sessionStorage
  sessionStorage.setItem("loggedIn", "true");
  
  // Redirect to the desired page
  window.location.href = "../index.html";
});

