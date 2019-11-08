function SelectPage(page) {
    /*
        各ページのエレメントを取得
    */


    var elementNav1 = document.getElementById("nav1");
    var elementNav2 = document.getElementById("nav2");
    var elementNav3 = document.getElementById("nav3");
    var elementNav1_2 = document.getElementById("nav1-2");
    var elementNav2_2 = document.getElementById("nav2-2");
    var elementNav3_2 = document.getElementById("nav3-2");

    switch (page) {
        case 1:

            elementNav1.style.display = 'block';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'none';
            elementNav1_2.style.display = 'none';
            elementNav2_2.style.display = 'block';
            elementNav3_2.style.display = 'block';
            break;

        case 2:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'block';
            elementNav3.style.display = 'none';
            elementNav1_2.style.display = 'block';
            elementNav2_2.style.display = 'none';
            elementNav3_2.style.display = 'block';
            break;

        case 3:

            elementNav1.style.display = 'none';
            elementNav2.style.display = 'none';
            elementNav3.style.display = 'block';
            elementNav1_2.style.display = 'block';
            elementNav2_2.style.display = 'block';
            elementNav3_2.style.display = 'none';
            break;


    }


};
