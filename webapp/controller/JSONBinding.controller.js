sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/ui5/trng/sapui5bootcampactivity05/model/formatter"
], (Controller, JSONModel, Formatter) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sapui5bootcampactivity05.controller.JSONBinding", {
        formatter: Formatter, //Usage: .fomatter.<formatter.js function>

        onInit() {
            //Instantiate JSON Model
            var oModel = new JSONModel();
            var oMockModel = new JSONModel("../localService/mockdata/Employees.json");

            //Creating JSON Data
            var oEmployees = {
                EID: "eeje.manipon",
                Enabled: false, //Two-way binding is triggered in Checkbox
                Address:{
                    Street: "San Roque",
                    City: "San Jacinto",
                    Zip: "2431",
                    Country: "Philippines"
                },
                SalesAmount: 999999.00,
                CurrencyCode: "Php"
            };

            oModel.setData(oEmployees);

            this.getView().setModel(oModel, "employeesModel"); //Local Data
            this.getView().setModel(oMockModel, "employeesMockModel"); //Mock Data
        },
        onListItemPress: function (oEvent) {
			var oSelectedItem = oEvent.getSource();
            var oBindingContext = oSelectedItem.getBindingContext("productsModel");
            var sPath = oBindingContext.getPath();
            var oPanel = this.byId("formProductDetails");

            oPanel.bindElement({
                path: sPath,
                model: "productsModel"
            });
		}
    });
});