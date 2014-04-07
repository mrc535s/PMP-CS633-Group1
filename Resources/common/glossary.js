function tv_headers_filter(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	// create table view data object
	var data = [
		{title:'Actual cost (AC)', hasChild:true, data: 'The realized cost incurred for the work performed on an activity during a specific time period.', test:'common/glossary-terms/glossary-terms', header:'A'},
		{title:'Cost baseline', hasChild:true, data: 'The cost baseline is compared with actual results to determine if a change, corrective action, or preventive action is necessary.', test:'common/glossary-terms/glossary-terms', header:'C'},
		{title:'Cost management plan', hasChild:true, data: 'The cost management plan describes how the project costs will be managed and controlled', test:'common/glossary-terms/glossary-terms'},
		{title:'Cost variance (CV)', hasChild:true, data: 'The amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and the actual cost. It is a measure of cost performance on a project.', test:'common/glossary-terms/glossary-terms', equation: "CV= EV − AC"},
		{title:'Cost performance index (CPI)', hasChild:true, data: 'A measure of the cost efficiency of budgeted resources, expressed as a ratio of earned value to actual cost', test:'common/glossary-terms/glossary-terms', equation: 'CPI = EV/AC'},
		{title:'Earned value (EV)', header:'E', hasChild:true, data: 'A measure of work performed expressed in terms of the budget authorized for that work', test:'common/glossary-terms/glossary-terms'},
		{title:'Earned value management (EVM)', hasChild:true, data: 'A methodology that combines scope, schedule, and resource measurements to assess project performance and progress', test:'common/glossary-terms/glossary-terms'},
		{title:'Earned value performance', hasChild:true, data: 'Compares the performance measurement baseline to actual schedule and cost performance', test:'common/glossary-terms/glossary-terms'},
		{title:'Planned value (PV)', header:'P', hasChild:true, data: 'The authorized budget assigned to scheduled work.', test:'common/glossary-terms/glossary-terms'},
		{title:'Project management software', hasChild:true, data: 'Used to monitor the three EVM dimensions (PV, EV, and AC), to display graphical trends, and to forecast a range of possible final project results.', test:'common/glossary-terms/glossary-terms'},
		{title:'Reserve Analysis', header: 'R', hasChild:true, data: 'Used to monitor the status of contingency and management reserves for the project to determine if these reserves are still needed or if additional reserves need to be requested.', test:'common/glossary-terms/glossary-terms'},
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
		{title:'B',index:5},
		{title:'C',index:9},
		{title:'D',index:13},
		{title:'E',index:19},
		{title:'F',index:23},
		{title:'G',index:27},
		{title:'H',index:30},
		{title:'I',index:33},
		{title:'J',index:36},
		{title:'K',index:41},
		{title:'L',index:44},
		{title:'M',index:48},
		{title:'N',index:52},
		{title:'O',index:55},
		{title:'P',index:(data.length -1)}
	];
	tableview.index = index;
	var index2 = [
	{title:'AA',index:0},
	{title:'BB',index:5},
	{title:'CC',index:9},
	{title:'DD',index:13},
	{title:'EE',index:19},
	{title:'FF',index:23},
	{title:'GG',index:27},
	{title:'HH',index:30},
	{title:'II',index:33},
	{title:'JJ',index:36},
	{title:'KK',index:41},
	{title:'LL',index:44},
	{title:'MM',index:48},
	{title:'NN',index:52},
	{title:'OO',index:55},
	{title:'PP',index:(data.length -1)}
	
	];
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_headers_filter;