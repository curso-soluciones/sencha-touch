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

store=Ext.create('Ext.data.Store',{
    autoLoad:'true',
    model:'Usuario'
});

Ext.application({
    name:'lista-x',
    launch:function(){
        Ext.create('Ext.List',
        {
         fullscreen:true,
         store:store,
         itemTpl:'<div class="alumno">{nombre} sueldo:<strong>{sueldo}</strong> el id es: {id}</div>'
     });
        
    }
});
