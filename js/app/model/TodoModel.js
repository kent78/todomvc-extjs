/**
 * Created by JetBrains WebStorm.
 * User: beppe
 * Date: 10/26/11
 * Time: 1:10 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('TodoMVC.model.TodoModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',  //Gotcha: Without id's it wasn't possible to delete existing records from localStorage
            type: 'int'
        }, {
            name: 'text',
            type: 'string'
        }, {
            name: 'priority',
            type: 'string'
        }
    ],
    proxy: {
        type: 'localstorage',
        id  : 'todomvc-extjs'
    }
});