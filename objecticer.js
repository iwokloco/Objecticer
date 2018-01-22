window.objecticer = {};

function Objecticer(components, onObjecticer){
  window.objecticer.n_components = components.length;
  window.objecticer.components_list = components;
  window.objecticer.objects = new Array();
  window.objecticer.onObjecticer = onObjecticer;

  for(var i=0;i<components.length;i++){
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.current_index = i;
    xhr.open('GET', components[i].path);
    xhr.onreadystatechange = function() {
      if (xhr.readyState>3 && xhr.status==200){
        try {
          window.eval(components[xhr.current_index].name + " = new Function('json', 'return alert(\"hellooo\");');");

          //Crear elemento que contiene en su innerHTML el template cargado
          var container = document.createElement("div");
          container.innerHTML = xhr.responseText;

          //container.getElementById("bt").id = "bt0";

          alert(xhr.responseText);
          alert(container.innerHTML);
          onObjecticer();
        } catch (e) {
          console.log(e);
          //callback({"code":this.ERROR_AJAX,"xhr":xhr, "status": xhr.status, "msg": "Ops! Request fail"}, null);
        }
      }
    };
    xhr.send(null);
  }
}

//función recursiva al callback finalmente le pasa el html completo
/*function generateHTML(container, index){
    var jsonObj = [ {className:"button_div",id:"bt_0"},
                    {className:"button_txt",id:"bt_txt_0", innerHTML: "Botón!"}
                  ];

    for(var field in jsonObj){

    		if(Array.isArray(jsonObj[field])){
        }
    }
}*/
