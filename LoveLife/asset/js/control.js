function menuOpen(){
    var menuBtn=document.getElementById("_i1"),
    body=document.getElementById("_mains"),
    table=document.getElementById("_table1"),
    gallery=document.getElementById("_gallery");

    if(menuBtn.classList.contains("on")){
        menuBtn.classList.remove("on");
        body.classList.remove("hide");
        table.classList.remove("hide");
        gallery.classList.add("hide");
        gallery.innerHTML=" ";
    }
    else{
        menuBtn.classList.add("on");
        body.classList.add("hide");
        table.classList.add("hide");
        gallery.classList.remove("hide");

        gallery.innerHTML=
        "<div class='aui-slide-list'>"
        +"<ul class='aui-slide-item-list'>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t10.jpg' id='i1'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t11.jpg' id='i2'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t9.jpg' id='i9'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t3.jpg' id='i3'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t4.jpg' id='i4'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t5.jpg' id='i5'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t8.jpg' id='i7'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t7.jpg' alt='img-1' id='i8'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/meet1/t6.jpg' id='i6'></a></li></ul>"
        +"<!-- <div class='clearfix'></div> -->"
        +"<ul class='aui-slide-item-list'>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956117.jpg' id='i10'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956122.jpg' id='i11'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956131.jpg' id='i12'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956157.jpg' id='i13'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956175.jpg' id='i14'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956179.jpg' id='i15'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956186.jpg' id='i16'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/1640377956149.jpg' id='i17'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/t2.jpg' id='i18'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/t1.jpg' id='i19'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/t13.jpg' id='i20'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/t14.jpg' id='i21'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/date1/t15.jpg' id='i22'></a></li></ul>"
        +"<ul class='aui-slide-item-list'>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956134.jpg' id='i23'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956138.jpg' id='i24'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956142.jpg' id='i25'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956209.jpg' id='i26'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956222.jpg' id='i27'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956226.jpg' id='i28'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956233.jpg' id='i29'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956240.jpg' id='i30'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956251.jpg' id='i31'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956255.jpg' id='i32'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956258.jpg' id='i33'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/1640377956262.jpg' id='i34'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/m1.jpg' id='i35'></a></li>"
        +"<li class='aui-slide-item-item'><a href='javascript:void(0)' class='aui-link'><img src='asset/media/img/cam1/m2.jpg' id='i36'></a></li></ul></div>";
    }
}

