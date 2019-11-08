$(function(){
 
    //グローバルナビ（メインメニュー）クリック時
    $("ul.dropdownMenu li").click(function(event){
       if ($('ul:first',this).css('visibility') == "hidden") {
          $('ul:first',this).css('visibility', 'visible');
       } else {
          $('ul:first',this).css('visibility', 'hidden');
          
       }
       
        
       event.stopPropagation()
    });
 
    //サブメニュークリック時
    $("ul.dropdownSubMenu li").click(function(event){
       event.stopPropagation()
    });
 
    //ウインドウクリック時
    $(window).click(function(){
     
       $("ul.dropdownMenu li ul").each(function(){
           if ($(this).css('visibility') == 'visible') {
              $(this).css('visibility','hidden');
           }
       });
    });
 
   
 
});