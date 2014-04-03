function control_costs(_args) {
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
		{title:'Project Management Plan', hasChild:true, test:'common/initiating', header:'Inputs - There are 4 inputs to the Control Cost Process '},
		{title: 'Project Funding', hasChild:true, test:'common/initiating'},
		{title: 'Work Performance data', hasChild:true, test:'common/initiating'},
		{title: 'Organizational process assets ', hasChild:true, test:'common/initiating'},
		{title:'Work Performance Information', hasChild:true, test:'common/initiating', header:'Outputs'},
		{title:'Cost Forecasts', hasChild:true, test:'common/initiating'},
		{title:'Change Request', hasChild:true, test:'common/initiating'},
		{title:'Project plan updates', hasChild:true, test:'common/initiating'},
		{title:'Project document updates ', hasChild:true, test:'common/initiating'},
		{title:'Organizational process assets', hasChild:true, test:'common/initiating'},
		{title:'Earned Value Management (EVM)', hasChild:true, test:'common/initiating', header:'Tools & Techniques – There are 6 tools and techniques used to control project costs'},
		{title:'Forecasting', hasChild:true, test:'common/initiating'},
		{title:'To-complete performance index (TCPI) ', hasChild:true, test:'common/initiating'},
		{title:'Performance Reviews', hasChild:true, test:'common/initiating'},
		{title:'Project management software', hasChild:true, test:'common/initiating'},
		{title:'Reserve analysis', hasChild:true, test:'common/initiating'}
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'Estimate Cost Details',
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
			width:'100%',
			//height:550,
			top: 145
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
    	text   : "Estimate Costs is the process of developing an approximation of the monetary resources needed to complete project activities. Cost estimates are a prediction that is based on the information known at a given point in time. It includes the identification and consideration of costing alternatives to initiate and complete the project. Cost trade-offs and risks must be considered, such as make versus buy, buy versus lease, and the sharing of resources in order to achieve optimal costs for the project.",
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
			win = new ExampleWindow({title: e.rowData.title, containingTab: _args.containingTab, tabGroup: _args.tabGroup});
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	//win1.add(logo);
	win1.add(content);
	win1.add(tableview);
	
	return win1;
};

module.exports = control_costs;