/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('Usuario',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'id', type:'int'},
            {name:'nombre',type:'string'},
            {name:'sueldo',type:'float'}
        ]
    ,
    proxy:{
        type:'rest',
        url:'http://localhost:8092/maven-spring-hibernate/servicios/usuario',
        reader:{
            type:'json',
            rootProperty:'usuarios'
        }
    }
  }
});
Ext.application({
    name:'formita2',
    launch:function(){
Ext.create('Ext.form.Panel',{
    fullscreen:true,
  items:[
      {
      xtype:'fieldset',
      
        items:[
            {
                xtype:'textfield',
                id:'nombre',
                label:'Nombre'
            },
            {
                xtype:'textfield',
                id:'sueldo',
                label:'Sueldo'
            },
            {
                xtype:'button',
                text:'guardar usuario',
                ui:'success',
                handler:function(){
                  
                    /*
                     * A guardar culebras de rio
                     * 
                     */
                    var usuariopost = Ext.create('Usuario', {nombre: Ext.getCmp('nombre').getValue(), sueldo:Ext.getCmp('sueldo').getValue()});

        usuariopost.save({
    success: function(ed) {
          Ext.Msg.alert("guardado");
        console.log("El nombre que se ha guardado es este:"+ ed.get("nombre"));
     
    },
    failure:function(ed){
        console.log('nada'+ed.nombre);
    }
}); 
                }
            }
        ]
    } 
  ]
    
});
    }
});