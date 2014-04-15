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
		{title:'Plan Cost Management Plan', hasChild:true, test:'common/plan-costs', header:'Cost Processes'},
		{title: 'Determine Budget', hasChild:true, test:'common/determine-budget'},
		{title: 'Control Costs', hasChild:true, test:'common/control-costs'},
		{title: 'Estimate Costs', hasChild:true, test:'common/estimate-costs'},
		{title:'Glossary', hasChild:true, test:'common/glossary', header:'More Information'},
		{title:'References', hasChild:true, test:'common/references'}
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

/*
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);*/

var webview = Titanium.UI.createWebView({url:'http://paypal.com'});
    
    win2.add(webview);
    //window.open({modal:true});


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

var scrollView = Ti.UI.createScrollView({
  contentWidth: '90%',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  //showHorizontalScrollIndicator: true,
 // height: '80%',
  //width: '80%'
});

var label3 = Titanium.UI.createLabel({
	top    : 15,
    	left: 15,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
	text:'1. Question 1 text - Lorem ipsum test question goes here?\nAnswer 1\n\n2. Question 2 - Lorem ipsum test question goes here?\nAnswer 2\n\nQuestion 3 Text - Lorem ipsum test question goes here?\nAnswer3',
});

var questions=Array();

var explanations = Array();

questions[0]="Which of the Determine Budget process tools do you think you would generally use first to establish the cost baseline?";
questions[1]="Which of these are not inputs to the Determine Budget process?";
questions[2]="Which statement is true about Determine Budget?";
questions[3]="Which of the following is NOT an input of the Plan Cost Management process?";
questions[4]="Which of the tools and techniques of the Plan Cost Management process uses historical information from prior similar projects and adapts it appropriately to the current project?";
questions[5]="The _______________ plan is a component of the project management plan and describes how the project costs will be planned, structured, and controlled.";
questions[6]="Which of the following documents can be used to guide all the work in both project executing and project monitoring and controlling phase of a project?";

var answers = Array();

answers[0] = "A - Historical relationships";
answers[1] = "B - Funding limit reconciliation";
answers[2] = "C - Reserve analysis";
answers[3] = "D - Cost Aggregation";

answers[4] = "A - Cost baseline, requirements traceability matrix";
answers[5] = "B - Project schedule, agreements";
answers[6] = "C - Basis of estimates, activity cost estimates";
answers[7] = "D - Project schedule, resource calendars";

answers[8] = "A - Allocating the value of the overall cost estimate to individual work items, in order to establish a cost baseline for measuring project performance";
answers[9] = "B - Assessing how much the organization will charge for the product or service";
answers[10] = "C - Both of the above are true";
answers[11] = "D - None of the above";

answers[12] = "A - Project Management Plan";
answers[13] = "B - Project Charter";
answers[14] = "C - Project Funding";
answers[15] = "D - Enterprise Environmental Factors (EEF)";

answers[16] = "A - Analytical Techniques";
answers[17] = "B - Meetings";
answers[18] = "C - Expert Judgement";
answers[19] = "D - Forecasting";

answers[20] = "A - Cost Baseline";
answers[21] = "B - Cost Management Plan";
answers[22] = "C - Change Request";
answers[23] = "D - Work Performance";

answers[24] = "A - Project Management Plan";
answers[25] = "B - Risk Plan";
answers[26] = "C - Project QA Plan";
answers[27] = "D - Project Charter";


explanations[0] = "The first step in creating a cost baseline is generally aggregating costs to determine the likely cost of each component in the project’s work breakdown structure, or WBS";
explanations[1] = "The cost baseline and the requirements traceability matrix are not inputs to the Determine Budget process. ";
explanations[2] = "Determine Budget is allocating the value of the overall cost estimate to individual work items, in order to establish a cost baseline for measuring project performance.";
explanations[3] = "Project Funding is not an input of the Plan Cost Management process. Inputs of the Plan Cost Management process are: Project Management Plan, Project Charter, Enterprise Environmental Factors (EEF), and Organizational Process Assets (OPA). (PMBOK Page no, 196)";
explanations[4] = "Explanation: Expert judgment, guided by historical information, provides valuable insight about the environment and information from prior similar projects. Expert judgment can also suggest whether to combine methods and how to reconcile differences between them. (PMBOK Page no, 198)";
explanations[5] = "The cost management plan is a component of the project management plan and describes how the project costs will be planned, structured, and controlled. (PMBOK page no, 198)";
explanations[6] = "The Project Management Plan can be used to guide all the work in both project executing and project monitoring and controlling phase of a project.";
addQuestion(questions, answers, win3, explanations, scrollView);



function addQuestion(questions, answers, win, explanations, scrollView)

{
	var b = new Array();
	var toptracker = 15;
	var answertracker = 0;
	
	var questiontracker = 0;
	for (var i = 0; i < questions.length; i++) {
    
    var question = questions[i];
    
    //alert(questions.length);
    var label = Titanium.UI.createLabel({
	top    : toptracker,
    	left: 15,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
	text:question
});
    
  scrollView.add(label);
  toptracker+=40;
  
  
  for (var t=0; t<=3; t++){
  	
   b[answertracker] = Ti.UI.createButton({
        title: answers[answertracker],
        top:toptracker,
        left: 25,
        my_id: questiontracker
        
    });
    toptracker+=25;
    
          scrollView.add(b[answertracker]);
          
      if (((i==0) && (t==3)) || ((i==1) && (t==0)) || ((i==2) && (t==0)) || ((i==3) && (t==2)) || ((i==4) && (t==2)) || ((i==5) && (t==1)) || ((i==6) && (t==0)))
      {
      	
 		var p = 0;
 		//var this_id = b[answertracker].my_id;
      b[answertracker].addEventListener('click', function(event){
        //show(win, label, b[answertracker]);
        var this_id = event.source.my_id;
		alert ('Correct, ' + explanations[this_id]); 	
        
    });
  
    }
    
    else
    {
    	b[answertracker].addEventListener('click', function(event){
       	var this_id = event.source.my_id;
		alert ('Incorrect, ' + explanations[this_id]); 
        
    });
    	
    }
    answertracker++;
    

   } 
   
toptracker+=15;
questiontracker++;
  
}

win.add(scrollView);	
}

function show(win, label, button) {
	
	button.setColor('red');
}

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3);  

//tabGroup.setActiveTabBackgroundSelectedColor('#CC0000');
// open tab group
tabGroup.open();
