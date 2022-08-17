# SpaceX Past Launches 
This project displays SpaceX's past launch missions based on their public [GraphQL API](https://github.com/SpaceXLand/api). 

- *PAST LAUNCHES* displays 30 Past Launche Items, where each card has a random image from the mission's Flickr, the mission's name, site name the date it launched based on the `Europe/Tirane` timezone, and an article of the mission. 
Also when you click on any of the cards it takes to a new page with more detailed information about the mission and the rocket used.

## Requirements
- `npm@8.15.0`
- `node@18.7.0`
- `react@18.2.0`
- `react-dom@18.2.0`
- `react-router-dom@6.3.0`
- `@apollo/client@3.6.9`
- `graphql@16.5.0`
- `@mui/icons-material@5.8.4`
- `@mui/material@5.10.0`

## Getting Started

First install the dependencies:

```bash
npm install
```

Then, In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can start editing the page by modifying `src/App.js`. The page auto-updates as you edit the file.

## Production Mode

If you want to run the production mode, first you have to build the project:

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Then you can start the production mode:
```bash
npm start
```
After you finish these steps, the app will start at [http://localhost:3000](http://localhost:3000).