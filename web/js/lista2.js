/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Alumno',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'id', type:'int'},
            {name:'nombre',type:'string'},
            {name:'email',type:'string'}
        ]
    ,
    proxy:{
        type:'rest',
        url:'http://localhost:8084/maven-spring-hibernate/servicios/alumno',
        reader:{
            type:'json',
            rootProperty:'alumnos'
        }
    }
  }
});

store=Ext.create('Ext.data.Store',{
    autoLoad:'true',
    model:'Alumno'
});

Ext.application({
    name:'lista-x',
    launch:function(){
        Ext.create('Ext.List',
        {
         fullscreen:true,
         store:store,
         itemTpl:'<div class="alumno">{nombre} email:<strong>{email}</strong> el id es: {id}</div>'
     });
        
    }
});
