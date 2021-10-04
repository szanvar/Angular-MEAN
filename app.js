const { request, response } = require('express');
const express = require('express');

const app = express();

app.listen(3200, Marvellous);

function Marvellous(request, response)
{
    console.log("Marvellous Server is Started...");
}


app.get('/getBatches', MarvellousBatches);

function MarvellousBatches(request, response)
{
   response.json({
       "Batch Name" : "Angular",
       "Fees" : 11000
   });
}

app.get('/getAdminDetails', MarvellousAdmin);

function MarvellousAdmin(request, response)
{
    response.json({
        "Mobile" : "8149290720",
        "Email" : "seemazavar08@gmail.com"  
    });
}

app.get('/Demo', (request,response) => {
    response.json({
        "Data" : "Marvellous"
    });
})

app.get('/', MarvellousAdmin);

function MarvellousAdmin(request, response)
{
    response.json({
        "Mobile" : "8149290720",
        "Email" : "seemazavar08@gmail.com"  
    });
}