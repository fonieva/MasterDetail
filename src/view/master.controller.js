sap.ui.controller("src.view.master", {
			
//	onInit : function (evt) {
    // set explored app's demo model on this sample
//        var oModelMaster = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/empleados.json"));
        //var oModelMaster = new sap.ui.model.json.JSONModel();
        //oModelMaster.loadData('/empleados.json');
        //this.getView().setModel(oModelMaster);
  //  },
	
	// implement an event handler in the Controller
	doSomething: function() {
		alert("Hello World!");
	},
	
	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context); 
	},
	
	handleSearch : function (evt) {
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
		//crea un filtro para el atributo SoId, para mostrar los elementos que contiene la cadena query
			var filter = new sap.ui.model.Filter("SoId", sap.ui.model.FilterOperator.Contains, query);
			//metemos en filters la variable filter
			filters.push(filter);
		}
		// update list binding. Primeramente coge el element de la vista con el id List
		var list = this.getView().byId("list");
		//en binding guarda todos los elementos de list que están enlazados
		var binding = list.getBinding("items");
		//a continuación se filtran los elementos guardados en binding
		binding.filter(filters);
	}
});