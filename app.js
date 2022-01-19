// install: npm i -s express
import express from 'express';
import router from './routes/index.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// setup the static assetes
app.use(express.static(path.join(__dirname, 'public')));

// getting route paramers (like php GET and POST superglobals)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// main routes
app.use('/', router);

// use this route for anything that doesn't match
app.use(function(req, res) {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '/views/404.html'));
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});

// to test server, open new gitbash (rightclick on proj folder)
// then type npm run start
// it ruturns 
// 22w-week1-ngo-teambuild@1.0.0 start
// > node app
// Server running at port: 3000/

// to open webpage, url is http://127.0.0.1:3000/
// add /trevor or /joe to navigate
