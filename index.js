const port = 6000; 
const express = require('express'); 
const axios = require('axios'); 
const cheerio = require('cheerio'); 
const app = express();

const url = 'https://www.scrapethissite.com/pages/simple/'; 

const countries = []; 

axios(url)
    .then(response => {
        const html = response.data; 
       const $ = cheerio.load(html); 
       const data = []; 
       
       $('.country', html).each( function() {
         const country = $(this).find('h3').text().replace(/\s\s+/g, '');
         const capital = $(this).find('.country-capital').text().replace(/\s\s+/g, ''); 
         const population = $(this).find('.country-population').text();  
         
         data.push({
            country,
            capital,
            population
         })
         console.log(data); 
       })
 }).catch(err => console.log(err)); 



 



 


app.listen(port, () => console.log(`Port is active and listening on port ${port}`))