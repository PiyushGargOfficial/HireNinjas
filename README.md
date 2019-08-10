# HireNinjas
Made with HTML 5, CSS 3 , Javascript , NodeJS(Express) and MongoDB(Mongoose) with GEOJSON..

1.To Start the app:
a.Download mongodb and add the bin address in environment variables=>path.
b.create a folder for database (name anything).
c.copy its path and open cmd , type mongod --dbpath=PATH --smallfiles
d.open another cmd and type mongo.exe and you are started with mongodb.

2.For Express:
a.in terminal give the path of the file using cd PATH where PATH = path of index.js
a.open text editor and then terminal and type npm install which will install all your pakages.
b.now in terminal type nodemon index or better is npm run dev.

3.For Server : 
a.server is hosted on localhost:1234 . 
b.there is not much data inputed i.e. for the ninjas , I inputed only 6 ninjas data .
c.So search lat = 25 and lng = -80 and play around these for different values.

4.For Playing Around:
a. I have also made routes for adding ninjas , updating and deleting them.
b.So you can play around and add more ninjas or create a front end for CRUD operations on ninjas or a login page using jwt and password hash/bcrypt.
c.OR since i have return the CRUD operations in the backend , you can test in postman.
