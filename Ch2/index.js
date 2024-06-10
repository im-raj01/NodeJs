const http = require("http");
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const apiData = JSON.parse(fs.readFileSync('data.json','utf-8'));

const product = apiData.products[0];
const products = apiData.products;
const data = {
  age: 5,
};
const server = http.createServer((req, res) => {
  console.log(req.url,req.method);

  if(req.url.startsWith('/product')){
    // console.log(req.url.split('/'));
    const id = req.url.split('/')[2];
    const product = products.find(p => p.id === (+id))
    console.log(product)

    res.setHeader("Content-Type", "text/html");
        let modifiedIndex = index.replace('**title**',product.title)
                                .replace('**url**',product.thumbnail)  
                                 .replace('**price**',product.price)
                                 .replace('**rating**',product.rating)

        res.end(modifiedIndex);
       return;
  }

   switch(req.url){
    case '/':
      res.setHeader('Content-Type','text/html');
      res.end(index);
      break;
    case '/api':
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(apiData));
      break;
    
    default:
      res.writeHead(404,'NT FOUND');
      res.end();
   }

  console.log("server started");
//   res.setHeader("Dummy", "DummyValue 250");
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify(data));
//   res.setHeader('Content-Type','text/html');
//   res.end(index);

//   res.setHeader("Content-Type", "application/json");
//   res.end(apiData);

});

server.listen(8080);
