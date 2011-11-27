/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 12:37 PM
 */
Ext.define('TodoMVC.controller.TodoCtrl', {
        extend: 'Ext.app.Controller',
        models: [
            'TodoModel'
        ],
        stores: [
            'TodoStore'
        ],
        views: [
            'TodoView'
        ],

        refs: [
            {
                ref: 'newTodoText',
                selector: '#newTodoText'
            },
            {
                ref: 'deleteChecked',
                selector: '#deleteChecked'
            },
            {
                ref: 'todoGrid',
                selector: '#todoGrid'
            },
            {
                ref: 'itemsLeft',
                selector: '#itemsLeft'
            }
        ],

        init: function() {
            this.control({
                'button[action=add]': {
                    click: this.addTodo
                },
                'button[action=deleteChecked]': {
                    click: this.deleteChecked
                },
                '#newTodoText': {
                    specialkey: this.onSpecialKey
                },



                '#todoGrid': {
                    afterrender: {
                        fn: function (cmp, options) {


                            var selModel = cmp.getSelectionModel(),
                            store = this.getTodoStoreStore();
                            if (store.getCount() > 0 ) {
                                cmp.show();
                            }

                            selModel.on(
                               'selectionchange', function ( model, records, eOpts ) {
                                    //Show/hide and set text of delete button
                                    var s = '',
                                        btn = this.getDeleteChecked(),
                                        itemsLeftText = this.getItemsLeft(),
                                        store = this.getTodoStoreStore(),
                                        storeCount = store.getCount(),
                                        rlen = records.length;

                                    if ( rlen > 1) {
                                        s = 's';
                                    }
                                    if(storeCount > 0){
                                        itemsLeftText.setText( TodoMVCtpl.itemsLeftTpl.applyTemplate([(storeCount-rlen), s]) );
                                        itemsLeftText.show();
                                    } else {
                                        itemsLeftText.hide();
                                    }
                                    if (rlen > 0 ){
                                        btn.setText( TodoMVCtpl.delBtnTpl.applyTemplate([rlen, s]) );
                                        btn.show();
                                    } else {
                                        btn.hide();
                                    }
                               }, this);

                        }
                    },
                    edit: {
                        fn: function(editor, e) {
                            // commit the changes right after editing finished
                            e.grid.getStore().sync();
                            e.record.commit();
                        }
                    }
                }
            });
            //load the store
            this.getTodoStoreStore().load();
        },

        onSpecialKey: function(field, e) {
            //console.log('Key pressed = ' + e.getKey());
            if (e.getKey() === e.ENTER) {
                this.addTodo();
            }
        },
        
        addTodo: function() {
            //console.log('Add button clicked, value =' + this.getNewTodoText().value);
            var todoText = this.getNewTodoText(),
                store = this.getTodoStoreStore(),
                s = '',
                itemsLeftText = this.getItemsLeft(),
                storeCount = store.getCount(),
                todoGrid = this.getTodoGrid(),
                selModel = todoGrid.getSelectionModel(),
                selection = selModel.getSelection(),
                rlen = selection.length;

            //Show the grid, hidden from start
            todoGrid.show();

            if ( rlen > 1) {
                s = 's';
            }
            if (todoText.value) {
                store.add({text: todoText.value, priority: 1});
                store.sync();
                todoText.setValue('');

                itemsLeftText.setText( TodoMVCtpl.itemsLeftTpl.applyTemplate([(storeCount+1-rlen), s]) );
                itemsLeftText.show();
            }
        },

        deleteChecked: function() {
            var todoGrid = this.getTodoGrid(),
                selModel = todoGrid.getSelectionModel(),
                selection = selModel.getSelection(),
                store = this.getTodoStoreStore(),
                length = selection.length,
                i;
            store.remove(selection);
            store.sync();
        },
        deleteCurrent: function(grid, rowIndex, colIndex) {

                                    //    var rec = grid.getStore().getAt(rowIndex);
                                    console.log('delete!!')
        }
    }
);