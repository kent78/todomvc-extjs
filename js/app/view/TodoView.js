/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 11:44 AM
 */

Ext.ns('TodoMVC');
TodoMVC.itemsLeftTpl = new Ext.Template("{0} item{1} left.");
TodoMVC.delBtnTpl    = new Ext.Template("Clear {0} completed item{1}");

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
                                xtype: 'tbtext',
                                itemId: 'itemsLeft',
                                text: '0 items left',
                                hidden: true
                            },
                            '->',
                            {
                                xtype: 'button',
                                text: 'Clear 5 completed item(s)',
                                hidden: true,
                                action: 'deleteChecked',
                                itemId: 'deleteChecked'

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
                        itemId: 'todoGrid',
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