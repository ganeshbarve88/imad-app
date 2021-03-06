var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title : 'Article one|Ganesh Barve',
    date : 'Aug 29th, 2017',
    heading :'Article-one',
    content :`                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>`
    
},
    'article-two': {
    
    title : 'Article two|Ganesh Barve',
    date : 'Sep 05th, 2017',
    heading :'Article-two',
    content :`                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>`
    
},
    'article-three': {
    title : 'Article three|Ganesh Barve',
    date : 'Sep 04th, 2017',
    heading :'Article-three',
    content :`                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>
                <p>
                    Thhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first articlevvvThhis is my first articlevvvvThhis is my first articleThhis is my first articleThhis is my first articleThhis is my first article
                </p>`
    
}
};


function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" contet="width-device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    var articleName =  req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-two', function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req,res){
    res.send(createTemplate(articleThree));
});*/


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
