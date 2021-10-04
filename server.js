const {response } = require('express');
const express = require('express');

const server = express();

server.listen(3300, Marvellous);

function Marvellous(request, response)
{
    console.log("Marvellous 3300 Server is Started...");
}


server.get('/getAdminDetails', MarvellousAdmin);

function MarvellousAdmin(request, response)
{
    response.json({
        "Mobile" : "8149290720",
        "Email" : "seemazavar08@gmail.com"  
    });
}

server.get('/getBatches',MarvellousBatches);

function MarvellousBatches(request, response)
{
    response.json([
    {
        "BatchName" : "Angular",
        "Fees" : 11000
    }
]);

}