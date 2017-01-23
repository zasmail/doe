// writeHeader5.js
// This script writes out the header html before the menu.
// Used on redesigned pages that break out of original revcom.css styles 
// 

document.writeln('<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->');
document.writeln('<!--[if lt IE 9]>');
document.writeln('<script src="/scripts/html5shiv.min.js"></script>');
document.writeln('<script src="/scripts/html5shiv-printshiv.min.js"></script>');
document.writeln('<![endif]-->');
document.writeln('<link rel="stylesheet" type="text/css" href="/scripts/jquery-ui-1.11.4.custom/jquery-ui.css">  ');
document.writeln('<link rel="stylesheet" type="text/css" href="/stylesheets/v9/bootstrap_rc.css?v=1.1">');
document.writeln('<link rel="stylesheet" type="text/css" href="/stylesheets/v9/font-awesome.min.css"> ');
document.writeln('<link rel="stylesheet" type="text/css" href="/stylesheets/v9/style.css?v=1.3">');
document.writeln('<link rel="stylesheet" type="text/css" href="/stylesheets/v9/doclist.css?v=1.1"> ');
document.writeln('<link rel="stylesheet" type="text/css" href="/stylesheets/v9/rc-org.css?v=1.1"> ');
if(typeof screenName != 'undefined'){
    var noskip = (screenName == "Login" || screenName == "Logout") ? false : true;
} else {
    var noskip = true;  
}
if(noskip){
document.writeln('<div id="skip"><a href="#theMainContent">Skip to Main Content</a></div> ');
}
document.writeln('<div id="headwrapper">');
document.writeln('<div id="new_header">');
document.writeln('    <div class="wrapper">');
document.writeln('        <div class="header-section first-child"><img src="/imagesv5/directive_logo_new.png" alt="U.S. Department of Energy Directives logo" width="252" height="65"></div>');
document.writeln('            <div class="header-section last-child">');
document.writeln('                <div id="userinfo">');
document.writeln('					<div id="dd" class="userinfo-dropdown-1" tabindex="1"><span></span>');
document.writeln('                       <p class="userrole"></p>');
document.writeln('					</div>');
document.writeln('				  </div>');
document.writeln('				  <div class=logout-btn id="logout">');
document.writeln('				      <span></span>');
document.writeln('				  </div>');
document.writeln('             </div>');
document.writeln('        </div>');
document.writeln('    </div>');
document.writeln('</div>');
document.writeln('</div>');