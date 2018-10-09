require("./db/mongoose.js");
const bodyParser = require("body-parser");
const {jewelry} = require("./models/jewelry.js");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        //For contact form info
        extended: true
    })
);

//GET

app.get("/products", (req, res) => {
    jewelry
      .find()
      .then(product => res.send(product))
      .catch(err => res.status(400).send(err));
  });

//GET  ID
app.get('/products/:id', (req, res) => {
    const id = (req.params.id)
    jewelry.findOne({
        productId: id
    }).then((jewel) => {
        if (jewel) {
            res.send(jewel)
        } else {
            res.status(404).send("Unable to find Jewelry")
        }
    }).catch(err => res.status(400).send(err))
})

// //POST
// app.post('/products', (req, res) => {
//     const {
//         productId,
//         productName,
//         month,
//         productDescription,
//         productPrice,
//         url
//     } = req.body;
//     const newProduct = new jewelry({
//         productId,
//         productName,
//         month,
//         productDescription,
//         productPrice,
//         url
//     });
    
//     // jewelry.finOne({
//     //     productId
//     // }).then((jewel) => {
//     //     if (!jewel) {
//     //         product.save().then(obj => {
//     //             res.send(obj)
//     //         })
//     //     } else {
//     //         res.status(404).send("Unable to add products")
//     //     }
//     // }); 
// });

// //DELETE
// app.delete("products/:id", (req, res) => {
//     const id = parseInt(req, params.id)
//     jewelry.findOneAndDelete({
//         productId: id
//     }).then(jewelry => {
//         if (jewelry) {
//             re.send(jewelry)
//         } else {
//             res.status(400).send("Unable To Delete Product");
//         }
//     }).catch(err => res.status(400).send(err))
// })

// //UPDATE
// app.put("/product/:id", (req, res) => {
//     const id = parseInt(req.params.id)
//     let body = req.body

//     jewelry.findOneAndUpdate({
//         productId: id
//     }, {
//         $set: body
//     }, {
//         new: true
//     }).then(jewelry => {
//         if (!cars) {
//             return res.status(400).send("Unable To Update Products");
//         } else {
//             res.send(jewelry)
//         }
//     }).catch(err => res.status(400).send(err))
// })

app.listen(3002);