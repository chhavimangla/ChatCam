
///////////to display the chosen item------------------------
 // Get the dropdown element
 var dropdown = document.querySelector('.dropdown');

 // Get the dropdown items
 var dropdownItems = dropdown.querySelectorAll('.dropdown-item');

 // Add event listener to each dropdown item
 dropdownItems.forEach(function(item) {
     item.addEventListener('click', function() {
         // Get the chosen item's text
         var chosenItemText = item.innerText;

         document.getElementById("dropdownMenuButton").textContent= chosenItemText;
     });
 });



/////////for changing the login in html----------------
// Check if the user is logged in
if (sessionStorage.getItem("loggedIn") === "true") {
  // Change the link text to "Log Out"
  document.getElementById("loginLink").textContent = "Log Out";
}
