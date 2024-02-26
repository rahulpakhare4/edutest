window.onload = function() {
    document.getElementById("message").innerHTML = "Welcome to the subtraction section! Here, you can test your subtraction skills. Every time you click the Next Button, two numbers for subtraction will appear. Simply enter your calculation into the input box and hit the Next Button again. The correctness of your answer will be shown next to the Result text.";
  };
  
  document.addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
  });
  