   // Get the count from the local storage
    let count = localStorage.getItem("count");

    // If the count is null, set it to zero
    if (count === null) {
      count = 0;
    }

    // Increment the count by one
    count++;

    // Save the count back to the local storage
    localStorage.setItem("count", count);

    // Display the count on the page
    document.getElementById("count").textContent = count;
