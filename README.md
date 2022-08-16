# Api ecommerce

## Endpoints products

\*http://localhost:8080/api/products/ (method GET)
Muestra todos los productos

\*http://localhost:8080/api/products/ (method POST)
Agrega un producto

Requiere envio de producto por body:
{
"name": "ejemplo",
"stock":89,
"description":"ejemplo de descripcion",
"price": 60,
"thumbnail": "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg,
}

\*http://localhost:8080/api/products/:id (method GET)
Retorna producto por su id

\*http://localhost:8080/api/products/:id (method DELETE)
Elimina un producto por su id

\*http://localhost:8080/api/products/:id (method PUT)
Actualiza un producto por su id

Requiere objeto con los datos actualizados

{
"name": "ejemplo actualizado ",
"stock":50,
"description":"ejemplo de descripcion actualizado",
"price": 100,
"thumbnail": "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg,
}


## Endpoints cart

\*http://localhost:8080/api/cart/ (method POST)
Crea un cart y retorna su id

\*http://localhost:8080/api/cart/:id (method DELETE)
Elimina un cart por su id

\*http://localhost:8080/api/cart/:id/products (method GET)
Retorna la lista de productos de un cart por su id

\*http://localhost:8080/api/cart/:id/products (method POST)
Agrega producto al cart

Requiere objeto con cantidad e id del producto

{
"id_prod": 20,
"quantity": 4
}

\*http://localhost:8080/api/cart/:id/products/:id_prod (method POST)
Elimina un producto de un cart determinado, por su id
