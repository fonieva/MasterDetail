sap.ui.jsview("src.view.master", {
			
	// define the (default) controller type for this View
	getControllerName: function() {
		return "src.view.master";
	},
			
	// defines the UI of this View
	createContent: function(oController) {
		
		var dataObject = { data : [
			{index:0, nombre: "Nombre1", apellidos: "Apellidos", imagen: "src/images/man.gif"},
	        {index:1, nombre: "Nombre2", apellidos: "Apellidos", imagen: "images/women.gif"},
        	{index:2, nombre: "Nombre3", apellidos: "Apellidos", imagen: "images/women.gif"},
        	{index:3, nombre: "Nombre4", apellidos: "Apellidos", imagen: "images/man.gif"}
		]};
		
		var oModelMaster = new sap.ui.model.json.JSONModel();
		oModelMaster.setData(dataObject);
	  
		
	/*	var oObjectListItem = new sap.m.ObjectListItem("objectListItem", {
			title:"adfasdfs",
			attributes:"{nombre}"
		});*/
		
		var oPage = new sap.m.Page("master", {
			title: "{i18n>MasterTitle}",
			//title: "Nombre",
	       	content: []
	    });

	    var oSearchField = new sap.m.SearchField("searchField", {
	        placeholder: "Buscar", 
	        width: "100%",
	        showSearchButton: true,
		    showRefreshButton: true
	    });

		var oToolbar = new sap.ui.commons.Toolbar("toolBar");
	    oToolbar.setDesign(sap.ui.commons.ToolbarDesign.Standard);
	    oToolbar.addItem(oSearchField);

	    oPage.addContent(oToolbar);

	    var oList = new sap.m.List("list", {
	       selectionChange:"ontemSelect",
	       modeAnimationOn: false,
	       includeItemInSelection: true,
	       growing: true,
	       growingScrollToLoad: true,
	       swipe:"onSwipe"
	    });
	
	    var oObjectListItem = new sap.m.ObjectListItem("objectListItem", {
	        iconDensityAware: false,
	        title:"{nombre}"
	       // attributes:"{nombre}"
	        
	    });
	    oList.bindAggregation("items", "/data", oObjectListItem);
	    oPage.addContent(oList);
	        
	
/*	<List
				id="list" selectionChange="onItemSelect" modeAnimationOn="false" includeItemInSelection="true" mode="{viewProperties>/listMode}"
				growing="true" growingScrollToLoad="true" updateFinished="onUpdateFinished" updateStarted="onUpdateStarted" noDataText="{viewProperties>/noDataText}" swipe="onSwipe" >
				<ObjectListItem
					id="objectListItem" type="{device>/listItemType}" press="onItemSelect" 
					icon="{ImageUrl}" iconDensityAware="false" title="{Name}" numberUnit="{CurrencyCode}"
					number="{parts:[{path:'Price'},{path:'CurrencyCode'}], formatter:'sap.ca.ui.model.format.AmountFormat.FormatAmountStandard'}" >
					<attributes>
						<ObjectAttribute text="{MainCategoryName}" />
						<ObjectAttribute text="{SubCategoryName}" />
					</attributes>
				</ObjectListItem>
				<infoToolbar>
					<Toolbar visible="{viewProperties>/filterToolbarVisible}">
						<Label text="{viewProperties>/filterInfoText}" />
					</Toolbar>
				</infoToolbar>
				<swipeContent>
					<Button text="{i18n>xbut.delete}" type="Reject" tap="onSwipeDeleteItem" />
				</swipeContent>
			</List>*/
	
		oPage.setModel(oModelMaster);
		
		var footer = new sap.m.Bar({
					contentMiddle : [ new sap.m.Label({
						text : "Footer"
					}) ]
				});
		oPage.addContent(footer);
		
	   	return oPage;
	}
});