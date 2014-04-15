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
		{title:'Cost Management Plan', header:'Inputs', hasChild:true, data: 'Describes how the project costs will be managed and controlled.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Scope Baseline', hasChild:true, data: 'The following elements are used in the development of determine budget:\n\n-	Project scope statement: Formal limitations by period for the expenditure of project funds can be mandated by the organization, by agreement, or by other entities such as government agencies. These funding constraints are reflected in the project scope statement.\n	Work breakdown structure: The WBS provides the relationships among all the project deliverables and their various components.\n-WBS dictionary: The WBS dictionary and related detailed statements of work provide an identification of the deliverables and a description of the work in each WBS component required to produce each deliverable.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Activity cost Estimates', hasChild:true, data: 'Cost estimates for each activity within a work package are aggregated to obtain a cost estimate for each work package.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Basis of Estimates', hasChild:true, data: 'Supporting detail for cost estimates contained in the basis for estimates should specify any basic assumptions dealing with the inclusion or exclusion of indirect or other costs in the project budget.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project Schedule', hasChild:true, data: 'The project schedule includes planned start and finish dates for the project’s activities, milestones, work packages, and control accounts. This information can be used to aggregate costs to the calendar periods in which the costs are planned to be incurred.', test:'common/glossary-terms/glossary-terms'},
		{title:'Resource calendars', hasChild:true, data: 'Resource calendars provide information on which resources are assigned to the project and when they are assigned. This information can be used to indicate resource costs over the duration of the project.', test:'common/glossary-terms/glossary-terms'},
		{title:'Risk Register', hasChild:true, data: 'The risk register should be reviewed to consider how to aggregate the risk response costs. Updates to the risk register are included with project document updates.', test:'common/glossary-terms/glossary-terms'},
		{title:'Agreements', hasChild:true, data: 'Applicable agreement information and costs relating to products, services, or results that have been or will be purchased are included when determining the budget.', test:'common/glossary-terms/glossary-terms'},
		{title:'Organizational Process Assets', hasChild:true, data: 'The organizational process assets that influence the Determine Budget process include, but are not limited to:\n\n-	Existing formal and informal cost budgeting-related policies, procedures, and guidelines;\n-	Cost budgeting tools; and\n-	Reporting methods.', test:'common/glossary-terms/glossary-terms'},
		{title:'Cost Baseline', hasChild:true, data: 'The cost baseline is the approved version of the time-phased project budget, excluding any management reserves, which can only be changed through formal change control procedures and is used as a basis for comparison to actual results. It is developed as a summation of the approved budgets for the different schedule activities.', test:'common/glossary-terms/glossary-terms', header:'Outputs'},
		{title:'Project Funding Requirements', hasChild:true, data: 'Total funding requirements and periodic funding requirements (e.g., quarterly, annually) are derived from the cost baseline. The cost baseline will include projected expenditures plus anticipated liabilities. Funding often occurs in incremental amounts that are not continuous, and may not be evenly distributed. The total funds required are those included in the cost baseline, plus management reserves, if any. Funding requirements may include the source(s) of the funding.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project Documents Updates', hasChild:true, data: 'Project documents that may be updated include, but are not limited to:\n\n-	Risk register,\n-	Activity cost estimates, and\n-	Project schedule.', test:'common/glossary-terms/glossary-terms'},
		{title:'Cost Aggregation', hasChild:true, data: 'Cost estimates are aggregated by work packages in accordance with the WBS. The work package cost estimates are then aggregated for the higher component levels of the WBS (such as control accounts) and ultimately for the entire project.', test:'common/glossary-terms/glossary-terms', header:'Tools & Techniques'},
		{title:'Reserve Analysis', hasChild:true, data: 'Budget reserve analysis can establish both the contingency reserves and the management reserves for the project.', test:'common/glossary-terms/glossary-terms'},
		{title:'Expert Judgment ', hasChild:true, data: 'Expert judgment, guided by experience in an application area, Knowledge Area, discipline, industry, or similar project, aids in determining the budget. Such expertise may be provided by any group or person with specialized education, knowledge, skill, experience, or training.', test:'common/glossary-terms/glossary-terms'},
		{title:'Historical Relationships', hasChild:true, data: 'Any historical relationships that result in parametric estimates or analogous estimates involve the use of project characteristics (parameters) to develop mathematical models to predict total project costs. Such models may be simple (e.g., residential home construction is based on a certain cost per square foot of space) or complex (e.g., one model of software development costing uses multiple separate adjustment factors, each of which has numerous points within it).', test:'common/glossary-terms/glossary-terms'},
		{title:'Funding Limit Reconciliation', hasChild:true, data: 'The expenditure of funds should be reconciled with any funding limits on the commitment of funds for the project. A variance between the funding limits and the planned expenditures will sometimes necessitate the rescheduling of work to level out the rate of expenditures. This is accomplished by placing imposed date constraints for work into the project schedule.', test:'common/glossary-terms/glossary-terms'}
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'Determine Budget Details',
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
    	text   : "Determine Budget is the process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline. The key benefit of this process is that it determines the cost baseline against which project performance can be monitored and controlled.",
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