Ext.define('lotameDemo.store.AudienceAJAXStore',{
    extend: 'Ext.data.Store',
    model: 'lotameDemo.model.AudienceModel',
    autoLoad: 'true',
    proxy: {
	type: 'ajax',
	url: 'audiences',
	reader: {
	    type: 'json',
	    root: 'TopAudiencesReport.stat'
	} 
    }
});
