Ext.onReady(function(){
   Ext.Loader.setConfig({enabled: true});
});


Ext.application({
    name: 'TodoMVC',
    autoCreateViewport: false, //no viewport now
    appFolder: './js/app',
    requires: [
        'TodoMVC.view.TodoView'

    ],

/*    models: ['TodoModel'],
    stores: ['TodoStore'],*/
    controllers: ['TodoCtrl'],
    launch: function(){
        console.log('launch is done');


        Ext.create('TodoMVC.view.TodoView', {
            renderTo: 'mainPartDiv',
            layout: 'fit'
        })
    }

});