document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the values of username and password fields
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Check if the username and password match
        if (username === "Rahul" && password === "Pakhare") {
            // If matched, redirect to subjects.html
            window.location.href = "subjects.html";
        } else {
            // If not matched, display an alert
            alert("Invalid username or password. Please try again.");
        }
    }
    
    // Add submit event listener to the form
    document.getElementById("loginForm").addEventListener("submit", handleSubmit);
});
