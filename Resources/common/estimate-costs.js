function estimate_costs(_args) {
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
		{title:'Scope Baseline', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The scope baseline is comprised of the following:\n\n- The project scope statement provides the product description, acceptance criteria, key deliverables, project boundaries, assumptions, and constraints about the project. One basic assumption that needs to be made when estimating project costs is whether the estimates will be limited to direct project costs only or whether the estimates will also include indirect costs. \n- The work breakdown structure (WBS) provides the relationships among all the components of the project and the project deliverables.\n- The WBS dictionary provides detailed information about the deliverables and a description of the work for each component in the WBS required to produce each deliverable.', header:'Inputs'},
		{title: 'Project Schedule', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The type and quantity of resources and the amount of time which those resources are applied to complete the work of the project are major factors in determining the project cost. Schedule activity resources and their respective durations are used as key inputs to this process.'},
		{title: 'Cost Management Plan', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The cost management plan defines how project costs will be managed and controlled. It includes the method used and the level of accuracy required to estimate activity cost.'},
		{title: 'Human Resource Management Plan', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The human resource management plan provides project staffing attributes, personnel rates, and related rewards/recognition, which are necessary components for developing the project cost estimates.'},
		{title: 'Risk Register', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The risk register should be reviewed to consider risk response costs. Risks, which can be either threats or opportunities, typically have an impact on both activity and overall project costs. As a general rule, when the project experiences a negative risk event, the near-term cost of the project will usually increase, and there will sometimes be a delay in the project schedule.'},
		{title: 'Enterprise Environmental Factors', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The enterprise environmental factors that influence the Estimate Costs process include, but are not limited to:\n- Market conditions. These conditions describe what products, services, and results are available in the market, from whom, and under what terms and conditions. Regional and/or global supply and demand conditions greatly influence resource costs\n- Published commercial information. Resource cost rate information is often available from commercial databases that track skills and human resource costs, and provide standard costs for material and equipment. Published seller price lists are another source of information.'},
		{title: 'Organizational Assets', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The organizational process assets that influence the Estimate Costs process include, but are not limited to:\n- Cost estimating policies,\n- Cost estimating templates,\n- Historical information, and\n- Lessons learned.'},
		{title:'Activity Cost Estimates', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Activity cost estimates are quantitative assessments of the probable costs required to complete project work. Cost estimates can be presented in summary form or in detail. Costs are estimated for all resources that are applied to the activity cost estimate. This includes, but is not limited to, direct labor, materials, equipment, services, facilities, information technology, and special categories such as cost of financing (including interest charges), an inflation allowance, exchange rates, or a cost contingency reserve. Indirect costs, if they are included in the project estimate, can be included at the activity level or at higher levels.', header:'Outputs'},
		{title:'Basis of Estimates', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The amount and type of additional details supporting the cost estimate vary by application area. Regardless of the level of detail, the supporting documentation should provide a clear and complete understanding of how the cost estimate was derived.'},
		{title:'Project Document Updates', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Project documents that may be updated include, but are not limited to, the risk register.'},
		{title:'Expert Judgement', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Expert judgment, guided by historical information, provides valuable insight about the environment and information from prior similar projects. Expert judgment can also be used to determine whether to combine methods of estimating and how to reconcile differences between them.', header:'Tools and Techniques'},
		{title:'Analogous Estimating', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Analogous cost estimating uses the values such as scope, cost, budget, and duration or measures of scale such as size, weight, and complexity from a previous, similar project as the basis for estimating the same parameter or measurement for a current project. When estimating costs, this technique relies on the actual cost of previous, similar projects as the basis for estimating the cost of the current project. It is a gross value estimating approach, sometimes adjusted for known differences in project complexity.'},
		{title:'Parametric Estimating', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Parametric estimating uses a statistical relationship between relevant historical data and other variables (e.g., square footage in construction) to calculate a cost estimate for project work. This technique can produce higher levels of accuracy depending upon the sophistication and underlying data built into the model. Parametric cost estimates can be applied to a total project or to segments of a project, in conjunction with other estimating methods.'},
		{title:'Bottom-Up Estimating', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Bottom-up estimating is a method of estimating a component of work. The cost of individual work packages or activities is estimated to the greatest level of specified detail. The detailed cost is then summarized or “rolled up” to higher levels for subsequent reporting and tracking purposes. The cost and accuracy of bottom-up cost estimating are typically influenced by the size and complexity of the individual activity or work package.'},
		{title:'Three-Point Estimates', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The accuracy of single-point activity cost estimates may be improved by considering estimation uncertainty and risk and using three estimates to define an approximate range for an activity’s cost:\n- Most likely (cM). The cost of the activity, based on realistic effort assessment for the required work and any predicted expenses.\n- Optimistic (cO). The activity cost based on analysis of the best-case scenario for the activity.\n- Pessimistic (cP). The activity cost based on analysis of the worst-case scenario for the activity.'}
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
			win = new ExampleWindow({title: e.rowData.title, containingTab: _args.containingTab, tabGroup: _args.tabGroup, data: e.rowData.data});
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	//win1.add(logo);
	win1.add(content);
	win1.add(tableview);
	
	return win1;
};

module.exports = estimate_costs;