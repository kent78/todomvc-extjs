Ext.define('TodoMVC.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
        'TodoMVC.view.TodoView'

    ],
    items:[

            {xtype: 'todopanel'}
        ],
    
    initComponent: function() {

        this.callParent();
    }
});