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
        
        layout: 'fit',
        items: [

            {
                xtype: 'panel',
                border: false,
                region: 'center',
                maxSize: 520,
                width: 520,
                split: true,
                dockedItems: [
                {
                        xtype: 'toolbar',
                        width: 520,
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
                        width: 520,
                        xtype: 'box',
                        html: '<H1>Todos</H1>',
                        padding: '10 10 10 10'
                    },
                    {
                        width: 520,
                        xtype: 'panel',
                        layout: 'hbox',
                        padding: '10 10 10 10',
                        border: false,
                        items: [{
                                xtype: 'textfield',
                                itemId: 'newTodoText',
                                allowBlank: true
                            },
                            {
                                xtype: 'button',
                                text: 'Add',
                                action: 'add',
                                margin: '0 0 0 5'
                            }

                        ]
                    },
                    {
                        xtype: 'gridpanel',
                        border: false,
                        width: 520,
                        hideHeaders: true,
                        store: 'TodoStore',
                        selModel: Ext.create('Ext.selection.CheckboxModel'),
                        columns: [
                            {dataIndex: 'text'},
                            {itemId: 'delColumn'}
                        ]
                    }
                ]

            } 
        
        ]


    }
);