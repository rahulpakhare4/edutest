window.onload = function() {
    document.getElementById("message").innerHTML = "<p>Welcome to the Math Tables section where a random number between 2 and 16 will be generated each time the Next button is clicked. The corresponding table should be filled in and clicking Check Answer will show the answer correctness.</p>";
  };
  
  document.addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
  });