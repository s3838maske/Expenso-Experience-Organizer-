Experience Form App
A React-based form for adding professional experience details, integrated with Redux for state management. The form fetches and displays a list of Indian states and cities via an API, with form validation handled by React Hook Form. It also includes error handling for API requests.

Features
Add professional experience details such as job title, company name, and job location (state and city).
Dynamic fetching of Indian states and cities from an external API.
Form validation using React Hook Form to ensure accurate data input.
Error handling with clear UI messages for failed API requests.
Form submission with a loading state and data dispatch to Redux.
Technologies Used
React: Frontend framework for building user interfaces.
Redux: State management to store experience data.
React Hook Form: For form validation and input management.
Axios: For making HTTP requests to fetch states and cities.
Tailwind CSS: For quick and responsive styling.
JavaScript (ES6+): Core language features like async/await for API handling.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/experience-form-app.git
cd experience-form-app
Install the necessary dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
API Integration
This project uses the CountriesNow API to fetch the list of states and cities in India.

States API: Fetches a list of states from India.
Cities API: Fetches a list of cities based on the selected state.
Usage
Open the experience form by clicking the button that toggles its visibility.
Fill in details like Year of Experience, Job Title, Company Name, State, and City.
Submit the form to dispatch the data to the Redux store.
If there are errors in the form (e.g., invalid input), error messages will appear.
API-related errors (e.g., failed to fetch states/cities) are displayed as error messages at the top of the form.
Folder Structure
css
Copy code
├── src
│   ├── Components
│   │   ├── Common
│   │   │   ├── Button.js
│   │   │   ├── Loading.js
│   │   └── Wrapper.js
│   ├── Store
│   │   ├── ExperienceData
│   │   │   ├── experienceAction.js
│   │   │   ├── experienceReducer.js
│   └── App.js
│   └── index.js
│
└── README.md
Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Contributing
If you'd like to contribute, feel free to submit a pull request. Any enhancements, bug fixes, or suggestions are welcome!

License
This project is licensed under the MIT License.

This README.md file explains the project, setup, and usage. You can customize the repository URL and additional details according to your needs.
