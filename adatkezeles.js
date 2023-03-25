export function divKeszit(lista) {
    let txt = "";
    txt += `<div class = "container">`;
    for (let index = 0; index < lista.length; index++) {
      for (const key in lista) {
        lista[key];
      }
      for (const kutya of lista) {
      }
      txt += `<div class= "kartya">`;
      txt += `<h3>Kutya adatai</h3>`;
      for (const kulcs in lista[index]) {
        txt += `<p>${kulcs}: ${lista[index][kulcs]}</p>`;
      }
      txt += `</div>`;
    }
    txt += `</div>`;
    return txt;
  }
  
  export function tablaKeszit(lista) {
    let txt2 = "";
    txt2 += `<div class = "container">`;
    txt2 += `<table><tr>`;

    for (const kulcs in lista[0]) {
      txt2 += `<th>${kulcs}</th>`;
          
        }
      txt2 += `<th></th></tr>`
  

    for (let index = 0; index < lista.length; index++) {
      txt2 += `<tr>`;
      for (const kulcs in lista[index]) {
        txt2 += `<td>${lista[index][kulcs]}</td>`;
      }
      txt2 += `</tr>`;
    }
    txt2 += `</table>`;
    txt2 += `</div>`;
    return txt2;
  }