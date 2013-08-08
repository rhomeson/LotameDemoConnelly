Ext.define('lotameDemo.view.DataView',{
    extend: 'Ext.grid.Panel',
    layout: 'vbox',
    width: 570,
    height: 280,
    border: 5,
    scroll: false,
    viewConfig: {
	style: { overflow: 'auto', overflowX: 'hidden' }
    },
    frame: true,
    bodyPadding: 5,
    style: {
	borderColor: 'black',
	borderStyle: 'solid'
    }, 
    initComponent: function(){
	this.callParent();
    }
});
