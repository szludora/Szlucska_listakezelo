export function rendez(lista, kulcs, irany=1) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    } 
    ertek*=irany
    return ertek
  });
}
