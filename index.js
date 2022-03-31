const express = require('express')
const app = express()
const cors = require('cors');

const port = 5000;

app.use( cors() )

app.get('/', (req, res) => {
  res.send('Hello World in nodejs!')
});

app.get('/productos', (req, res) => {
    const productos = [];
    productos.push({
        "sku": "CURJSDC", 
        "nombre": "Curso Javascript desde cero",
        "precio": 229,
        "descripcion": "Inicia en el maravilloso mundo de JS",
        "imagen":"javascript.png",
        "existencia": 1
    });

    productos.push({
        "sku": "CURJAVADC",
        "nombre": "Java desde cero",
        "precio": 199,
        "descripcion": "Inicia en el maravilloso mundo de Java",
        "imagen":"java.jpeg",
        "existencia": 0
    });

    productos.push({
        "sku": "CURCHSARPDC",
        "nombre": "Curso C#  desde cero",
        "precio": 300,
        "descripcion": "Inicia en el maravilloso mundo de React native",
        "imagen":"csharp.jpeg",
        "existencia": 1
    });

    productos.push({
        "sku": "CURAWSDC",
        "nombre": "Curso AWS desde cero",
        "precio": 149,
        "descripcion": "Inicia en el maravilloso mundo de React native",
        "imagen":"aws.jpeg",
        "existencia": 1
    });

    productos.push({
        "sku": "CURNODEJSDC",
        "nombre": "Curso nodejs desde cero",
        "precio": 349,
        "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
        "imagen":"nodejs.png",
        "existencia": 1
    });

    productos.push({
        "sku": "CURNODEJSDC",
        "nombre": "Curso nodejs desde cero",
        "precio": 349,
        "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
        "imagen":"nodejs.png",
        "existencia": 1
    });

    productos.push({
        "sku": "ITEMPULSERA",
        "nombre": "Pulsera decorativa SomosGurus",
        "precio": 100,
        "descripcion": "Demuestra que eres un verdadero Gurú",
        "imagen":"pulsera.jpeg",
        "existencia": 100
    });
    
    res.json(productos);
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