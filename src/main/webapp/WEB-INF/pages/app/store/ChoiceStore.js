Ext.define('lotameDemo.store.ChoiceStore',{
    extend: 'Ext.data.Store',
    model: 'lotameDemo.model.ChoiceModel',
    fields : ['label'],
    autoLoad: 'true',
    data: [
	{label: 'Rest'},
	{label: 'AJAX'}
    ]
});
