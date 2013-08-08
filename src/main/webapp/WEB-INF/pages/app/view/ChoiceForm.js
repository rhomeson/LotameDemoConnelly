Ext.define('lotameDemo.view.ChoiceForm',{
    extend: 'Ext.form.Panel',
    alias: 'widget.choiceform',
    layout: 'vbox',
    width: 620,
    height: 400,
    border: 5,
    frame: true,
    title:'Lotame Demo',
    bodyPadding: 5,
    style: {
	borderColor: 'red',
	borderStyle: 'solid'
    }, 
    items: [
	{
	    xtype: 'panel',
	    layout: 'vbox',
	    width: 570,
	    height: 60,
	    style: 'background-color: #ddd;',
	    items: [
		{
		    xtype: 'label',
		    text: 'Choose a method to hit the Lotame Service. This can be either AJAX or Rest',
		    padding: 3,
		    width: 570,
		    height: 30,
		    style: 'font-weight:bold;color:blue;text-align:center;display:block;width:200px;height:200px;background-color: #ddd;'
		},{
		    xtype: 'combobox',
		    fieldLabel: 'Download Type',
		    name: 'choice',
		    padding: 5,
		    store: 'ChoiceStore',
		    valueField: 'label',
		    style: 'background-color: #ddd;',
		    displayField: 'label',
		    queryMode: 'local',
		    forceSelection: true,
		    emptyText: 'Select a Download Type...'
		}
	    ]
	},{
	    xtype: 'dataviewajax'
	},{
	    xtype: 'dataviewrest'
	}],
    initComponent: function(){
	this.callParent();
    }
});
