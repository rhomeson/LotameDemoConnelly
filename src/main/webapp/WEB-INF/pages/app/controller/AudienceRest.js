Ext.define('lotameDemo.controller.AudienceRest',{
    extend: 'Ext.app.Controller',
    models: ['AudienceModel'],
    stores : ['AudienceRestStore'],
    views: ['DataViewRest'],
    refs: [{
        ref: 'dataviewrest',
        selector: 'dataviewrest'
    }],

    init: function() {
	var me = this;
        me.control({
            'dataviewajax' : {
                beforerender: this.hideRest
            }
	});
    },
    hideRest: function(panel){
	panel.hide();
    }

});
