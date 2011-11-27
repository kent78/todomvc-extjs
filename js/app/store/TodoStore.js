/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 12:56 PM
 */
Ext.define('TodoMVC.store.TodoStore', {
    
    extend: 'Ext.data.Store',
    /*requires: 'TodoMVC.model.TodoModel',*/
    model: 'TodoMVC.model.TodoModel',
    /*storeId: 'todoStore',*/
    fields: ['text', 'priority']
    //The proxy is defined in the model instead of in the store
});