const express = require('express')
const app = express()
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const port = 5000;

app.use( cors() );

//app.use( bodyParser.urlencoded({ extended: true }));

app.use( bodyParser.json() ); // 

app.get('/', (req, res) => {
  res.send('Hello World in nodejs!')
});

app.get('/productos', (req, res) => {
    var productos = [];
    fs.open( path.join(__dirname, 'productos.json'), (err, fd) => {
        if(err){
            res.send({
                "error": true,
                "reason": err.message
            })
        } else {
            fs.readFile(fd, 'utf-8', (err, data)=> {
                if(err) {
                    res.send({
                        "error": false,
                        "reason": err.message
                    })
                } else {
                    productos = JSON.parse(data);
                    res.json(productos);
                }
            })
        }
    });
});

app.post("/productos", function (req, res) {
    try {
        const data = fs.readFileSync( path.join(__dirname, 'productos.json'), "utf-8");
        const productos = JSON.parse(data);
        productos.push(req.body);
        fs.writeFile( path.join(__dirname, 'productos.json'), JSON.stringify(productos), error=> {
            if(error) {
                res.json({
                    "done": false,
                    "reason" : error.message
                });
            } else {
                res.json({
                    "done": true,
                    "reason" : req.body
                });
            }
        });
    } catch (error) {
        res.json({
            "done": false,
            "reason" : error.message
        });
    }
});

app.get("/productos/:sku", function(req, res) {
    const sku = req.params.sku;
});

app.get("/sesiones/carrito", function(req, res) {
    
})
app.post("/sesiones/carrito", function(req, res) {

});
app.put("/sesiones/carrito", function(req, res) {
    
});
app.delete("/sesiones/carrito", function(req, res) {
    
});

app.listen(port, () => {
    console.log("Aplicacion iniciada");
})