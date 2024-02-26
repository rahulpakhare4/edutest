window.onload = function() {
    document.getElementById("message").innerHTML = "Welcome to the Multiplication Section! Here, you can test and improve your multiplication abilities. Upon clicking the Next Button, two numbers will appear for you to multiply. Enter your calculation in the input box and click the Next Button once more. The Result text will indicate whether your answer is correct or not.";
  };
  
  document.addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
  });