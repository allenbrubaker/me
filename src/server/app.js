var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'Hello worldad';
});

app.listen(3000);