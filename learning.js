// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://47.107.69.123:27017';

// const dbName = 'mg';

// MongoClient.connect(url, {useNewUrlParser: true}, (err, client)=>{
//     // assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     client.close();
// })

const server = require('express')();
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

server.get('/', (req, res) => {
    const app = new Vue({
        template: '<div>SSR demo, powered by yuho!</div>'
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error');
            return
        }
        console.log(html)
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head><title>Yuho</title></head>
            <body>${html}</body>
            </html>
        `)
    })
})

server.listen(80)
console.log('Server listening on port 80');


