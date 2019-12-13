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
    let elementNav7 = document.getElementById("nav7");
    let elementNav8 = document.getElementById("nav8");
    let elementNav12 = document.getElementById("nav1-2");
    let elementNav22 = document.getElementById("nav2-2");
    let elementNav32 = document.getElementById("nav3-2");
    let elementNav42 = document.getElementById("nav4-2");
    let elementNav52 = document.getElementById("nav5-2");
    let elementNav62 = document.getElementById("nav6-2");
    let elementNav72 = document.getElementById("nav7-2");
    let elementNav82 = document.getElementById("nav8-2");
    
    let elementPanel1 = document.getElementById("panel1");
    let elementPanel2 = document.getElementById("panel2");
    let elementPanel3 = document.getElementById("panel3");
    let elementPanel4 = document.getElementById("panel4");
    let elementPanel6a = document.getElementById("panel6");
    let elementPanel6b = document.getElementById("panel6-2");
    let elementPanel6c = document.getElementById("panel6-3");
    let elementPanel7 = document.getElementById("panel7");
    let elementPanel8 = document.getElementById("panel8");
    
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
    let elementInfo6 = document.getElementById("info6");
    let elementInfo7 = document.getElementById("info7");
    let elementInfo8 = document.getElementById("info8");
    
    let elementEx4 = document.getElementById("ex4");
    let elementEx5 = document.getElementById("ex5");
    
    let elementWrap1 = document.getElementById("wrap");
    let elementWrap2 = document.getElementById("wrap_secondary");
    
    let beforeDrug = document.getElementById('before');
    let afterDrug = document.getElementById('after');
    let drugStatusBefore = document.getElementById('drug_before');
    let drugStatusAfter = document.getElementById('drug_after');
    let medicine = document.getElementById('medicine');

    let elementVideo6 = document.getElementById("video6");
    let elementVideo7 = document.getElementById("video7");
    
    let elementButton1 = document.getElementById("button1");
    let elementPrimary = document.getElementById("primary");
    let elementSub = document.getElementById("sub");
    
    let elementButton2 = document.getElementById("button2");
    let elementButton2b = document.getElementById("button2-2");
    let elementAction4a = document.getElementById("action4");
    let elementAction4b = document.getElementById("action4-2");
    let elementVideo4a = document.getElementById("video4");
    let elementVideo4b = document.getElementById("video4-2");
    

    switch (page) {
        case 1:
            
            elementWrap1.style.display = 'block';
            elementWrap2.style.display = 'none';

            elementNav1.style.display = 'block';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'none';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'none';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'block';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.visibility = 'visible';
            elementPanel2.style.visibility = 'hidden';
            elementPanel3.style.visibility = 'hidden';
            elementPanel4.style.visibility = 'hidden';
            elementPanel1.style.opacity = '1';
            elementPanel2.style.opacity = '0';
            elementPanel3.style.opacity = '0';
            elementPanel4.style.opacity = '0';

            
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
            
            elementPrimary.style.display = 'block';
            elementSub.style.display = 'none';
            elementButton1.style.display = 'block';
            
            $('.drawer').drawer();
            
            break;

        case 2:
            
            elementWrap1.style.display = 'block';
            elementWrap2.style.display = 'none';

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'block';
            elementNav3.style.display = 'none';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'none';
            elementNav32.style.display = 'block';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.visibility = 'hidden';
            elementPanel2.style.visibility = 'visible';
            elementPanel3.style.visibility = 'hidden';
            elementPanel4.style.visibility = 'hidden';
            elementPanel1.style.opacity = '0';
            elementPanel2.style.opacity = '1';
            elementPanel3.style.opacity = '0';
            elementPanel4.style.opacity = '0';
            
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
            
            $('.drawer').drawer();
            
            break;

        case 3:
            
            elementWrap1.style.display = 'block';
            elementWrap2.style.display = 'none';

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'none';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'block';
            
            elementPanel1.style.visibility = 'hidden';
            elementPanel2.style.visibility = 'hidden';
            elementPanel3.style.visibility = 'visible';
            elementPanel4.style.visibility = 'hidden';
            elementPanel1.style.opacity = '0';
            elementPanel2.style.opacity = '0';
            elementPanel3.style.opacity = '1';
            elementPanel4.style.opacity = '0';
            
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
            
            $('.drawer').drawer();
            
            break;


        case 4:
            
            elementWrap1.style.display = 'block';
            elementWrap2.style.display = 'none';

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'block';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'none';
            
            elementPanel1.style.visibility = 'hidden';
            elementPanel2.style.visibility = 'hidden';
            elementPanel3.style.visibility = 'hidden';
            elementPanel4.style.visibility = 'visible';
            elementPanel1.style.opacity = '0';
            elementPanel2.style.opacity = '0';
            elementPanel3.style.opacity = '0';
            elementPanel4.style.opacity = '1';
            
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
            
           // elementAction4a.style.display = 'block';
           // elementAction4b.style.display = 'none';
            elementVideo4a.style.display = 'block';
            elementVideo4b.style.display = 'none';
            elementButton2.style.display = 'block';
            
            $('.drawer').drawer();
            
            break;
            
            
        case 5:
            
            elementWrap1.style.display = 'block';
            elementWrap2.style.display = 'none';

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav4.style.display = 'block';

            elementNav12.style.display = 'block';
            elementNav22.style.display = 'block';
            elementNav32.style.display = 'none';
            elementNav42.style.display = 'none';

            elementPanel1.style.visibility = 'hidden';
            elementPanel2.style.visibility = 'hidden';
            elementPanel3.style.visibility = 'hidden';
            elementPanel4.style.visibility = 'visible';
            elementPanel1.style.opacity = '0';
            elementPanel2.style.opacity = '0';
            elementPanel3.style.opacity = '0';
            elementPanel4.style.opacity = '1';

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
            elementEx5.style.display = 'block';
            
            break;
            
            
        case 6:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
            
            elementNav7.style.display = 'block';
            elementNav8.style.display = 'none';
            elementNav72.style.display = 'none';
            elementNav82.style.display = 'block';
            
            beforeDrug.style.display = 'block';
            afterDrug.style.display = 'none';
           
            medicine.style.display = 'block';
            elementInfo5a.style.display = 'block';
            elementInfo5b.style.display = 'none';
      
            break;
            
            
        case 7:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
            
            elementNav5.style.display = 'block';
            elementNav6.style.display = 'none';

            elementNav52.style.display = 'none';
            elementNav62.style.display = 'block';
            
            elementPanel6a.style.display = 'block';
            elementPanel6b.style.display = 'none';
            elementPanel6c.style.display = 'none';
            elementPanel8.style.display = 'none';
            
            elementInfo6.style.display = 'block';
            elementInfo7.style.display = 'none';
            elementInfo8.style.display = 'none';

            break;
            
            
        case 8:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';
            
            elementNav5.style.display = 'none';
            elementNav6.style.display = 'block';

            elementNav52.style.display = 'block';
            elementNav62.style.display = 'none';
            
            elementPanel6a.style.display = 'none';
            elementPanel6b.style.display = 'none';
            elementPanel6c.style.display = 'none';
            elementPanel8.style.display = 'block';
            
            elementInfo6.style.display = 'none';
            elementInfo7.style.display = 'none';
            elementInfo8.style.display = 'block';

            break;
            
            
        case 9:

            elementNav7.style.display = 'block';
            elementNav8.style.display = 'none';
            elementNav72.style.display = 'none';
            elementNav82.style.display = 'block';
            
            beforeDrug.style.display = 'block';
            afterDrug.style.display = 'none';
            
            medicine.style.display = 'none';
            elementInfo5a.style.display = 'block';
            elementInfo5b.style.display = 'none';

            break;
            
        case 10:
            
            elementNav7.style.display = 'none';
            elementNav8.style.display = 'block';
            elementNav72.style.display = 'block';
            elementNav82.style.display = 'none';
            
            beforeDrug.style.display = 'none';
            afterDrug.style.display = 'block';
            
            elementInfo5a.style.display = 'none';
            elementInfo5b.style.display = 'block';
          
            break;
            
            
        case 11:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';

            elementNav5.style.display = 'block';
            elementNav6.style.display = 'none';

            elementNav52.style.display = 'none';
            elementNav62.style.display = 'block';

            elementPanel6a.style.display = 'none';
            elementPanel6b.style.display = 'block';
            elementPanel6c.style.display = 'none';
            elementPanel8.style.display = 'none';

            elementInfo6.style.display = 'block';
            elementInfo7.style.display = 'none';
            elementInfo8.style.display = 'none';

            break;
            
        case 12:

            elementWrap1.style.display = 'none';
            elementWrap2.style.display = 'block';

            elementNav5.style.display = 'block';
            elementNav6.style.display = 'none';

            elementNav52.style.display = 'none';
            elementNav62.style.display = 'block';

            elementPanel6a.style.display = 'none';
            elementPanel6b.style.display = 'none';
            elementPanel6c.style.display = 'block';
            elementPanel8.style.display = 'none';

            elementInfo6.style.display = 'block';
            elementInfo7.style.display = 'none';
            elementInfo8.style.display = 'none';

            break;
            
        case 13:

            elementPrimary.style.display = 'none';
            elementSub.style.display = 'block';
            elementButton1.style.display = 'none';

            break;
            
        case 14:

          //  elementAction4a.style.display = 'none';
          //  elementAction4b.style.display = 'block';
            elementVideo4a.style.display = 'none';
            elementVideo4b.style.display = 'block';
          //  elementButton2.style.display = 'none';
            elementButton2b.style.display = 'none';

            break;

    }


};
