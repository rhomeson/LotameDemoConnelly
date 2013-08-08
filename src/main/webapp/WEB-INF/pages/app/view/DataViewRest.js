Ext.define('lotameDemo.view.DataViewRest',{
    extend: 'lotameDemo.view.DataView',
    alias: 'widget.dataviewrest',
    title:'Rest Selection',
    store: 'AudienceRestStore',
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
