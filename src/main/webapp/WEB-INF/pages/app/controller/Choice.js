Ext.define('lotameDemo.controller.Choice',{
    extend: 'Ext.app.Controller',
    models: ['ChoiceModel'],
    stores : ['ChoiceStore'],
    views: ['ChoiceForm'],
    refs: [{
        ref: 'choiceForm',
        selector: 'choiceform'
    },{
        ref: 'dataviewajax',
        selector: 'dataviewajax'
    },{
        ref: 'dataviewrest',
        selector: 'dataviewrest'
    }],

    init: function() {
	var me = this;
        me.control({
            'choiceform combobox[name=choice]': {
                select: this.pickView
            }
	});
    },
    pickView: function(combo, records){
	var select = records[0].get('label');
	var formpanel = combo.up('choiceform');
	if(select == 'AJAX')
	{
	    if(formpanel.down('dataviewrest'))
		formpanel.down('dataviewrest').hide();
	    formpanel.down('dataviewajax').show();
	    formpanel.down('label').setText('Using an AJAX call to retrieve Top Audiences');
	} 
	else if(select == 'Rest')
	{
	    if(formpanel.down('dataviewajax'))
		formpanel.down('dataviewajax').hide();
	    formpanel.down('dataviewrest').show();
	    formpanel.down('label').setText('Using Restful Call to retrieve Top Audiences');
	} 
    }

});
