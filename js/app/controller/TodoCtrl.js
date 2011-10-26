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

        refs: [{
                ref: 'newTodoText',
                selector: '#newTodoText'
            }
        ],

        init: function() {
            this.control({
                'button[action=add]': {
                    click: this.addTodo
                },
                '#newTodoText': {
                    specialkey: this.onSpecialKey
                }
            })
        },

        onSpecialKey: function(field, e) {
            //console.log('Key pressed = ' + e.getKey());
            if (e.getKey() === e.ENTER) {
                this.addTodo();
            }
        },
        
        addTodo: function() {
            //console.log('Add button clicked, value =' + this.getNewTodoText().value);
            var todoText = this.getNewTodoText();
            var store = this.getTodoStoreStore();
            if (todoText.value) {
                store.add({text: todoText.value});
                todoText.setValue('');
            }
        }
    }
);