# WebAPI Dashboards

## Overview
WebAPI Dashboards is a project showcasing interactive dashboards and API integrations for various functionalities. This repository demonstrates the use of multiple web technologies to fetch, process, and display data from different sources, including GitHub, weather services, Firebase, and COVID-19 data APIs. It also includes examples of CRUD operations.

## Features
1. **GitHub API Integration:**
   - Fetch and display GitHub repository details using `GitHub.js`.
   - ![GitHub API Example](images/github_info.png)

2. **Weather Dashboard:**
   - Display real-time weather information using the `weather.js` script.
   - ![Weather Dashboard](images/weather_info.png)

3. **COVID-19 Data Dashboard:**
   - Fetch and display COVID-19 statistics using `covid.js`.
   - ![COVID-19 Dashboard](images/covid_info.png)

4. **Firebase CRUD Operations:**
   - Implement basic Create, Read, Update, and Delete firebase functionality using `CrudOperations.js`.
   - ![CRUD Operations Example](images/crud_operations.png)


## Project Structure
```
WebAPI-Dashboards/
|
|-- CrudOperations.js       # JavaScript for CRUD operations
|-- Firebase.html           # HTML page for Firebase integration
|-- GitHub.js               # Script to interact with GitHub API
|-- covid.js                # Script for COVID-19 data
|-- index.html              # HTML page to show weather info
|-- index1.html             # HTML page to show covid data
|-- index3.html             # HTML page to show github repo
|-- weather.js              # Script for weather data
```

## Prerequisites
- A modern web browser
- Internet connection to fetch API data

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/goda-kodati/WebAPI-Dashboards.git
   ```

2. Open the desired HTML file (e.g., `index.html`) in your web browser to explore a specific feature.

3. Ensure you have an active internet connection for APIs to fetch data.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **APIs Used:**
  - GitHub API
  - Weather API
  - COVID-19 Data API
  - Firebase

## Future Enhancements
- Improve UI/UX for better user interaction.
- Add more APIs for extended functionality.
- Enhance the performance of data fetching and rendering.

## Contributors
- **Goda Kodati** - [GitHub Profile](https://github.com/goda-kodati)

## License
This project is licensed under the MIT License.
