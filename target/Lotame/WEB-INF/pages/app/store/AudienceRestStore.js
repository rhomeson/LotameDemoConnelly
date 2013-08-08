Ext.define('lotameDemo.store.AudienceRestStore',{
    extend: 'Ext.data.Store',
    model: 'lotameDemo.model.AudienceModel',
    autoLoad: 'true',
    autoSync: 'true',
// This won't work without embedding the token.
    proxy: {
	type: 'rest',
	url: 'https://api.lotame.com/audstats/reports/topAudiences?page_count=20&page_num=1',
	reader: {
	    type: 'json',
	    root: 'TopAudiencesReport.stat'
	} 
    }
});
