// document.getElementById('form').addEventListener('submit',calcular);

function calcular(){
  document.getElementById('ganancia').innerHTML=""  
  let capital = document.getElementById('capital').value;
  let tna = document.getElementById('tna').value;
  let dias = document.getElementById('dias').value;
  let fechahoy = new Date();
  let fechavto = sumaFecha(dias);
  
  document.getElementById('ganancia').innerHTML= "<p><b style='text-decoration:underline; font-size:22px;'>Resultado</b></p><p><b>Capital: </b>$ " + capital + "</p><p><b>TNA: </b>" + tna + " %</p><p><b>Días: </b>" + dias + "</p><p><b>Fecha de cobro: </b>" + fechavto + "</p><p><b>Interés: </b>$ " + (capital*tna/100/365*dias).toFixed(2);
}

sumaFecha = function(d, fecha){
  var Fecha = new Date();
  var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
  var sep = sFecha.indexOf('/') != -1 ? '/' : '-';
  var aFecha = sFecha.split(sep);
  var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
  fecha= new Date(fecha);
  fecha.setDate(fecha.getDate()+parseInt(d));
  var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
  var disem = days[fecha.getDay()];
  var anno=fecha.getFullYear();
  var mes= fecha.getMonth()+1;
  var dia= fecha.getDate();
  mes = (mes < 10) ? ("0" + mes) : mes;
  dia = (dia < 10) ? ("0" + dia) : dia;
  var fechaFinal = disem + " " +dia+sep+mes+sep+anno;
  return (fechaFinal);
}

function puntos(){
  ca
}
