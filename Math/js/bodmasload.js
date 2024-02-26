window.onload = function() {
    document.getElementById("message").innerHTML = "<p>Welcome to the BODMAS Question Web Application!</p><p>In this section, you will be challenged with BODMAS problems. Simply press the Next Button to see the question, enter your answer in the input box, and press the Next Button again. The Result text will indicate whether your answer is correct or not.</p><p>Note: BODMAS stands for Brackets, Orders, Division, Multiplication, Addition, and Subtraction. It is a rule used to determine the order in which arithmetic operations should be performed.</p>";
  };
  
  document.addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
  });