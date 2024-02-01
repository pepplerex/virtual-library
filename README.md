# Laravel + React Virtual Book Library
 
- A simple book library written in React js on the frntend and PHP Laravel on the backend
- The project is optimized for large screen as there was no specific request to design for smaller screens
- Beautiful form modals, user notifcation alerts
- Elegant UI built from scratch specifically for this purpose

  ![b1](https://github.com/pepplerex/virtual-library/assets/107540519/0cf06756-be10-4ad3-a459-4a707c7bb591)

  # Getting strated(frontend)

  - Clone this repo to your machine
  - cd into frontend
  - in you terminal, run npm run dev
  - Application will start and run on --port 3000
  - acess with http://localhost:3000
 
    ![client running](https://github.com/pepplerex/virtual-library/assets/107540519/a959388f-33a1-452d-8f22-0c9bf2a9fcd6)
 
    # Getting started(backend)
    - once you have the project in your machine
    - from the root folder, cd into server
    - before anything, ensure you have php and mysql on your machine and running
    - open your terminal and run php artisan migrate --seed
    - I have created some mock dataset for the authors and books to populate your database for testing
    - after migration, in your terminal run php artisan serve
    - server will start and run on port --port 8000
    - Once you have the backend running, refresh the frontend page in the browser to make requests to the endpoints and            retrieve the data accordingly
   
      ![server running](https://github.com/pepplerex/virtual-library/assets/107540519/8d4404be-afcc-4bb9-9d16-05e6e2a496f6)

      # API ENDPOINTS

      - GET /books - Gets all the books in the database
      - GET /book/{id} - Gets the book specific to the id
      - POST /book - creates a new book
      - PUT /books/{id} - Updates the book with specified id
     
      - GET /authour - Gets all the auhtors in the database
      - GET /author/{id} - Gets the author specific to the id
      - POST /author - creates a new author
      - PUT /auhtours/{id} - Updates the auhtor with specified id
     
        # Additional UI Images

        ![modal](https://github.com/pepplerex/virtual-library/assets/107540519/128b6c73-a387-4cd0-b087-49dec620d480)

        ![author](https://github.com/pepplerex/virtual-library/assets/107540519/7745a70d-d161-4457-89ac-a08fc1402e19)

      
