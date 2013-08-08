Ext.define('lotameDemo.view.Viewport',{
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    requires: [
        'lotameDemo.view.ChoiceForm'
    ],
    initComponent: function(){
	var me = this;
	Ext.apply(me,{
	    items: [{
		xtype: 'choiceform'
	    }]
	}); 
	this.callParent();
    }
});


