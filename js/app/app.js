Ext.onReady(function(){
   Ext.Loader.setConfig({enabled: true});
});

Ext.application({
    name: 'TodoMVC',
    autoCreateViewport: true,
    appFolder: './js/app',

/*    models: ['TodoModel'],
    stores: ['TodoStore'],*/
    controllers: ['TodoCtrl']
});