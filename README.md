# Objecticer
Create smart JS Objects automatically, passing standard HTML files.

var web_layouts = [{path:"components/Button.html", name:"Button"}];

  var objecticer = new Objecticer(web_layouts, function(){
  
      /*El array de la creación del objeto HTML está compuesto de JSONS
      cada JSON debe indicar el className a través del cual se modificarán los atributos
      del elemento concreto, únicamente se modificarán los atributos indicados en este JSON,
      estos atributos incluyen la id, src, etc. Y uno especial innerHTML para modificar el contenido
      */
      
      var bt = new Button([{className:button_div,id:"bt_0"}]);
      
  });
