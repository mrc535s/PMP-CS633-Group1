function references(_args) {
	/*var win = Ti.UI.createWindow({
		title:_args.title,
		backgroundColor:'#fff'
	});
	// create table view data object
	var data = [
		{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff'},
		{title:'Row 2', hasDetail:true, color:'green', selectedColor:'#fff'},
		{title:'Row 3', hasCheck:true, color:'blue', selectedColor:'#fff'},
		{title:'Row 4', color:'orange', selectedColor:'#fff'}
		
	
	];
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	/*function showClickEventInfo(e, islongclick) {
		// event data
		var index = e.index;
		var section = e.section;
		var row = e.row;
		var rowdata = e.rowData;
		Ti.API.info('detail ' + e.detail);
		var msg = 'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata;
		if (islongclick) {
			msg = "LONGCLICK " + msg;
		}
		Titanium.UI.createAlertDialog({title:'Table View',message:msg}).show();
	
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		showClickEventInfo(e);
	});
	tableview.addEventListener('longclick', function(e)
	{
		showClickEventInfo(e, true);
	});
	
	// add table view to the window
	win.add(tableview);
	return win;*/
	
	
var win1 = Titanium.UI.createWindow({  
    title:_args.title,
    backgroundColor:'#DEDEDE',
    height: Ti.UI.SIZE
    
});
	
	win1.backgroundColor = '#DEDEDE';
		var data = [
		/*{title:'Plan Cost Management Plan', hasChild:true, test:'common/initiating', header:'Cost Processes'},
		{title:'Planning', hasChild:true, test:'common/initiating'},
		{title:'Executing', hasChild:true, test:'common/initiating'},
		{title:'Monitoring/Controlling', hasChild:true, test:'common/initiating'},
		{title:'Closing', hasChild:true, test:'common/initiating'},*/
		{title:'Estimate Costs Video', header:'Videos', hasChild:true, data: 'https://www.youtube.com/watch?v=IeZomK7l7Xc', test:'common/load-video'},
		{title: 'Determine Budget Video', hasChild:true, data: 'https://www.youtube.com/watch?v=qFIectfP1Kk', test:'common/load-video'},
		{title: 'Control Costs Video', hasChild:true, data: 'https://www.youtube.com/watch?v=r4CGwY8mqcM', test:'common/load-video'},
		{title: 'Plan Cost Managment Plan Video', hasChild:true, data: 'https://www.youtube.com/watch?v=b65vMFhU6jk', test:'common/load-video'},
		{title:'PMP Facebook Page', hasChild:true, data: 'https://www.facebook.com/pages/PMP-Project-Management-Professional-PMP-Certificate/32243052119', test:'common/load-video', header:'Useful Links'},
		{title:'Project Management Institute', hasChild:true, data: 'http://www.pmi.org', test:'common/load-video'},
		
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'Cost Management Process References',
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
			width:'100%',
			//height:550,
			top: 65
		};
	
	
		tableViewOptions.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
	
	var content = Ti.UI.createLabel({
    	top    : 15,
    	left: 15,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
    	text   : "Below are a few references that can be used to help get more information for the PMP exam relating to cost management processes. ",
    	backgroundColor : "transparent"
    });
	var tableview = Titanium.UI.createTableView(tableViewOptions);
	var logo = Titanium.UI.createImageView({
    width:'auto',
    height:"auto",
    left:10,
    top:15,
    image:'images/boston-university-logo.png'
});
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
			win = new ExampleWindow({title: e.rowData.title, containingTab: _args.containingTab, tabGroup: _args.tabGroup, data: e.rowData.data});
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	//win1.add(logo);
	win1.add(content);
	win1.add(tableview);
	
	return win1;
};

module.exports = references;