function SelectPage(page) {
    /*
        各ページのエレメントを取得
    */
    var elementPage1 = document.getElementById("page1");
    var elementPage2 = document.getElementById("page2");
    var elementPage3 = document.getElementById("page3");

    var elementNav1 = document.getElementById("nav1");
    var elementNav2 = document.getElementById("nav2");
    var elementNav3 = document.getElementById("nav3");

    var elementNav1_2 = document.getElementById("nav1-2");
    var elementNav2_2 = document.getElementById("nav2-2");
    var elementNav3_2 = document.getElementById("nav3-2");

    switch (page) {
        case 1:
            elementPage1.style.display = 'block';
            elementPage2.style.display = 'none';
            elementPage3.style.display = 'none';
            elementNav1.style.display = 'block';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'none';
            elementNav1_2.style.display = 'none';
            elementNav2_2.style.display = 'block';
            elementNav3_2.style.display = 'block';
            break;

        case 2:
            elementPage1.style.display = 'none';
            elementPage2.style.display = 'block';
            elementPage3.style.display = 'none';
            elementNav1.style.display = 'none';
            elementNav2.style.display = 'block';
            elementNav3.style.display = 'none';
            elementNav1_2.style.display = 'block';
            elementNav2_2.style.display = 'none';
            elementNav3_2.style.display = 'block';
            break;

        case 3:
            elementPage1.style.display = 'none';
            elementPage2.style.display = 'none';
            elementPage3.style.display = 'block';
            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav1_2.style.display = 'block';
            elementNav2_2.style.display = 'block';
            elementNav3_2.style.display = 'none';
            break;


    }


};
