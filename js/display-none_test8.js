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
    
    let elementPop1 = document.getElementById("popup1");
    let elementPop2 = document.getElementById("popup2");
    let elementPop3 = document.getElementById("popup3");
    let elementPop4 = document.getElementById("popup4");
    
    let elementInfo1 = document.getElementById("info1");
    let elementInfo2 = document.getElementById("info2");
    let elementInfo3 = document.getElementById("info3");
    let elementInfo4 = document.getElementById("info4");
    let elementInfo5a = document.getElementById("info5-1");
    let elementInfo5b = document.getElementById("info5-2");
    
    let elementEx4 = document.getElementById("ex4");
    let elementEx5a = document.getElementById("ex5-1");
    let elementEx5b = document.getElementById("ex5-2");
    
    let elementWrap1 = document.getElementById("wrap");
    let elementWrap2 = document.getElementById("wrap_secondary");
    

    switch (page) {
        case 1:

            elementNav1.style.display = 'block';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'none';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'none';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'block';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.display = 'block';
            elementPanel2.style.display = 'none';
            elementPanel3.style.display = 'none';
            elementPanel4.style.display = 'none';
            
            elementPop1.style.display = 'block';
            elementPop2.style.display = 'none';
            elementPop3.style.display = 'none';
            elementPop4.style.display = 'none';
            
            elementInfo1.style.display = 'block';
            elementInfo2.style.display = 'none';
            elementInfo3.style.display = 'none';
            elementInfo4.style.display = 'none';
            elementInfo5a.style.display = 'none';
            elementInfo5b.style.display = 'none';
            break;

        case 2:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'block';
            elementNav3.style.display = 'none';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'none';
            elementNav32.style.display = 'block';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.display = 'none';
            elementPanel2.style.display = 'block';
            elementPanel3.style.display = 'none';
            elementPanel4.style.display = 'none';
            
            elementPop1.style.display = 'none';
            elementPop2.style.display = 'block';
            elementPop3.style.display = 'none';
            elementPop4.style.display = 'none';
            
            elementInfo1.style.display = 'none';
            elementInfo2.style.display = 'block';
            elementInfo3.style.display = 'none';
            elementInfo4.style.display = 'none';
            elementInfo5a.style.display = 'none';
            elementInfo5b.style.display = 'none';
            break;

        case 3:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'block';
            
            elementPanel1.style.display = 'none';
            elementPanel2.style.display = 'none';
            elementPanel3.style.display = 'block';
            elementPanel4.style.display = 'none';
            
            elementPop1.style.display = 'none';
            elementPop2.style.display = 'none';
            elementPop3.style.display = 'block';
            elementPop4.style.display = 'none';
            
            elementInfo1.style.display = 'none';
            elementInfo2.style.display = 'none';
            elementInfo3.style.display = 'block';
            elementInfo4.style.display = 'none';
            elementInfo5a.style.display = 'none';
            elementInfo5b.style.display = 'none';
            break;


        case 4:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'block';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.display = 'none';
            elementPanel2.style.display = 'none';
            elementPanel3.style.display = 'none';
            elementPanel4.style.display = 'block';
            
            elementPop1.style.display = 'none';
            elementPop2.style.display = 'none';
            elementPop3.style.display = 'none';
            elementPop4.style.display = 'block';
            
            elementInfo1.style.display = 'none';
            elementInfo2.style.display = 'none';
            elementInfo3.style.display = 'none';
            elementInfo4.style.display = 'block';
            elementInfo5a.style.display = 'none';
            elementInfo5b.style.display = 'none';
            break;
            
            
        case 5:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'block';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'none';

            elementPanel1.style.display = 'none';
            elementPanel2.style.display = 'none';
            elementPanel3.style.display = 'none';
            elementPanel4.style.display = 'block';

            elementPop1.style.display = 'none';
            elementPop2.style.display = 'none';
            elementPop3.style.display = 'none';
            elementPop4.style.display = 'block';

            elementInfo1.style.display = 'none';
            elementInfo2.style.display = 'none';
            elementInfo3.style.display = 'none';
            elementInfo4.style.display = 'none';
            elementInfo5a.style.display = 'block';
            elementInfo5b.style.display = 'none';
            
            elementEx4.style.display = 'none';
            elementEx5a.style.display = 'block';
            elementEx5b.style.display = 'none';
            break;
            
            
        case 6:
            
            elementEx5a.style.display = 'none';

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
      
            break;
            
            
        case 7:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
            
            elementNav5.style.display = 'block';
            elementNav6.style.display = 'none';

            elementNav52.style.display = 'none';
            elementNav62.style.display = 'block';

            break;
            
            
        case 8:

            elementEx5a.style.display = 'none';

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
            
            elementNav5.style.display = 'none';
            elementNav6.style.display = 'block';

            elementNav52.style.display = 'block';
            elementNav62.style.display = 'none';

            break;


    }


};
