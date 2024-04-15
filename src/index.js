document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Fetch movie data
    fetch("http://localhost:3000/films")
      .then(function(response) {
        return response.json();
      })
      .then(function(films) {
        var filmsList = document.getElementById("films");
        films.forEach(function(film) {
          var li = document.createElement("li");
          li.textContent = film.title;
          filmsList.appendChild(li);
          
          // Event listener for clicking on a movie in the menu
          li.addEventListener("click", function() {
            fetch("http://localhost:3000/films/" + film.id)
              .then(function(response) {
                return response.json();
              })
              .then(function(movie) {
                var movieDetails = document.getElementById("movie-details");
                movieDetails.innerHTML = `
                  <h2>${movie.title}</h2>
                  <p>Description: ${movie.description}</p>
                  <p>Runtime: ${movie.runtime} minutes</p>
                  <p>Showtime: ${movie.showtime}</p>
                  <p>Tickets Available: ${movie.capacity - movie.tickets_sold}</p>
                  <button id="buy-ticket">Buy Ticket</button>
                `;
              })
              .catch(function(error) {
                console.error("Error fetching movie details:", error);
              });
          });
        });
      })
      .catch(function(error) {
        console.error("Error fetching films:", error);
      });
  
    // Step 3: Buy a ticket
    document.getElementById("movie-details").addEventListener("click", function(event) {
      if (event.target.id === "buy-ticket") {
        alert("Ticket purchased successfully!");
      }
    });
  });
  