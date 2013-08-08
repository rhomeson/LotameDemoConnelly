Ext.define('lotameDemo.controller.AudienceAJAX',{
    extend: 'Ext.app.Controller',
    stores : ['AudienceAJAXStore'],
    views: ['DataViewAJAX'],
    refs: [{
        ref: 'dataviewajax',
        selector: 'dataviewajax'
    }],

    init: function() {
	var me = this;
        me.control({
            'dataviewajax' : {
                beforerender: this.hideAJAX
            }
	});
    },
    hideAJAX: function(panel){
	panel.hide();
	}

});
