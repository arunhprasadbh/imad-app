var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'arunabhamidipati',
    database: 'arunabhamidipati',
    host:'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
    
};

var pool = new Pool(config);

var app = express();
app.use(morgan('combined'));



var articles = {
     'article-one' : {
        title: 'Article One | Aruna Bhamidipati',
        date: 'Aug 12, 2017',
        heading:'Article One',
        content:`<div>
                    <h1> Personal</h1>
                    <p> My Name is Arun. I did most of my education in Andhra Pradesh. I did my masters from University Roorkee (IIT Roorkee now).  </p>
                    <h1> Professional </h1>
                    <p> I have nearly 17 years of experience as a designer and developer in Data and ETL space. I am also good in Unix, and Java development. Followng are the list of companies and Projects I worked for</p>
                    
                    <ol>
                        <li>
                            TCS -- ISBS
                        </li>
                        <li> Axa Insurance -- AMI</li>
                        <li>Prudential     -- Pensions Migration</li>
                        <li>Credit Suisse  -- Opera </li>
                        <li>UBS            -- HR DW </li>
                        <li>Betfair        -- BI Datawarehouse</li>
                        <li>Credit Suisse  -- DAL</li>
                        <li>HSBC           -- CDO, Data Quality</li>
                        <li>Credit Suisse  -- DAL</li>
                        <li>UBS            -- Cash Equities DW, MiFiD II</li>
                    </ol>
                </div>`
    },
    
     'article-two': {
        title: 'Article Two | Aruna Bhamidipati',
        date: 'Aug 10, 2017',
        heading:'Article Three',
        content:`<div>
                
                    <p> This is Article three</p>
                    
                </div>`
    },
    'article-three' : {
                title: 'Article Three | Aruna Bhamidipati',
        date: 'Aug 10, 2017',
        heading:'Article Three',
        content:`<div>
                    <p>This is Article Three</p>
                    
                </div>`
    }
};
function createTemplate(data){
    
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `
    <html>
        
        <head>
            <title> 
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container"> 
                <div >
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3> ${heading}</h3>
                <div>
                    ${date}
                </div>
                ${content}
        </body>
    </html>
    
    `;
    return htmlTemplate;
}

var counter = 0; 
function hash(input, salt){
    console.log('check 2.1');

    const hashString = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    console.log('check 2.2');
    
    return ['pbkdf2Syn', salt, '10000', hashString.toString('hex')].join('$');

}

//hash

app.get('/hash/:input', function(req, res){
    console.log('check 1');
    var hashedString =  hash(req.params.input, 'this-is-a-randon-string');
    console.log('check 2');
    res.send(hashedString);
    console.log('check 3');
});

app.get('/create_user', function(req, res){
    
    //get username and password from request
    
    //create a hash for the password
    
    //connect to databse
    
    //insert data to users table
    
});

//Test Db Connection
app.get('/test-db1', function(req, res){
    pool.query('select * from test1', function(err, result){
        if(err){
            console.log('I am in error of pool query');
            res.status(500).send(err.toString());
        }else{
            console.log('i am in result part of pool query');
            //res.send(JSON.stringfy(result));
            res.send(JSON.stringify(result));
        }
    });
  
 // res.send('Test Db Called');
    
});

app.get('/counter', function(req, res){
   counter = counter + 1; 
   res.send(counter.toString());
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) { 
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) { 
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
 
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
}); 

var names = [];
app.get('/submit_name', function(req, res){
   //Get the name
   var name = req.query.name;
   //Add name to variable
   names.push(name);
   res.send(JSON.stringify(names));
   
   //Return all the names
});

//app.get('/:articleName', function (req, res){
//    var articleName=req.params.articleName;
//  res.send(createTemplate(articles[articleName]));
//});





//app.get('/article-two', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//}); 

//app.get('/article-three', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
//}); 
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
