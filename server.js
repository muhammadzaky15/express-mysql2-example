const express = require("express");
const { checkSchema, validationResult } = require('express-validator');
const app = express();
const { get, create, update, remove } = require("./models/products");

const port = 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});
  
app.get("/products", async (req, res) => {
    const products = await get();
    res.json(products);
});

app.get("/products/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await get(productId)
    res.json(product)
})

app.post("/products", async (req, res) => {
    const productData = req.body;
    const insertData = await create(productData);
    res.json(insertData);
})

app.put("/products/:id", async(req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    const updateProduct = await update(productData, productId);
    res.json(updateProduct);
})

app.delete("/products/:id", async(req, res) => {
    const productId = req.params.id;
    const deleteData = await remove(productId);
    res.json(deleteData);
})

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
