function SelectPage(page) {
/*
各ページのエレメントを取得
*/


let elementNav1 = document.getElementById("nav1");
let elementNav2 = document.getElementById("nav2");
let elementNav3 = document.getElementById("nav3");
let elementNav4 = document.getElementById("nav4");
let elementNav5 = document.getElementById("nav5");
let elementNav6 = document.getElementById("nav6");
let elementNav12 = document.getElementById("nav1-2");
let elementNav22 = document.getElementById("nav2-2");
let elementNav32 = document.getElementById("nav3-2");
let elementNav42 = document.getElementById("nav4-2");
let elementNav52 = document.getElementById("nav5-2");
let elementNav62 = document.getElementById("nav6-2");

let elementPanel1 = document.getElementById("panel1");
let elementPanel2 = document.getElementById("panel2");
let elementPanel3 = document.getElementById("panel3");
let elementPanel4 = document.getElementById("panel4");
let elementPanel6 = document.getElementById("panel6");
let elementPanel7 = document.getElementById("panel7");
let elementPanel8 = document.getElementById("panel8");






switch (page) {
case 1:



elementNav1.style.display = 'block';
elementNav2.style.display = 'none';


elementNav12.style.display = 'none';
elementNav22.style.display = 'block';




break;

case 2:


elementNav1.style.display = 'none';
elementNav2.style.display = 'block';


elementNav12.style.display = 'block';
elementNav22.style.display = 'none';



break;

}


};
