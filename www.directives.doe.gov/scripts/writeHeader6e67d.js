// writeHeader6.js
// This script writes out the header html before the menu.
// Used on redesigned pages that break out of original revcom.css styles 
// 
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
document.writeln('					<div id="dd" class="userinfo-dropdown-1"><span></span>');
document.writeln('                       <span class="userrole"></span>');
document.writeln('					</div>');
document.writeln('				  </div>');
document.writeln('				  <div class="logout-btn" id="logout">');
document.writeln('				      <span></span>');
document.writeln('				  </div>');
document.writeln('             </div>');
document.writeln('        </div>');
document.writeln('    </div>');
document.writeln('</div>');