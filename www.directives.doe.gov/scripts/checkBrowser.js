<!-- Begin hide from old browsers


//http://stackoverflow.com/questions/2400935/browser-detection-in-javascript   
navigator.browserInfo = (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    //return M.join(' ');
    return { 'browser': M[0], 'version': M[1] };
})();
    
    
//console.log('browser info', navigator.browserInfo);

var version="not supported";
//if (navigator.browserInfo.browser == "Edge"){
//    version="supported";
//} else 
if (navigator.browserInfo.browser == "MSIE"){
    if(navigator.browserInfo.version >= 9){
        version="supported";
    }   
} else if (navigator.browserInfo == "IE 11"){  //for IE 11
    version="supported";  
} else if (navigator.browserInfo.browser == "Firefox"){
    if(Number(navigator.browserInfo.version) >= 30){
        version="supported";
    }   
} else if (navigator.browserInfo.browser == "Chrome"){
    if(Number(navigator.browserInfo.version) >= 39){
        version="supported";
    }         
}


if (version=="not supported") {
    var message = '<div class="alert alert-danger">RevCom has detected you have an old version or incompatible browser.<br>' +
        'RevCom supports Internet Explorer 9+ (not including MSEdge), Firefox 30+, Google Chrome 39+. <br>' +
        'Please upgrade or change your browser version or RevCom will not be able to provide all of its functionality to you.</div>';
    document.getElementById('browserWarn').innerHTML = message; 
    $('a.showdetails').trigger("click");

}
// end hide from old browsers -->

