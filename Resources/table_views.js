function table_views(_args) {
	var isMobileWeb = Ti.Platform.osname === 'mobileweb',
		isTizen = Ti.Platform.osname === 'tizen',
		win = Ti.UI.createWindow({
			title:_args.title
		});

	if (Ti.Platform.name == 'android') 
	{
		win.backgroundColor = '#4e5c4d';
	}
	else
	{
		win.backgroundColor = '#aebcad';
	}
	
	// create table view data object
	var data = [
		{title:'Initiating', hasChild:true, test:'ui/common/baseui/table_view_basic', header:'Process Groups'},
		{title:'Planning', hasChild:true, test:'ui/common/baseui/table_view_perf'},
		{title:'Executing', hasChild:true, test:'ui/common/baseui/table_view_custom_rowdata'},
		{title:'Monitoring/Controlling', hasChild:true, test:'ui/common/baseui/table_view_headers'},
		{title:'Closing', hasChild:true, test:'ui/common/baseui/table_view_footers'},
		{title:'Table API Basic', hasChild:true, test:'ui/common/baseui/table_view_api_basic', header:'More Information'},
		{title:'Glossary', hasChild:true, test:'ui/common/baseui/table_view_api_custom_rowheader'},
		{title:'Images', hasChild:true, test:'ui/common/baseui/table_view_section_header'}
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'TableView examples and test cases',
			footerTitle:"Wow. That was cool!",
			backgroundColor:'transparent',
			rowBackgroundColor:'white'
		};
	
	if ( !(isMobileWeb || isTizen) ) {
		tableViewOptions.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
	}
	
	var tableview = Titanium.UI.createTableView(tableViewOptions);
	
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
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = table_views;
