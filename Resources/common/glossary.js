function tv_headers_filter(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	// create table view data object
	var data = [
		{title:'Actual cost (AC)', hasChild:true, data: 'The realized cost incurred for the work performed on an activity during a specific time period.', test:'common/glossary-terms/glossary-terms', header:'A'},
		{title:'Activity cost Estimates', hasChild:true, data: 'Cost estimates for each activity within a work package are aggregated to obtain a cost estimate for each work package.', test:'common/glossary-terms/glossary-terms'},
		{title:'Analogous Estimating', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Analogous cost estimating uses the values such as scope, cost, budget, and duration or measures of scale such as size, weight, and complexity from a previous, similar project as the basis for estimating the same parameter or measurement for a current project. When estimating costs, this technique relies on the actual cost of previous, similar projects as the basis for estimating the cost of the current project. It is a gross value estimating approach, sometimes adjusted for known differences in project complexity.'},
		{title:'Analytical Techniques', hasChild:true, data: 'Used to choose strategic options related to funding the project.', test:'common/glossary-terms/glossary-terms'},
		{title:'Basis of Estimates', hasChild:true, data: 'Supporting detail for cost estimates contained in the basis for estimates should specify any basic assumptions dealing with the inclusion or exclusion of indirect or other costs in the project budget.', test:'common/glossary-terms/glossary-terms', header:'B'},
		{title:'Bottom-Up Estimating', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'Bottom-up estimating is a method of estimating a component of work. The cost of individual work packages or activities is estimated to the greatest level of specified detail. The detailed cost is then summarized or “rolled up” to higher levels for subsequent reporting and tracking purposes. The cost and accuracy of bottom-up cost estimating are typically influenced by the size and complexity of the individual activity or work package.'},
		{title:'Cost baseline', hasChild:true, data: 'The cost baseline is compared with actual results to determine if a change, corrective action, or preventive action is necessary.', test:'common/glossary-terms/glossary-terms', header:'C'},
		{title:'Cost management plan', hasChild:true, data: 'The cost management plan describes how the project costs will be managed and controlled', test:'common/glossary-terms/glossary-terms'},
		{title:'Cost variance (CV)', hasChild:true, data: 'The amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and the actual cost. It is a measure of cost performance on a project.', test:'common/glossary-terms/glossary-terms', equation: "CV= EV − AC"},
		{title:'Cost performance index (CPI)', hasChild:true, data: 'A measure of the cost efficiency of budgeted resources, expressed as a ratio of earned value to actual cost', test:'common/glossary-terms/glossary-terms', equation: 'CPI = EV/AC'},
		{title:'Earned value (EV)', header:'E', hasChild:true, data: 'A measure of work performed expressed in terms of the budget authorized for that work', test:'common/glossary-terms/glossary-terms'},
		{title:'Earned value management (EVM)', hasChild:true, data: 'A methodology that combines scope, schedule, and resource measurements to assess project performance and progress', test:'common/glossary-terms/glossary-terms'},
		{title:'Earned value performance', hasChild:true, data: 'Compares the performance measurement baseline to actual schedule and cost performance', test:'common/glossary-terms/glossary-terms'},
		{title:'Expert Judgment ', hasChild:true, data: 'Expert judgment, guided by experience in an application area, Knowledge Area, discipline, industry, or similar project, aids in determining the budget. Such expertise may be provided by any group or person with specialized education, knowledge, skill, experience, or training.', test:'common/glossary-terms/glossary-terms'},
		{title:'Funding Limit Reconciliation', hasChild:true, data: 'The expenditure of funds should be reconciled with any funding limits on the commitment of funds for the project. A variance between the funding limits and the planned expenditures will sometimes necessitate the rescheduling of work to level out the rate of expenditures. This is accomplished by placing imposed date constraints for work into the project schedule.', test:'common/glossary-terms/glossary-terms', header: 'F'},
		{title: 'Human Resource Management Plan', hasChild:true, test:'common/glossary-terms/glossary-terms', hasChild:true, data: 'The human resource management plan provides project staffing attributes, personnel rates, and related rewards/recognition, which are necessary components for developing the project cost estimates.', header: 'H'},
		{title:'Planned value (PV)', header:'P', hasChild:true, data: 'The authorized budget assigned to scheduled work.', test:'common/glossary-terms/glossary-terms'},
		{title: 'Project Funding', hasChild:true, data: 'The projected funding requirements for a project based on the projected expenditures from the cost baseline plus anticipated liabilities found in the cost baseline.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project management software', hasChild:true, data: 'Used to monitor the three EVM dimensions (PV, EV, and AC), to display graphical trends, and to forecast a range of possible final project results.', test:'common/glossary-terms/glossary-terms'},
		{title:'Reserve Analysis', header: 'R', hasChild:true, data: 'Used to monitor the status of contingency and management reserves for the project to determine if these reserves are still needed or if additional reserves need to be requested.', test:'common/glossary-terms/glossary-terms'},
		{title:'Risk Register', hasChild:true, data: 'The risk register should be reviewed to consider how to aggregate the risk response costs. Updates to the risk register are included with project document updates.', test:'common/glossary-terms/glossary-terms'},
		{title:'Schedule performance index (SPI)', header: 'S', hasChild:true, data: 'A measure of schedule efficiency expressed as the ratio of earned value to planned value.', test:'common/glossary-terms/glossary-terms'},
		{title:'Schedule variance (SV)', hasChild:true, data: 'A measure of schedule performance expressed as the difference between the earned value and the planned value.', test:'common/glossary-terms/glossary-terms'},
		{title:'Trend analysis', header: 'T', hasChild:true, data: 'Examines project performance over time to determine if performance is improving or deteriorating.', test:'common/glossary-terms/glossary-terms'},
		{title:'To-complete performance index (TCPI)', hasChild:true, data: 'A measure of the cost performance that is required to be achieved with the remaining resources in order to meet a specified management goal, expressed as the ratio of the cost to finish the outstanding work to the remaining budget.', equation: 'TCPI based on the BAC: (BAC – EV) / (BAC – AC\nTCPI based on the EAC: (BAC – EV) / (EAC – AC)', test:'common/glossary-terms/glossary-terms'},
		{title:'Variance Analysis', header: 'V', hasChild:true, data: 'The explanation (cause, impact, and corrective actions) for cost (CV = EV – AC), schedule (SV = EV – PV), and variance at completion (VAC = BAC – EAC) variances', test:'common/glossary-terms/glossary-terms'},
		{title:'Work performance data', header: 'W', hasChild:true, data: 'Information about project progress, such as which activities have started, their progress, and which deliverables have finished. Information also includes costs that have been authorized and incurred.', test:'common/glossary-terms/glossary-terms'}
	];
	
	var search = Titanium.UI.createSearchBar();
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data,
		search:search
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
			win = new ExampleWindow({title: e.rowData.title, containingTab: _args.containingTab, tabGroup: _args.tabGroup, data: e.rowData.data, equation1: e.rowData.equation});
			_args.containingTab.open(win,{animated:true});
		}
	});
	// set filters
	var index = [
		{title:'A',index:0},
		{title:'B',index:4},
		{title:'C',index:6},
		{title:'E',index:10},
		{title:'F',index:13},
		{title:'H',index:14},
		{title:'P',index:15},
		{title:'R',index:18},
		{title:'S',index:20},
		{title:'T',index:22},
		{title:'V',index:24},
		{title:'W',index:25}
	];
	tableview.index = index;
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_headers_filter;