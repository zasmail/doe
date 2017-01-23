// writeHeaderInfo.js
//   This script copies the text from two variables, docTypeName and screenName, into 
// the RevCom headers, which are incorporated by including either header or header_line 
// html snippet files.  This script also updates the html title with the screen name.
//    Define the variables within a <script type="text/javascript"> </script> block
// within the including html - give docTypeName the name of the document type of the
// current site (can be retrieved via a jsp tag), and give screenName the name of 
// the current screen being shown.


function writeHeaderInfo(){
    if(window.jQuery){
        $(function() {
            document.title = "RevCom " + screenName;
            if(typeof user != 'undefined'){
            $('#userinfo #dd span').html(
                user.realname + ', ' + user.sitename + ', '
            ); 
            $('#userinfo .userrole').html(user.rolename); 
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//" + window.location.hostname;
            }
            $('#logout span').html('<a href="'+window.location.origin+'/logout.jsp?A=11051&U=' + user.u + '&R=' + user.r + '&S=logout.jsp&docType.oop=' + user.doctype + '&_action=_logout" accesskey="x" title="Logout" style="text-decoration:underline;">Logout</a>');
            } 
            $(".dropdown-menu a[title|='List Documents']").click(function(){
                $.cookie('lastTab', 0); 
                var cookie = $.cookie('lastTab');
            });    
        });  
    }
}

function alternateColors(tr){
	if(document.getElementsByName){
		var rows = document.getElementsByName(tr);
		for(i = 0; i < rows.length; i++){
			//manipulate rows
			if(i % 2 == 0){
				rows[i].className = "evenRow";
			}else{
				rows[i].className = "oddRow";
			}
		}
	}
}

function startList() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("nav");
		if ( navRoot != null ) {
			for (i=0; i<navRoot.childNodes.length; i++) {
				node = navRoot.childNodes[i];
				if (node.nodeName=="LI") {
					node.onmouseover=function() {
						this.className+=" over";
					}
					node.onmouseout=function() {
						this.className=this.className.replace(" over", "");
					}
				}
			}
		}
	}
}
