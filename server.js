var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient;

// application setting property to specify folder where template files are present
app.set('views', './views');

// application setting property to specify templating engine used
app.set('view engine', 'jade');

app.use('/app', express.static('app'));
app.use('/css', express.static('css'));
app.use('/thirdparty', express.static('thirdparty'));
app.use('/angular2/router', express.static('thirdparty/router.dev.js'));
app.use('/thirdparty/2.0.0-beta.12/router.dev.js',  express.static('thirdparty/router.dev.js'));
/*app.use('/rxjs/*', express.static('thirdparty/rxjs/*'));
app.use("/rxjs/observable/PromiseObservable", express.static('thirdparty/rxjs/observable/PromiseObservable.js'));
app.use("/rxjs/operator/toPromise", express.static('thirdparty/rxjs/operator/toPromise.js'));
app.use("/rxjs/Subject/", express.static('thirdparty/rxjs/subject/'));
app.use("/rxjs/Observable/", express.static('thirdparty/rxjs/observable/'));
app.use("/rxjs/util/root", express.static('thirdparty/rxjs/util/root.js'));
app.use("/rxjs/add/operator/map", express.static('thirdparty/rxjs/add/operator/map.js'));
app.use("/rxjs/Subject", express.static('thirdparty/rxjs/subject'));*/

MongoClient.connect('mongodb://admin:admin@ds011321.mlab.com:11321/billingtracker', function(err, db) {
   
    if(!err) {
        console.log("Successfully connected to MongoDB.");
    }
    else {
        console.log("Error connecting to MongoDB -> " + err);
    }

	app.get('/index', function(req, res) {
        res.sendFile('index.html',{ root: __dirname });
    });

	//Get all WON Types
    app.get('/rest/wontype', function(req, res){
        console.log("caught won type request");
        db.collection('won_type').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });
	
	//Get all End Clients
    app.get('/rest/endclient', function(req, res){
        console.log("caught endclient request");
        db.collection('end_client').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });

	//Get all worklocation
    app.get('/rest/worklocation', function(req, res){
        console.log("caught worklocation request");
        db.collection('work_location').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });

	//Get all Service Practise
    app.get('/rest/servicepractice', function(req, res){
        console.log("caught servicepractice request");
        db.collection('service_practice').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });	

	//Get all leave calendar
    app.get('/rest/leavecalendar', function(req, res){
        console.log("caught leave calendar request");
        db.collection('leave_calendar').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });	
	
	//Get all WONs
    app.get('/rest/won', function(req, res){
        console.log("caught request");
        db.collection('won_details').find({}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });
	
	//Get a single WON detail
    app.get('/rest/won/:num', function(req, res){
        console.log("caught request");
        db.collection('won_details').find({_id : req.params.num}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });

	//Get a single WON detail
    app.post('/rest/newwon', function(req, res, next){
        console.log("Add new won");
		var wonobj = new Won();
		wonobj = req.params.wonobj;
        db.collection('won_details').insert(
			{_id : wonobj._id,name : wonobj.name,start_dt: wonobj.start_dt, end_dt: wonobj.end_dt,end_client:wonobj.end_client,
			 work_location: wonobj.work_location,service_practice:wonobj.service_practice,leave_calendar:wonobj.leave_calendar
		}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });

	//Get All ative allocations
    app.get('/rest/allocation', function(req, res){
        console.log("caught Active allocation request");
		var date = new Date();
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);	
		
        db.collection('allocation').find({
		start_date: {
						$lte: new Date(firstDay.toISOString())
					},
		end_date: 	{
						$gte: new Date(firstDay.toISOString())
					}
}).toArray(function(err, docs) {
            res.send(docs);
            res.status(200).end();
        });       
    });
	
    app.use(function(req, res){
        res.sendStatus(404);
    });
    
    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});