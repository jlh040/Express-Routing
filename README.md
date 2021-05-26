### Express Routing

#### Functionality

- This is an app that showcases my knowledge of how to work with routes in Express. There are three routes: **/mean**, **/median**, and **/mode**. All GET routes. Each one requires that a comma-separated list of numbers be passed into the query string, and then the appropriate statistical operation will be performed and returned as JSON to the user.
- Note that I have provided both unit and integration tests for this application.

#### Technicalities

- To get this code onto your machine, first run `git clone https://github.com/jlh040/Express-Routing.git`.
- Then, assuming you have [Node](https://nodejs.org/en/) installed, run `npm install` to download all of the packages in **package.json**.
- Next, run `node server.js` in your terminal and then enter something like **localhost:3000/median?nums=4,5,6,7,8** into your browser to get some JSON back.