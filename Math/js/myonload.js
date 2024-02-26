window.onload = function() {
    
    document.getElementById("message").innerHTML = "Welcome to the addition section, where you can practice your math skills. Upon clicking the 'Next' button, two numbers will appear. Your task is to add these numbers and enter the result in the answer input box. Once you have entered your answer, click the 'Next' button again to receive feedback on the correctness of your answer. The result of your calculation will be displayed next to the text 'Result.";
    document.getElementById("add").className = "onloadmargin";
    
};
  
  document.addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("add").className = "questionform";
  });