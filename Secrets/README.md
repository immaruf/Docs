## Secrets App Using `MongoDB`, `express`, `Nodejs`, `EJS`
* NodeJS- For rendering the Server side handling of GET and POST requests and connecting to DB
* MongoDB- The User data are saved in a Mongo Database deployed on AWS via MongoDB
* ExpressJS- For passing the data from user to DB and vice versa.
* EJS- For rendering the data from user to DB and vice versa on the webpages.
* NPM Packages- Various other NPM packages like Body-Parser etc
* Communication between browser and server is established.

[Live Site- Click Here!](https://s3cr3ts.herokuapp.com)

### RUN
#### Running locally
```
$ git clone https://github.com/immaruf/docs.git
$ cd Docs/Secrets
$ npm install
$ mongod  
    # if you don't have mongodb installed, use $ apt-get install mongodb
$ node app.js
```
now you can use this app via [http://localhost:3000/](http://localhost:3000/)

### How to get a CLIENT_ID & CLIENT_SECRET?
#### Create an Application

To get a CLIENT_ID and a CLIENT_SECRET you must register an application with Google. If you have not already done so, a new project can be created in the [Google Developers Console](https://console.developers.google.com/). Your application will be issued a client ID and client secret, which need to be provided to the strategy. You will also need to configure a redirect URI which matches the route in your application.

###### To understand the working process of `passportjs`,  then take a look at [PassportJS Documentation](www.passportjs.org/docs/).
