/*jslint browser: true*/
/*global $, jQuery, alert*/
function SelectPage(a) {
    "use strict";
    var elementNav1 = document.getElementById("nav1"),
        elementNav2 = document.getElementById("nav2"),
        elementNav3 = document.getElementById("nav3"),
        elementNav4 = document.getElementById("nav4"),
        elementNav5 = document.getElementById("nav5"),
        elementNav6 = document.getElementById("nav6"),
        elementNav7 = document.getElementById("nav7"),
        elementNav8 = document.getElementById("nav8"),
        elementNav12 = document.getElementById("nav1-2"),
        elementNav22 = document.getElementById("nav2-2"),
        elementNav32 = document.getElementById("nav3-2"),
        elementNav42 = document.getElementById("nav4-2"),
        elementNav52 = document.getElementById("nav5-2"),
        elementNav62 = document.getElementById("nav6-2"),
        elementNav72 = document.getElementById("nav7-2"),
        elementNav82 = document.getElementById("nav8-2"),
        elementPanel1 = document.getElementById("panel1"),
        elementPanel2 = document.getElementById("panel2"),
        elementPanel3 = document.getElementById("panel3"),
        elementPanel4 = document.getElementById("panel4"),
        elementPanel6a = document.getElementById("panel6"),
        elementPanel6b = document.getElementById("panel6-2"),
        elementPanel6c = document.getElementById("panel6-3"),
        elementPanel7 = document.getElementById("panel7"),
        elementPanel8 = document.getElementById("panel8"),
        elementPop1 = document.getElementById("popup1"),
        elementPop2 = document.getElementById("popup2"),
        elementPop3 = document.getElementById("popup3"),
        elementPop4 = document.getElementById("popup4"),
        elementInfo1 = document.getElementById("info1"),
        elementInfo2 = document.getElementById("info2"),
        elementInfo3 = document.getElementById("info3"),
        elementInfo4 = document.getElementById("info4"),
        elementInfo5a = document.getElementById("info5-1"),
        elementInfo5b = document.getElementById("info5-2"),
        elementInfo6 = document.getElementById("info6"),
        elementInfo7 = document.getElementById("info7"),
        elementInfo8 = document.getElementById("info8"),
        elementEx4 = document.getElementById("ex4"),
        elementEx5 = document.getElementById("ex5"),
        elementWrap1 = document.getElementById("wrap"),
        elementWrap2 = document.getElementById("wrap_secondary"),
        beforeDrug = document.getElementById("before"),
        afterDrug = document.getElementById("after"),
        drugStatusBefore = document.getElementById("drug_before"),
        drugStatusAfter = document.getElementById("drug_after"),
        medicine = document.getElementById("medicine"),
        elementVideo6 = document.getElementById("video6"),
        elementVideo7 = document.getElementById("video7"),
        elementButton1 = document.getElementById("button1"),
        elementPrimary = document.getElementById("primary"),
        elementSub = document.getElementById("sub"),
        elementButton2 = document.getElementById("button2"),
        elementAction4a = document.getElementById("action4"),
        elementAction4b = document.getElementById("action4-2"),
        elementVideo4a = document.getElementById("video4"),
        elementVideo4b = document.getElementById("video4-2");
    switch (a) {
    case 1:
        elementWrap1.style.display = "block";
        elementWrap2.style.display = "none";
        elementNav1.style.display = "block";
        elementNav2.style.display = "none";
        elementNav3.style.display = "none";
        elementNav4.style.display = "none";
        elementNav12.style.display = "none";
        elementNav22.style.display = "block";
        elementNav32.style.display = "block";
        elementNav42.style.display = "none";
        elementPanel1.style.visibility = "visible";
        elementPanel2.style.visibility = "hidden";
        elementPanel3.style.visibility = "hidden";
        elementPanel4.style.visibility = "hidden";
        elementPanel1.style.opacity = "1";
        elementPanel2.style.opacity = "0";
        elementPanel3.style.opacity = "0";
        elementPanel4.style.opacity = "0";
        elementPop1.style.display = "block";
        elementPop2.style.display = "none";
        elementPop3.style.display = "none";
        elementPop4.style.display = "none";
        elementInfo1.style.display = "block";
        elementInfo2.style.display = "none";
        elementInfo3.style.display = "none";
        elementInfo4.style.display = "none";
        elementInfo5a.style.display = "none";
        elementInfo5b.style.display = "none";
        elementPrimary.style.display = "block";
        elementSub.style.display = "none";
        elementButton1.style.display = "block";
        $(".drawer").drawer();
        break;
    case 2:
        elementWrap1.style.display = "block";
        elementWrap2.style.display = "none";
        elementNav1.style.display = "none";
        elementNav2.style.display = "block";
        elementNav3.style.display = "none";
        elementNav4.style.display = "none";
        elementNav12.style.display = "block";
        elementNav22.style.display = "none";
        elementNav32.style.display = "block";
        elementNav42.style.display = "none";
        elementPanel1.style.visibility = "hidden";
        elementPanel2.style.visibility = "visible";
        elementPanel3.style.visibility = "hidden";
        elementPanel4.style.visibility = "hidden";
        elementPanel1.style.opacity = "0";
        elementPanel2.style.opacity = "1";
        elementPanel3.style.opacity = "0";
        elementPanel4.style.opacity = "0";
        elementPop1.style.display = "none";
        elementPop2.style.display = "block";
        elementPop3.style.display = "none";
        elementPop4.style.display = "none";
        elementInfo1.style.display = "none";
        elementInfo2.style.display = "block";
        elementInfo3.style.display = "none";
        elementInfo4.style.display = "none";
        elementInfo5a.style.display = "none";
        elementInfo5b.style.display = "none";
        $(".drawer").drawer();
        break;
    case 3:
        elementWrap1.style.display = "block";
        elementWrap2.style.display = "none";
        elementNav1.style.display = "none";
        elementNav2.style.display = "none";
        elementNav3.style.display = "block";
        elementNav4.style.display = "none";
        elementNav12.style.display = "block";
        elementNav22.style.display = "block";
        elementNav32.style.display = "none";
        elementNav42.style.display = "block";
        elementPanel1.style.visibility = "hidden";
        elementPanel2.style.visibility = "hidden";
        elementPanel3.style.visibility = "visible";
        elementPanel4.style.visibility = "hidden";
        elementPanel1.style.opacity = "0";
        elementPanel2.style.opacity = "0";
        elementPanel3.style.opacity = "1";
        elementPanel4.style.opacity = "0";
        elementPop1.style.display = "none";
        elementPop2.style.display = "none";
        elementPop3.style.display = "block";
        elementPop4.style.display = "none";
        elementInfo1.style.display = "none";
        elementInfo2.style.display = "none";
        elementInfo3.style.display = "block";
        elementInfo4.style.display = "none";
        elementInfo5a.style.display = "none";
        elementInfo5b.style.display = "none";
        $(".drawer").drawer();
        break;
    case 4:
        elementWrap1.style.display = "block";
        elementWrap2.style.display = "none";
        elementNav1.style.display = "none";
        elementNav2.style.display = "none";
        elementNav3.style.display = "block";
        elementNav4.style.display = "block";
        elementNav12.style.display = "block";
        elementNav22.style.display = "block";
        elementNav32.style.display = "none";
        elementNav42.style.display = "none";
        elementPanel1.style.visibility = "hidden";
        elementPanel2.style.visibility = "hidden";
        elementPanel3.style.visibility = "hidden";
        elementPanel4.style.visibility = "visible";
        elementPanel1.style.opacity = "0";
        elementPanel2.style.opacity = "0";
        elementPanel3.style.opacity = "0";
        elementPanel4.style.opacity = "1";
        elementPop1.style.display = "none";
        elementPop2.style.display = "none";
        elementPop3.style.display = "none";
        elementPop4.style.display = "block";
        elementInfo1.style.display = "none";
        elementInfo2.style.display = "none";
        elementInfo3.style.display = "none";
        elementInfo4.style.display = "block";
        elementInfo5a.style.display = "none";
        elementInfo5b.style.display = "none";
        elementAction4a.style.display = "block";
        elementAction4b.style.display = "none";
        elementVideo4a.style.display = "block";
        elementVideo4b.style.display = "none";
        elementButton2.style.display = "block";
        (".drawer").drawer();
        break;
    case 5:
        elementWrap1.style.display = "block";
        elementWrap2.style.display = "none";
        elementNav1.style.display = "none";
        elementNav2.style.display = "none";
        elementNav3.style.display = "block";
        elementNav4.style.display = "block";
        elementNav12.style.display = "block";
        elementNav22.style.display = "block";
        elementNav32.style.display = "none";
        elementNav42.style.display = "none";
        elementPanel1.style.visibility = "hidden";
        elementPanel2.style.visibility = "hidden";
        elementPanel3.style.visibility = "hidden";
        elementPanel4.style.visibility = "visible";
        elementPanel1.style.opacity = "0";
        elementPanel2.style.opacity = "0";
        elementPanel3.style.opacity = "0";
        elementPanel4.style.opacity = "1";
        elementPop1.style.display = "none";
        elementPop2.style.display = "none";
        elementPop3.style.display = "none";
        elementPop4.style.display = "block";
        elementInfo1.style.display = "none";
        elementInfo2.style.display = "none";
        elementInfo3.style.display = "none";
        elementInfo4.style.display = "none";
        elementInfo5a.style.display = "block";
        elementInfo5b.style.display = "none";
        elementEx4.style.display = "none";
        elementEx5.style.display = "block";
        break;
    case 6:
        elementWrap1.style.display = "none";
        elementWrap2.style.display = "block";
        elementNav7.style.display = "block";
        elementNav8.style.display = "none";
        elementNav72.style.display = "none";
        elementNav82.style.display = "block";
        beforeDrug.style.display = "block";
        afterDrug.style.display = "none";
        medicine.style.display = "block";
        elementInfo5a.style.display = "block";
        elementInfo5b.style.display = "none";
        break;
    case 7:
        elementWrap1.style.display = "none";
        elementWrap2.style.display = "block";
        elementNav5.style.display = "block";
        elementNav6.style.display = "none";
        elementNav52.style.display = "none";
        elementNav62.style.display = "block";
        elementPanel6a.style.display = "block";
        elementPanel6b.style.display = "none";
        elementPanel6c.style.display = "none";
        elementPanel8.style.display = "none";
        elementInfo6.style.display = "block";
        elementInfo7.style.display = "none";
        elementInfo8.style.display = "none";
        break;
    case 8:
        elementWrap1.style.display = "none";
        elementWrap2.style.display = "block";
        elementNav5.style.display = "none";
        elementNav6.style.display = "block";
        elementNav52.style.display = "block";
        elementNav62.style.display = "none";
        elementPanel6a.style.display = "none";
        elementPanel6b.style.display = "none";
        elementPanel6c.style.display = "none";
        elementPanel8.style.display = "block";
        elementInfo6.style.display = "none";
        elementInfo7.style.display = "none";
        elementInfo8.style.display = "block";
        break;
    case 9:
        elementNav7.style.display = "block";
        elementNav8.style.display = "none";
        elementNav72.style.display = "none";
        elementNav82.style.display = "block";
        beforeDrug.style.display = "block";
        afterDrug.style.display = "none";
        medicine.style.display = "none";
        elementInfo5a.style.display = "block";
        elementInfo5b.style.display = "none";
        break;
    case 10:
        elementNav7.style.display = "none";
        elementNav8.style.display = "block";
        elementNav72.style.display = "block";
        elementNav82.style.display = "none";
        beforeDrug.style.display = "none";
        afterDrug.style.display = "block";
        elementInfo5a.style.display = "none";
        elementInfo5b.style.display = "block";
        break;
    case 11:
        elementWrap1.style.display = "none";
        elementWrap2.style.display = "block";
        elementNav5.style.display = "block";
        elementNav6.style.display = "none";
        elementNav52.style.display = "none";
        elementNav62.style.display = "block";
        elementPanel6a.style.display = "none";
        elementPanel6b.style.display = "block";
        elementPanel6c.style.display = "none";
        elementPanel8.style.display = "none";
        elementInfo6.style.display = "block";
        elementInfo7.style.display = "none";
        elementInfo8.style.display = "none";
        break;
    case 12:
        elementWrap1.style.display = "none";
        elementWrap2.style.display = "block";
        elementNav5.style.display = "block";
        elementNav6.style.display = "none";
        elementNav52.style.display = "none";
        elementNav62.style.display = "block";
        elementPanel6a.style.display = "none";
        elementPanel6b.style.display = "none";
        elementPanel6c.style.display = "block";
        elementPanel8.style.display = "none";
        elementInfo6.style.display = "block";
        elementInfo7.style.display = "none";
        elementInfo8.style.display = "none";
        break;
    case 13:
        elementPrimary.style.display = "none";
        elementSub.style.display = "block";
        elementButton1.style.display = "none";
        break;
    case 14:
        elementAction4a.style.display = "none";
        elementAction4b.style.display = "block";
        elementVideo4a.style.display = "none";
        elementVideo4b.style.display = "block";
        elementButton2.style.display = "none";
        break;
    }
}
/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/

var addEvent = (function () {
    "use strict";
    if (document.addEventListener) {
        return function (d, c, b) {
            if ((d && d.nodeName) || d === window) {
                d.addEventListener(c, b, false);
            } else {
                if (d && d.length) {
                    var a = 0;
                    for (a < d.length; a++) {
                        addEvent(d[a], c, b)
                    }
                }
            }
        }
    } else {
        return function (d, c, b) {
            if (d && d.nodeName || d === window) {
                d.attachEvent("on" + c, function () {
                    return b.call(d, window.event)
                })
            } else {
                if (d && d.length) {
                    for (var a = 0; a < d.length; a++) {
                        addEvent(d[a], c, b)
                    }
                }
            }
        }
    }
})();
(function () {
    var a = document.createElement("pre");
    a.id = "view-source";
    addEvent(window, "click", function (b) {
        if (b.target.hash == "#view-source") {
            if (!document.getElementById("view-source")) {
                var d = new XMLHttpRequest();
                d.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        a.innerHTML = this.responseText.replace(/[<>]/g, function (e) {
                            return {
                                "<": "&lt;",
                                ">": "&gt;"
                            } [e]
                        });
                        prettyPrint()
                    }
                };
                document.body.appendChild(a);
                d.open("GET", window.location, true);
                d.send()
            }
            document.body.className = "view-source";
            var c = setInterval(function () {
                if (window.location.hash != "#view-source") {
                    clearInterval(c);
                    document.body.className = ""
                }
            }, 200)
        }
    })
})();