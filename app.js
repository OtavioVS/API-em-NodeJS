const express = require('express');
const { randomUUID } =require("crypto");
const { request } = require('http');
const { response } = require('express');

const app = express();

app.use(express.json());
//const port = process.eventNames.PORT//4002;
const products = [];
//const {nome, cubagem} = request.body;

////////////////////////////////////////////////////////////////////////////////////////////
app.post("/products", (request, response) => {                                                  //CADASTRA PRODUTO

    const {nome , cubagem } = request.body;
        const product = {
		nome,
		cubagem,
		id: randomUUID()
		};
	products.push(product)

return response.json(product);
//console.log(nome);
                                                })
////////////////////////////////////////////////////////////////////////////////////////////
	app.get("/products", (request, response) =>{                                                     //RETORNA LISTA DE PRODUTOS
	return response.json(products);
                                           })
////////////////////////////////////////////////////////////////////////////////////////////
app.get("/products/:id", (request, response) =>{                                                 //PROCURA CADASTRO POR ID
	const {id } = request.params;
	const product = products.find(product => product.id === id);
	return response.json(product);
												})
////////////////////////////////////////////////////////////////////////////////////////////
app.put("/products/:id", (request, response) =>{                                                 //ALTERA PRODUTO
	const {id } = request.params;
	const {nome , cubagem } = request.body;
	const productIndex = products.findIndex(product => product.id === id);
products[productIndex] = {
	...products[productIndex],
	nome,
	cubagem
													}
return response.json({ message: "Product has been changed sucessfully"})

                                                })
////////////////////////////////////////////////////////////////////////////////////////////
app.delete("/products/:id", (request, response) =>{                                              //DELETA PRODUTO
const {id } = request.params;
	const productIndex = products.findIndex(product => product.id === id);
	products.splice(productIndex, 1);
return response.json({ message: "Product has been removed"})
                                                                                                                        
                                                   })
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                        
	 app.listen(4002, () => {
	console.log('server is running on port: 4002');
                            });
                                                                                                                        
