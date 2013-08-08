Ext.define('lotameDemo.view.DataViewAJAX',{
    extend: 'lotameDemo.view.DataView',
    alias: 'widget.dataviewajax',
    title:'AJAX Selection',
    store: 'AudienceAJAXStore',
    flex: 1,
    columns:  [{
	    text: 'Audience Name',
	    width: 250,
	    dataIndex: 'audienceName'
	},{
	    text: 'Page Views',
	    width: 100,
	    dataIndex: 'pageViews'
	},{
	    text: 'Targeting Code',
	    width: 100,
	    dataIndex: 'audienceTargetingCode'
	},{
	    text: 'Unique Views',
	    width: 100,
	    dataIndex: 'uniques'
	}],
    initComponent: function(){
	this.hide();
	this.callParent();
    }
});
