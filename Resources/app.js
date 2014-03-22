// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	//activeTabBackgroundSelectedColor: "#CC0000"
});


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'PMP Fundamentals',
    backgroundColor:'#DEDEDE',
    height: Ti.UI.SIZE
    
});
var tab1 = Titanium.UI.createTab({  
    icon:'images/home.png',
    title:'Home',
    window:win1,
    height: Ti.UI.SIZE,
    //backgroundColor: "#CC0000"
    //height:650
});

	if (Ti.Platform.name == 'android') 
	{
		win1.backgroundColor = '#4e5c4d';
	}
	else
	{
		win1.backgroundColor = '#DEDEDE';
	}
	// create table view data object
	var data = [
		/*{title:'Plan Cost Management Plan', hasChild:true, test:'common/initiating', header:'Cost Processes'},
		{title:'Planning', hasChild:true, test:'common/initiating'},
		{title:'Executing', hasChild:true, test:'common/initiating'},
		{title:'Monitoring/Controlling', hasChild:true, test:'common/initiating'},
		{title:'Closing', hasChild:true, test:'common/initiating'},*/
		{title:'Plan Cost Management Plan', hasChild:true, test:'common/initiating', header:'Cost Processes'},
		{title: 'Determine Budget', hasChild:true, test:'common/initiating'},
		{title: 'Control Costs', hasChild:true, test:'common/initiating'},
		{title: 'Estimate Costs', hasChild:true, test:'common/estimate-costs'},
		{title:'Glossary', hasChild:true, test:'common/initiating', header:'More Information'},
		{title:'References', hasChild:true, test:'common/initiating'}
	];
	
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableViewOptions = {
			data:data,
			headerTitle:'View Process Details and Information',
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
			width:'100%',
			//height:550,
			top: 90
		};
	
	
		tableViewOptions.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
	
	var content = Ti.UI.createLabel({
    	top    : 15,
    	left: 140,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
    	text   : "Below you will find information, tutorials, and references related to cost management to help prep you for the PMP exam. The tutorials are based off the PMBOK 5th edition",
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
			win = new ExampleWindow({title: e.rowData.title, containingTab: tab1, tabGroup: tabGroup});
			tab1.open(win,{animated:true});
		}
	});
	win1.add(logo);
	win1.add(content);
	win1.add(tableview);
	//tableview.focus();


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Donate',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'images/dollar-sign.png',
    title:'Donate',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


///

var win3 = Titanium.UI.createWindow({  
    title:'Practice Questions',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/write.png',
    title:'Practice Questions',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3);  

//tabGroup.setActiveTabBackgroundSelectedColor('#CC0000');
// open tab group
tabGroup.open();
