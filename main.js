let aD=0;
let cout=0;
let cont=0;

function ir(){
    let Nombre = $("#nombre").val();
    let Monto= $("#monto").val();
    cont += 1;
    distribute(Nombre, Monto, cont);
    let mNombre = `<h6> ${Nombre}: </h6>` 
    let mMonto = ` <h6> $ ${Monto}</h6>` 
    $("#nombreAc").append(mNombre);
    $("#moneda").append(mMonto);  
}
function distribute(person, spent, c) {
    aD+= parseInt(spent);
    $("#total").text("$" + aD);
    cout=aD/c;
    $("#aporte").text("$" + (Math.round(cout)));
  }