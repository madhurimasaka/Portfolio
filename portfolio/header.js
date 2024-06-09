// header.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
    });
});
// Fetch the header content from the header.html file
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    // Insert the header content into the 'header' div
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });
