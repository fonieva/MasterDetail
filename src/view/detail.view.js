sap.ui.jsview("src.view.detail", {
			
	// define the (default) controller type for this View
	getControllerName: function() {
		return "src.view.detail";
	},
			
	// defines the UI of this View
	createContent: function(oController) {
	  var oPanel = new sap.ui.commons.Panel({ showCollapseIcon: false });
	  var image = new sap.ui.commons.Image({src: "src/images/man.gif", width: "125px", height: "125px" });
	  oPanel.addContent(image);	  	 
	  
	  var oPage = new sap.m.Page("detail", {
	   	title: "Detail",
          	content: [	]
      		});
		// button text is bound to Model, "press" action is bound to Controller's event handler
   	  
   	  oPage.addContent(oPanel);
   	  
   	  
   	  var oIconTabBar = new sap.m.IconTabBar("iconTabBar",{
   	  	 expanded : "{device>/isNoPhone}",
                      select : function(oEvent){
                               oController.handleTabSelect(oEvent);
                         },
                      items : [ new sap.m.IconTabFilter({
                  	      key : "Info",
                    	  icon : "sap-icon://hint",
                          content: [sap.ui.view({type:sap.ui.core.mvc.ViewType.JS, viewName:"src.view.detailInfo"})]
                      }),new sap.m.IconTabFilter({
                          key : "Notes",
                          icon : "sap-icon://notes"
                     })]
   	  });
   	  oPage.addContent(oIconTabBar);
   	  
   	  return oPage;
	}
});