function plan_costs(_args) {
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
		{title:'Project Management Plan', header:'Inputs', hasChild:true, data: 'Project Management Plan – the following elements are used in the development of the Cost Management Plan: \n\n-Scope baseline – includes the project scope statement and work breakdown structure (WBS) detail for cost estimation and management. \n-	Schedule baseline – defines when the project costs will be incurred.\n-	Other information – includes cost, risk, and communications management plans.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Project Funding', hasChild:true, data: 'The projected funding requirements for a project based on the projected expenditures from the cost baseline plus anticipated liabilities found in the cost baseline.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Project Charter', hasChild:true, data: 'Project Charter – provides the summary budget from which detailed project costs are developed, as well as project approval requirements (particularly those dealing with project cost constraints).', test:'common/glossary-terms/glossary-terms'},
		{title: 'Enterprise Environmental Factors (EEF)', hasChild:true, data: 'Enterprise Environmental Factors (EEF) – the following EEF’s influence the Plan Cost Management process:\n\n-	Organizational culture and structure\n-	Market conditions (describe what products are available on global market)\n-	Currency exchange rates\n-	Commercial information such as cost rate information; published seller list prices\n-	Project Management Software', test:'common/glossary-terms/glossary-terms'},
		{title:'Organizational Process Assets (OPA) ', hasChild:true, data: 'Organizational Process Assets (OPA) – the following OPA’s influence the Plan Cost Management process:\n-	Financial control procedures\n-	Historical information and lessons learned knowledge bases\n-	Financial databases\n-	Cost estimating and budgeting-related policies, procedures, and guidelines', test:'common/glossary-terms/glossary-terms'},
		{title:'Cost Management Plan', hasChild:true, data: 'Cost Management Plan – establishes the criteria and the activities for developing, monitoring and controlling the schedule. The cost management plan can establish the following:\n\n-	Units of measure\n-	Level of precision\n-	Level of accuracy\n-	Organizational procedures links\n-	Control thresholds\n-	Rules of performance measurement\n-	Reporting formats\n-	Process descriptions\n-	Additional details', test:'common/glossary-terms/glossary-terms', header:'Outputs'},
		{title:'Expert Judgment', hasChild:true, data: 'Uses historical information from prior similar projects and adapts it appropriately to the current project.', test:'common/glossary-terms/glossary-terms', header:'Tools & Techniques'},
		{title:'Analytical Techniques', hasChild:true, data: 'Used to choose strategic options related to funding the project.', test:'common/glossary-terms/glossary-terms'},
		{title:'Meetings', hasChild:true, data: 'Planning meetings are used to develop the cost management plan.', test:'common/glossary-terms/glossary-terms'},
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'Plan Cost Details',
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
			width:'100%',
			//height:550,
			top: 100
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
    	text   : "Plan Cost Management is the process that establishes the policies, procedures, and documentation for planning, managing, expending, and controlling project costs. The key benefit of this process is that it provides guidance and direction on how the project costs will be managed throughout the project. ",
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

module.exports = plan_costs;