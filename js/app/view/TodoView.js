/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 11:44 AM
 */

Ext.ns('TodoMVCtpl');
TodoMVCtpl.itemsLeftTpl = new Ext.Template("{0} item{1} left.");
TodoMVCtpl.delBtnTpl    = new Ext.Template("Clear {0} completed item{1}");

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
                        hidden:true,
                        border: false,
                        width: 520,
                        hideHeaders: false,
                        store: 'TodoStore',
                        

                        plugins: [ Ext.create('Ext.grid.plugin.CellEditing') ],
                        selModel: Ext.create('Ext.selection.CheckboxModel', {checkOnly: true}),

                        columns: [
                            {
                                dataIndex: 'text',
                                text: 'Todo',
                                field: {
                                    type:'textfield'
                                }
                            },

                            {
                                dataIndex: 'priority',
                                text: 'Priority',
                                field: Ext.create('Ext.form.field.ComboBox', {
                                    editable: false,
                                    store: [[1,1], [2,2], [3,3], [4,4], [5,5]]
                                })
                            }
/*
                            ,{
                                xtype:'actioncolumn',
                                width:50,
                                items: [{
                                    icon: 'js/extjs/examples/restful/images/delete.png',
                                    tooltip: 'Delete',
                                    handler: function(grid, rowIndex, colIndex) {
                                        var controller = TodoMVC.controller.TodoCtrl;
                                            //.getController('TodoCtrl');
                                        console.log(controller);
                                        var rec = grid.getStore().getAt(rowIndex);
                                    }
                                }]
                            }

                            {
                                text: '',
                                renderer: function (value, metaData, record, row, col, store, gridView){
                                    var id = Ext.id();
                                    / * Ext.create('Ext.Button', {
                                        text: 'Click me',
                                        renderTo: Ext.getBody(),
                                        handler: function() {
                                            alert('You clicked the button!')
                                        }
                                    });  * /
                                    return('<div id="' + id + '"></div>');

                                }

                            }

                            TODO: make a hidden floating toolbar with a delete button. move it on mouseover on rows to right top/left position. 
                            Register which record user is currently hovering on and delete this one if button clicked. IE one button and easy to refer to it from controller
*/
                            
                        ]
                    }
                ]

            } 
        
        ]


    }
);