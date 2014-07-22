//var email = Ext.getCmp('email').getValue();
// Ajustamos un model para llenar nuestro storesito
Ext.define('Usuario', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name:'id',type:'int'},
            {name: 'nombre', type: 'string'},
            {name: 'edad',   type: 'float'}
        ],
        proxy: {
        type: "rest",
        url : "http://localhost:8085/maven-autenticar/servicios/usuario/",
        
    
        reader: {
            type: "json",
            rootProperty: "usuarios"
        } 
     }
    }
});


var store = Ext.create("Ext.data.Store", {
    autoLoad: true,
    model: "Usuario"
  
});

Ext.application({
   name:'listita',
   launch:function(){
       Ext.create('Ext.List',{
           fullscreen:true,
            store:store,
             itemTpl: '<div class="usuario">{nombre} <strong>{edad}</strong></div>',
            listeners : {
        itemtap: function (list, index, item, record) {
            // Show next view based on current record
            var nombre= record.get('nombre');
            Ext.Msg.confirm('Hola','haz seleccionado el item:'+nombre);
        }
    }
                
            
       });
   }
});


