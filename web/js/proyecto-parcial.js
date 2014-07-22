Ext.Loader.setConfig({
paths : {
'Ext.jc' : 'js/'
}
});

Ext.require([
'Ext.jc.PanelTercero'
]);

Ext.application({
    name:'ProyectoFinal',
    launch:function(){
   Ext.create('Ext.TabPanel',{
       fullscreen:true,
        tabBarPosition:'bottom',
        items:[
            {
                title:'Panel primero',
                iconCls:'user',
                items:[
                    panelPrimera
                ]
            },
               panelSegunda,
               panelTercero
          ]
   });
    }
});


/*  Creamos los paneles que iran agregandose a cada  contenedor del TabPanel, falta los otros dos
 * pero irian aqui igual que panelPrimera usar un xtype fieldset con lazy inizialization, porque si no el boton
 * no se mueve*/
var panelPrimera={
            xtype:'fieldset',
            instructions:'Todos los campos son requeridos',
            items:[
                {
                    html:['<img src="img/icono-calculadora.png" /><center><h1>Calculo del interes simple</h1>',
                         '<p>Llena cada uno de los campos y oprime el boton calcular</center>',
                    ].join('')
                },
                {
                  xtype:'textfield',
                  placeHolder:'tasa de interés'
                },
                {
                    xtype:'textfield',
                    placeHolder:'Tiempo en meses'
                },
                {
                    xtype:'textfield',
                    placeHolder:'Cantidad a prestar'
                },
                {
                    xtype:'button',
                    text:'calcular préstamo',
                    handler:function(){
                        /* Aqui haces todos tus calculos, a cada textfield debes asignarle un id para poder
                         * llamarlos con Ext.getCmp('tu-id') */
                        Ext.Msg.confirm('Resultado', 'Aqui va un resultaddo de tu xxx calculor');
                    }
                }
            ]
    
};

var panelSegunda={
      xtype:'panel',
      title:'panelsillo',
      id:'panelsillo',
      iconCls:'compose',
      items:[
          {
              xtype:'button',
              text:'hola',
              handler:function(){
           
              }
          }
      ]
};

var panelTercero ={
    xtype:'panel-puto',
    title:'Putas',
    iconCls:'organize'
};