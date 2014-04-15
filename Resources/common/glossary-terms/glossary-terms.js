function glossary_terms(_args) {

var win1 = Titanium.UI.createWindow({  
    title:_args.title,
    backgroundColor:'#DEDEDE',
    //height: Ti.UI.SIZE
    
});
	
	win1.backgroundColor = '#DEDEDE';
	var content = Ti.UI.createLabel({
    	top    : 15,
    	left: 15,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
    	text   : _args.data
    	//backgroundColor : "transparent"
    });
    
    win1.add(content);
    var checkequation = _args.equation1;
    
    if (checkequation) {
    var equation1label = Ti.UI.createLabel({
    	top    : 100,
    	left: 15,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	font: { fontWeight:'bold', fontSize:18 },
    	width: "auto",
    	text   : "Equations: "
    	//backgroundColor : "transparent"
    });
    
    var equation1 = Ti.UI.createLabel({
    	top    : 100,
    	left: 110,
    	//bottom : 10,
    	//left   : 10,
    	color  : "#000000",
    	height : "auto",
    	width: "auto",
    	text   : _args.equation1
    	//backgroundColor : "transparent"
    });
    
    
    
    
    win1.add(equation1label);
    win1.add(equation1);
    }
	
	return win1;
};	
module.exports = glossary_terms;

