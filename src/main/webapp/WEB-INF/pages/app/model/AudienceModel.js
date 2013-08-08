Ext.define('lotameDemo.model.AudienceModel',{
    extend: 'Ext.data.Model',
    fields :[{name: 'audienceTargetingCode', type: 'string'}, 
	      {name: 'audienceName', type: 'string'}, 
	      {name: 'pageViews', type: 'int'},
	      {name: 'uniques', type: 'int'}]
});
