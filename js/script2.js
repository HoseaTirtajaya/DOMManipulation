//----------------------------------------------------------MANIPULASI NODE-------------------------------------------------
const pbaru = document.createElement("p"); //create element dengan value kosong
const teksPBaru = document.createTextNode("Paragraf dari JavaScript"); //create value tanpa element.
//simpan value ke element
pbaru.appendChild(teksPBaru);
//menentukan lokasi element baru
const sectionA = document.querySelector("Section#a");
sectionA.appendChild(pbaru);

const libaru = document.createElement("li");
const valuelibaru = document.createTextNode("Item dari JavaScript");

libaru.appendChild(valuelibaru);

const liplace = document.querySelector("section#b ul");
const libefore = liplace.querySelector("li:nth-child(3)");

liplace.insertBefore(libaru, libefore);

//parentNode remove
const a = sectionA.getElementsByTagName("a")[0];

sectionA.removeChild(a);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru Dari JavaScript");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
