sap.ui.jsview("src.view.detailInfo", {
			
	// define the (default) controller type for this View
	getControllerName: function() {
		return "src.view.detailInfo";
	},
			
	// defines the UI of this View
	createContent: function(oController) {	
		return new sap.m.Button({text:'Boton',press:oController.doSomething});
	}
});