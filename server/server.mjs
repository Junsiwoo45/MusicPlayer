import express, { response } from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import db from "./db/conn.mjs";
//import http from "http";
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();



app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", //telling our server which url/server is gonna be makiing calls to our socket.io server
    credentials: true,
  })
);

app.post('/spotifyLogin', (req, res) => {
const code = req.body.code
const spotifyApi = new SpotifyWebApi({
  redirectUri: 'http://localhost:3000',
  clientId: '7307ec35fb414373b246109805e86181',
  clientSecret: ''
})
})


const PORT = process.env.PORT || 4000;

//GET Requests
app.get("/", (req, res) => res.send("Hello, World!"));
app.get("/helloworld", (req,res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
