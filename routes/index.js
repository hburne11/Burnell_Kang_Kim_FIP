import express from 'express';

const router = express.Router();

import path from 'path';

// define root route
router.get('/', (req, res) => {
    //res.send('hello from express!');
    // send back the index.html
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/trevor', (req, res) => {
    //res.send(`this is trevor's page`);
    console.log(`hit trevor's page!`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));

})

router.get('/joe', (req, res) => {
    //res.send(`this is joe's page`);
    console.log(`hit joe's page!`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/john', (req, res) => {
    //res.send(`this is john's page`);
    console.log(`hit john's page!`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));
})

// export the router file and make it avaliable to app.js
export default router;