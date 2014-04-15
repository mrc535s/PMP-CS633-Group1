function load_video(_args) {

var win1 = Titanium.UI.createWindow({  
    title:_args.title,
    backgroundColor:'#DEDEDE',
    //height: Ti.UI.SIZE
    
});
	
	var webview = Titanium.UI.createWebView({url:_args.data});
    
    win1.add(webview);
	
	return win1;
};	
module.exports = load_video;

