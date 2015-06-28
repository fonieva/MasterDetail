sap.ui.jsview("src.view.app", {
    
    getControllerName: function(){
        return "";
    },
    
    createContent: function(oController){
       	
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : "src/i18n/messageBundle.properties"
        });

	    var oSplitApp = new sap.m.SplitApp("mySplitApp", {});
	    
        var masterPage = sap.ui.view({id: "masterPage", type:sap.ui.core.mvc.ViewType.JS, viewName:"src.view.master"});
		//masterPage.setMode(i18nModel, "i18n");
		
		var detailPage = sap.ui.view({id: "detailPage", type:sap.ui.core.mvc.ViewType.JS, viewName:"src.view.detail"});
	//	detailPage.setMode(i18nModel, "i18n");
		
 		oSplitApp.addMasterPage(masterPage);
 		oSplitApp.addDetailPage(detailPage);
 		oSplitApp.setDefaultTransitionNameDetail("fade");
       
       return oSplitApp;
   }
});