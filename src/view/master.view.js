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
		
		/*var oRowTemplate = new sap.ui.commons.TextView({
          text: "{nombre}"
        });*/
		
	/*	var oObjectListItem = new sap.m.ObjectListItem("objectListItem", {
			title:"adfasdfs",
			attributes:"{nombre}"
		});*/
		
		var oItemTemplate = new sap.ui.core.ListItem({text:"{nombre}"});
		
		var oRowTemplate = new sap.ui.commons.Message("rowTemplate", {
    		nombre : "{nombre}",
    		apellidos : "{apellidos}",
    		imagen: "{imagen}"
		});
		
		/*var oRowTemplate = new sap.ui.commons.Label("l1", {
   		 // bind text property of textfield to firstName property in the model
    	setText: "{nombre}"
		});*/

		/*var oRowTemplate = new sap.ui.commons.layout.MatrixLayout("theMatrix");
				
		var  matrixRow, matrixCell, control;
		// main matrix 
		oRowTemplate.setWidth("70%");
		// main row
		matrixRow = new sap.ui.commons.layout.MatrixLayoutRow();

		//image
		control = new sap.ui.commons.Image();
		control.setHeight("60px");
		control.setWidth("50px");
		control.bindProperty("src","src");
		matrixCell = new sap.ui.commons.layout.MatrixLayoutCell();
		matrixCell.addContent(control);
		matrixRow.addCell(matrixCell);

		//label nombre
		control = new sap.ui.commons.Label();
		control.bindProperty("text","nombre");
		matrixCell = new sap.ui.commons.layout.MatrixLayoutCell();
		matrixCell.addContent(control);
		matrixRow.addCell(matrixCell);
		
		//label apellidos
		control = new sap.ui.commons.Label();
		control.bindProperty("text","apellidos");
		matrixCell = new sap.ui.commons.layout.MatrixLayoutCell();
		matrixCell.addContent(control);
		matrixRow.addCell(matrixCell);*/		
	
		var oTitle = new sap.ui.core.Title({text:"Employees", icon:"src/images/sapLogo.gif", tooltip:"Employees"});
		var oRowRepeater = new sap.ui.commons.RowRepeater("rowRepeater", {
    		design: "Standard",
    		numberOfRows: 10,
    		currentPage: 1,
    		title: oTitle,
    		press: oController.doSomething, 
    		// bind row aggregation
    		rows : {path : "/data", template : oRowTemplate}
		});		
		oRowRepeater.setNoData(new sap.ui.commons.TextView({text: "Sory, no data available!"}));
		oRowRepeater.bindRows("/data", oRowTemplate);
		
		var oPage = new sap.m.Page("master", {
			title: "Master",
	       	content: []
	    });
		
		//oRowTemplate.addRow(matrixRow);		
		oPage.addContent(oRowRepeater);
		oPage.setModel(oModelMaster);
		
	   	return oPage;
	}
});