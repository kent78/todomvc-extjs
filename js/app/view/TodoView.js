/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 11:44 AM
 */
Ext.define('TodoMVC.view.TodoView', {
        extend: 'Ext.panel.Panel',
        requires: 'TodoMVC.store.TodoStore',
        alias: 'widget.todopanel',
        title: 'TodoMVC',
        
        layout: 'border',
        items: [
            {   xtype: 'component',
                region: 'west',
                html: 'tetsestew',
                split: true
            },
            {
                xtype: 'panel',
                region: 'center',
                maxSize: 520,
                width: 520,
                dockedItems: [
                {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        hidden: false,
                        items: [
                            {
                                xtype: 'box'
                            },
                            {
                                xtype: 'button',
                                text: 'Clear X completed items',
                                hidden: false
                            }
                        ]
                    }
                ],
                items: [{
                        xtype: 'box',
                        html: '<H1>Todos</H1>'
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [{
                                xtype: 'textfield',
                                itemId: 'newTodoText',
                                allowBlank: true
                            },
                            {
                                xtype: 'button',
                                text: 'Add',
                                action: 'add'
                            }

                        ]
                    },
                    {
                        xtype: 'gridpanel',
                        hideHeaders: true,
                        store: 'TodoStore',
                        selModel: Ext.create('Ext.selection.CheckboxModel'),
                        columns: [
                            {dataIndex: 'text'},
                            {itemId: 'delColumn'}
                        ]
                    }
                ]

            },
            {   xtype: 'component',
                region: 'east'}
        
        ]


    }
);