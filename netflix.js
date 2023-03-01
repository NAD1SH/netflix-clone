$(document).ready(function(){
    var increase_deg = 45;
    $("#fst-que").click(function(){
        $("#fst-que-ans").slideToggle("fast");
        $("#fst-plus-icon").css({
            "webkitTransform" : "rotate(" + increase_deg + "deg)" 
        })
        increase_deg += 45;
    });
    var scnd_increase_deg = 45
    $("#scnd-que").click(function(){
        $("#scnd-que-ans").slideToggle("fast");
        $("#scnd-plus-icon").css({
            "webkitTransform" : "rotate(" + scnd_increase_deg + "deg)" 
        })
        scnd_increase_deg += 45;
    });
    var thrd_increase_deg = 45;
    $("#thrd-que").click(function(){
        $("#thrd-ans").slideToggle("fast");
        $("#thrd-plus-icon").css({
            "webkitTransform" : "rotate(" + thrd_increase_deg + "deg)" 
        })
        thrd_increase_deg += 45;
    });
    var frth_increase_deg = 45;
    $("#frth-que").click(function(){
        $("#frth-ans").slideToggle("fast");
        $("#frth-que-icon").css({
            "webkitTransform" : "rotate(" + frth_increase_deg + "deg)" 
        })
        frth_increase_deg += 45;
    });
    var fith_increase_deg = 45;
    $("#fith-que").click(function(){
        $("#fith-que-qns").slideToggle("fast");
        $("#fith-plus-icon").css({
            "webkitTransform" : "rotate(" + fith_increase_deg + "deg)" 
        })
        fith_increase_deg += 45;
    });
    var sixth_increase_deg = 45;
    $("#sixth-que").click(function(){
        $("#sixt-que-ans").slideToggle("fast");
        $("#sixth-plus-icon").css({
            "webkitTransform" : "rotate(" + sixth_increase_deg + "deg)" 
        })
        sixth_increase_deg += 45;
    });
});
