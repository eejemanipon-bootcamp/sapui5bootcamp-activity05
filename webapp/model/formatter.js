sap.ui.define([
	"sap/ui/core/library",
    "sap/ui/model/type/Currency"
], function(mobileLibrary,Currency) {
	"use strict";

	const formatter = {
        formatMail: function(sEID) {			
	        var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();			
            return "mailto:" + encodeURIComponent(sEID + oBundle.getText("domain")) + 
                   "?subject=" + encodeURIComponent(oBundle.getText("mailSubject", [sEID])) +				
                   "&body=" + encodeURIComponent(oBundle.getText("mailBody"));
        },
        formatStockValue(fUnitPrice, iStockLevel, sCurrCode){
            var oCurrency = new Currency();
	        return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }
	};

	return formatter;
});
