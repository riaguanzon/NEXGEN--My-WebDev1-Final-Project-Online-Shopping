document.getElementById("loginBtn").addEventListener("click", function() {
    var isLoggedIn = false; // Change this to true if the user is logged in
    
    if (!isLoggedIn) {
      document.getElementById("alert").style.display = "block";
    } else {
      alert("You are logged in!");
    }
  });
  