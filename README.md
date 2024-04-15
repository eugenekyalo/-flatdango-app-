# -flatdango-app-
Flatdango
Flatdango is a movie ticket booking application that allows users to browse available movies, view movie details, purchase tickets, and more.

Demo
Flatdango App Demo

Setup
Clone the repository:

bash
Copy code
git clone https://github.com/eugenekyalo/flatdango.git
Navigate to the project directory:

bash
Copy code
cd flatdango
Install dependencies:

bash
Copy code
npm install
Start the JSON server:

bash
Copy code
json-server --watch db.json
Open the index.html file in your browser to run the application.

Core Features
View Movie Details: Upon loading the page, users can see the details of the first movie, including its poster, title, runtime, showtime, and available tickets.
Browse Movie Menu: Users can see a menu of all available movies on the left side of the page.
Purchase Tickets: Users can buy tickets for a movie, with the available tickets updating dynamically after each purchase.
Delete Movies: Admin users can delete movies from the server, with the corresponding movie removed from the menu.
Sold Out Indication: Movies that are sold out are indicated as "Sold Out" in the menu.
API Endpoints
GET /films: Retrieve all movies.
GET /films/:id: Retrieve details of a specific movie.
PATCH /films/:id: Update the number of tickets sold for a movie.
DELETE /films/:id: Delete a movie.
POST /tickets: Add a new ticket purchase.
Bonus Features
Switch Movie Details: Users can click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
Technologies Used
HTML
CSS
JavaScript
JSON Server
Contributors
Eugene Kyalo
License
This project is licensed under the MIT License - see the LICENSE file for details.
