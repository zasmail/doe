// Global Variables
var selectedField = "";
var selectionsArray = new Array();
var clickedTab = "";
var collectionLoaded = false;
var paneid = "";
var collectionTab = new Array();
var documentFileSize = $(".dfilesize").html();
var documentFileType = $(".dfiletype").text();

// JavaScript for the 'ICustomTheme' Plone browser layer */
// Toolbar expansion
//$(function() {
//  $("#toolbar").click(function() {
//    $("#toolbar").toggleClass( "expand", 1000 );
    //console.log('C ' + $("#toolbar").is('.expand') );
//    createCookie("toolbarOpen", $("#toolbar").is('.expand'), 365);

//    $("#toobar > ul.toolbox").not($(this).siblings()).slideUp();
//    $(this).siblings(".toolbox").slideToggle();
//    $(".tbDescription a:nth-child(1)").css("line-height", "1.2em");
//  });
  //console.log('B ' + readCookie("toolbarOpen") + ' ' + $("#toolbar").is('.expand') )
//  $("#toolbar").toggleClass( "expand", readCookie("toolbarOpen") );
  //console.log('A ' + readCookie("toolbarOpen") + ' ' + $("#toolbar").is('.expand') )
//});

function searchTable(inputVal) {
  var table = $('.listing');
  table.find('tr').each(function(index, row) {
    var allCells = $(row).find('td');

    if(allCells.length > 0) {
      var found = false;
      allCells.each(function(index, td) {
        var regExp = new RegExp(inputVal, 'i');
        if(regExp.test($(td).text())) {
          found = true;
          return false;
        }
      });
      if(found == true)$(row).show();else $(row).hide();
    }
  });
}
// Trim whitespace
function trim1 (str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function DropSelect(dropValue) {
  if (dropValue == "") {
    ResetRibbon();
    ResetTabs();
  } else if (dropValue == "type" || dropValue == "opi") {
    var rcols = 4;
    RibbonNav(dropValue, rcols);
  } else if (dropValue == "subject") {
    var rcols = 3;
    RibbonNav(dropValue, rcols);
  } else if (dropValue == "rifinal" || dropValue == "rachanges") {
    var tabType = paneid;
    var tabURL = "/Plone/directives/testcollection2/";
    LoadCollection(tabType, tabURL);
  } else {
    alert("something unintended happened!");
  }
}
// Filter Fields
function filterFields(inputVal, filterOn) {
alert("IV: " + inputVal + " - " + filterOn);
  var table = $('.listing');
  table.find('tr').each(function(index, row) {
    var allCells = $(row).find(filterOn);

    if(allCells.length > 0) {
      var found = false;
      allCells.each(function(index, td) {
        var regExp = new RegExp(inputVal, 'igm');
        if(regExp.test($(td).text())) {
          found = true;
          return false;
        }
      });
      if(found == true)$(row).show();else $(row).hide();
    }
  });
}

// Ribbon Nav Filter Table
function RibbonNav(filterType, rcols) {
  jQuery('table.listing > tbody').each(function(index,tbody) {
    var filteredTable = jQuery(tbody);

    // select all rows in the tbody
    var rows = filteredTable.find('tr').get();

    // initialize the return array
    var returnArray = new Array();
    
    // sainly set filterOn by passing in filterType based on the td class
    filterOn = "td.t" + filterType;
    
    // loop through each row and get the values for the cell we are on
    jQuery.each(rows, function(index, row) {
        row = jQuery(row).children(filterOn).text();
        var simpleRow = trim1(row);
        var firstLetter = simpleRow.charAt(0);
        
        returnArray[index] = simpleRow;
    });

    // sort the array
    returnArray.sort();

    var ribbon = document.getElementById("ribbonnav");
      ribbon.innerHTML = '';
    var rbreak = document.createElement("br");
      rbreak.setAttribute('clear', 'all');
    
    // loop through the sorted array and print only the unique values
    var count = 0;
    for (var j in returnArray) {
      // console.log("Sorted Return Array: " + j + " " + returnArray[j]);
      if (returnArray[j] !== returnArray[j - 1]) {
        count++;
        var raVal = trim1(returnArray[j]);
        var ritem = document.createElement("div");
        ritem.setAttribute('onclick', 'filterFields("' + raVal + '", "' + filterOn + '");');
        ritem.setAttribute("class", filterType);
        ritem.innerHTML = raVal;
        ribbon.appendChild(ritem);
        if (count % rcols == 0){ribbon.appendChild(rbreak);}
      }
    }
    // add a clearall break to hold formatting
    ribbon.appendChild(rbreak);
  });
}

function ResetRibbon() {
  var ribbon = document.getElementById("ribbonnav");
  ribbon.innerHTML = '';
  console.log("reset complete");
}

function ResetTabs() {
  for (var i = 0; i < collectionTab.length; ++i) {
console.log("Collection Tab: " + collectionTab[i] + " index " + i + " of " + collectionTab.length);
//    var tabToReset = document.getElementById(collectionTab[i]);
//    tabToReset.innerHTML = '';
document.getElementById(collectionTab[i]).innerHTML = '';
    console.log(collectionTab[i] + " tab Cleared!");
collectionTab.splice(i--,1);
console.log("CollectionTab: " + collectionTab);
  }
}

function LoadCollection(tabType, tabURL) {
  ResetRibbon();
  $("#" + tabType).load(tabURL + " table.listing", function() {
    collectionLoaded = true;
    collectionTab.push(tabType);
console.log('Pushing ' + tabType);
    console.log("Collection Loaded from: " + tabURL + " Collection Loaded Bool: " + collectionLoaded + " Collection Loading into " + collectionTab);
  });
}

function getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};

function menuToggle(selectorId){
    document.getElementById(selectorId).classList.toggle("show");
    
}

function setCookie(inputName){
    var value = $('input[name='+inputName+']:checked', '#searchMenuOptions').val();
     //$.cookie(inputName, value, {expires:1});
    createCookie(inputName,value,1);
}

function dynamicMenuLabel(){
    var html = "";
    var selectedSiteLabel = "";
    var selectedStatusLabel = "";
    
   // var selectedSite = $.cookie('WhichSite');
    var selectedSite = readCookie('WhichSite');
    if(selectedSite == undefined){
        selectedSite = 'directives';
        selectedSiteLabel = 'Directives';
        $("#site_directives").prop("checked",true);
    } else if (selectedSite == "") {
        selectedSiteLabel = 'All';
        $("#allOrg").prop("checked",true);
    } else {
        //the label should start with capital letter
        selectedSiteLabel = selectedSite.charAt(0).toUpperCase() + selectedSite.slice(1);
        var selector = "#site_"+selectedSite.toLowerCase();//the WhichSite values are lowercase, used in solr
        $(selector).prop("checked",true);
    }
     
    //var selectedStatus = $.cookie('DirStatus');
    var selectedStatus = readCookie('DirStatus');
    if(selectedStatus == undefined){
        selectedStatus = "Current";
        selectedStatusLabel = 'Current';
    } else if (selectedStatus == "") {
        selectedStatusLabel = 'Entire Site';
    } else {
        selectedStatusLabel = selectedStatus;
    }
    
    $("input[name=DirStatus][value='" + selectedStatus + "']").prop("checked",true);
    
    html = selectedStatusLabel + ' | ' + selectedSiteLabel;

    html = html + ' <span class="caret"></span>';
    $('#searchFilterExpand').html(html);
}
//toggle the quick search dropdown when click away from the menu
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".dropdown");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $("#searchMenuOptions").addClass("hide").removeClass("show");
    }
})


$(document).ready(function() {
// perform JavaScript for View Tabs after the document is scriptable.

  // setup ul.tabs to work as tabs for each div directly under div.panes
  $("ul.tabs").tabs("div.panes > div");


// For Tabs on Folder View
  $("ul.foldertabs").tabs("div.folderpanes > div", {
    effect: 'fade',
    onBeforeClick: function(event, i) {
      // get the pane to be opened
      var pane = this.getPanes().eq(i);
      paneid = this.getPanes().eq(i).attr("id");
      var paneurl = this.getTabs().eq(i).attr("href");

      if (pane.is(":empty")) {
        pane.load(paneurl + " table.listing");
      }
    }
  });

// Internal Table Search

  $('#searchwithinpage').keyup(function() {
    searchTable($(this).val());
  });


// Texthistory expansion
  $("#texthistorytoggle").click(function() {
    $("#texthistorycontent").toggle("slow", function() {

    });
  });

// Adds even/odd classes to unordered lists
$( "ul.visualNoMarker li" ).addClass(function( index ) {
  if (index % 2) {
    return "odd";
  } else {
    return "even";
  }
});

// Overlay for Comments Reply Form
  var triggers = $(".modalInput").overlay({
    // some mask tweaks suitable for modal dialogs
    mask: {
      color: '#ebecff',
      loadSpeed: 200,
      opacity: 0.9
    },

    closeOnClick: true
  });

  $('#portal-advanced-search a').prepOverlay({
    subtype: 'ajax',
    filter: '#content>*',
    cssclass: 'asoverlay',
    closeselector: '#cancel',
    config: {expose:{color:'#000'}}
  });

  $('#psitemap a').prepOverlay({
    subtype: 'ajax',
    filter: '#content>*',
    cssclass: 'asoverlay',
    closeselector: '#cancel',
    config: {expose:{color:'#000'}}
  });

  $('#pcontact a').prepOverlay({
    subtype: 'ajax',
    filter: '#content>*',
    cssclass: 'asoverlay',
    closeselector: '#cancel',
    config: {expose:{color:'#000'}}
  });

  $(".dfiletype").text("PDF document");
    
/*Quick search menu */
    dynamicMenuLabel();
    
    $( "#searchFilterExpand").on("click", function() {
        menuToggle("searchMenuOptions");
    });

    $( "#searchMenuOptions input[type=radio]").on("click", function() {
        setCookie('DirStatus');
        setCookie('WhichSite');
        dynamicMenuLabel();
    });
    
    
});


