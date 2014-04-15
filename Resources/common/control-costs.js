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
		{title:'Project Management Plan', header:'Inputs - There are 4 inputs to the Control Cost Process', hasChild:true, data: 'Cost baseline- A time-phased estimate of all project costs used to identify the cost of all activities over a projects life. Actual results are compared with the baseline to determine if a corrective action is necessary.\n\nCost management plan- Describes how the project costs will be managed and controlled', test:'common/glossary-terms/glossary-terms'},
		{title: 'Project Funding', hasChild:true, data: 'The projected funding requirements for a project based on the projected expenditures from the cost baseline plus anticipated liabilities found in the cost baseline.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Work Performance data', hasChild:true, data: 'Includes statics and figures based on which activities have started, their progress, and which deliverables have finished.  This information may also include costs that have been authorized and incurred.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Organizational process assets ', hasChild:true, data: 'These are areas that can influence the control cost process such as:\n-	Existing formal and informal  policies, procedures, and guidelines\n-	Cost control tools\n-	Monitoring and reporting methods', test:'common/glossary-terms/glossary-terms'},
		{title:'Work Performance Information', hasChild:true, data: 'Information’s that helps communicate how the project budget is performing overall. The calculated CV, SV, CPI, SPI, TCPI, and VAC values for WBS components in particular are documented and communicated to stakeholders.', test:'common/glossary-terms/glossary-terms', header:'Outputs'},
		{title:'Cost Forecasts', hasChild:true, data: 'The EAC value communicated to stakeholders', test:'common/glossary-terms/glossary-terms'},
		{title:'Change Request', hasChild:true, data: 'After an analysis of project performance, a change request to the cost baseline or other project components maybe needed.  A change request may include preventive or corrective actions for review by the approving authority.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project plan updates', hasChild:true, data: 'Updates to the project management plan may include, but are not limited to the cost baseline or cost management plan.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project document updates ', hasChild:true, data: 'Project documents that may be updated include but are not limited to the cost estimates and basis of estimates', test:'common/glossary-terms/glossary-terms'},
		{title:'Organizational process assets', hasChild:true, data: 'Organizational process assets that may be updated include, but are not limited to causes of variances, corrective action chose with reasons, financial databases, and lessons learned.', test:'common/glossary-terms/glossary-terms'},
		{title:'Earned Value Management (EVM)', hasChild:true, data: 'A technique for determining how a project is performing in terms of scope, costs, and schedule.  It may also compare actual costs to planned costs and dates in order to determine what a project has earned so far.  EVM develops and monitors three key dimensions.\n\na.	Planned Value PV – The authorized budget assigned to scheduled work.\nb.	Earned Value EV– A measure of work performed in terms of the budget authorized for that work.\nc.	Actual Cost AC– The realized cost incurred for the work performed on a specific activity during a specific time period.\nd.	Variances from the approved baseline will also be monitored such as\n   i.	  Schedule variance SV – a measure of schedule performance expressed as the difference between the earned value and the planned value. Equation: SV =EV-PV\n   ii.	  Cost variance CV – the amount of the budget deficit or surplus at a given point in time. Equation: CV = EV -AC\n   iii.	Schedule performance index – a measure of schedule efficiency expressed as the ratio of earned value to planned value. \nEquation: SPI = EV/PV\n   iv.	Cost performance index CPI –a measure of the cost efficiency of budged resources, expressed as a ratio of earned value to actual cost.\nEquation = CPI = EV/AC', test:'common/glossary-terms/glossary-terms', header:'Tools & Techniques – There are 6 tools and techniques used to control project costs'},
		{title:'Forecasting', hasChild:true, data: 'Determining future events or conditions that might affect the final cost of a project.  This is known as the estimate at completion (EAC) and it may differ from the budget at completion (BAC).   Here is a list of 3 common EAC methods\n\na.	EAC forecast for estimated to complete (ETC) work performed at the budget rate – this method accepts the actual project performance as represented by the actual costs, and predicts that all future ETC work will be accomplished at the budgeted rate. \nEquation: EAC = AC + (BAC-EV)\nb.	EAC forecast for ETC work performed at the present CPI – this method assumes what the project has experienced to date can be expected to continue in the future. \n\nEquation: EAC=BAC/CPI\nc.	EAC forecast for ETC work considering both SPI and CPI factors – with this forecast, the ETC work will be performed at an efficiency rate that considers both the cost and schedule performance indices.  \nEquation: EAC = AC + [(BAC-EV) /(CPI xSPI0]', test:'common/glossary-terms/glossary-terms'},
		{title:'To-complete performance index (TCPI) ', hasChild:true, data: 'The calculated cost performance that must be achieved on remaining work if the project is to meet a financial goal set by management. \nEquation for TCPI based on BAC: (BAC-EV)/(BAC-AC)\nEquation for TCPI based on EAC: (BAC-EV) / (EAC –AC)', test:'common/glossary-terms/glossary-terms'},
		{title:'Performance Reviews', hasChild:true, data: 'TA review of project status and progress in terms of costs, schedule, technical performance, and risk.  If EVM is being used then the following information will be determined:\n\na.	Variance analysis – the explanation (cause, impact, and corrective measures) for cost, schedule, and variance of completion.\nb.	Trend analysis – examines project performance over time to determine if the performance is improving or deteriorating\nc.	Earned value performance – compares the performance measurement baseline to actual schedule and cost performance', test:'common/glossary-terms/glossary-terms'},
		{title:'Project management software', hasChild:true, data: 'Applications specifically designed to help in planning, monitoring, and controlling project performance.', test:'common/glossary-terms/glossary-terms'},
		{title:'Reserve analysis', hasChild:true, data: 'Involves monitoring the status of the project spending and determining whether the reserves are still needed, being used, or if additional reserves are required to complete the project.', test:'common/glossary-terms/glossary-terms'}
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'Controlling Cost Details',
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
    	text   : "Controlling Cost is the fourth and final aspect of Project Cost Management.  It is the process of monitoring the status of a project to account for the value of the actual work completed and analyzes spending from that perspective.  The benefit of this process is that it enables recognition of variances from the original plan in order to take corrective action and minimize risk.",
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

module.exports = control_costs;