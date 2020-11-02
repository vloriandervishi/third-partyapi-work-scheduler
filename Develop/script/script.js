$(document).ready(function () {
    newFunction_11();

    
    const newLocal = $(".saveBtn").on("click", function () {
        onclickSaveBtnFunction();

    });


});
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var { dymedhete, thjete, nimdhete, twelvePm, dynaksham, trenaksham, katernaksham, pesnaksham, gjashtnaksham, shtatnaksham, nene } = newFunction_10();

var hour = moment().hours();
var txtInput;
var timeofDay;


const newLocal = setInterval(function () {
    var sotTash = moment();
    $('#currentDay').html(sotTash.format('YYYY MMMM DD') + ' '
        + sotTash.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDate + " " + sotTash.format('hh:mm:ss A'));
}, 100);
var interval = newLocal;

function newFunction_11() {
    startRendering();
    changeTxtColor();
}

function onclickSaveBtnFunction() {
    txtInput = $(this).siblings(".description").val().trim();
    console.log(txtInput);
    timeofDay = $(this).siblings(".hour").text().trim();
    console.log(timeofDay);
    localStorage.setItem(timeofDay, JSON.stringify(txtInput));
}

function newFunction_10() {
    var nene = $("#9am");
    var thjete = $("#10");
    var nimdhete = $("#11");
    var twelvePm = $("#12");
    var dymedhete = $("#13");
    var dynaksham = $("#14");
    var trenaksham = $("#15");
    var katernaksham = $("#16");
    var pesnaksham = $("#17");
    var gjashtnaksham = $("#18");
    var shtatnaksham = $("#19");
    return { dymedhete, thjete, nimdhete, twelvePm, dynaksham, trenaksham, katernaksham, pesnaksham, gjashtnaksham, shtatnaksham, nene };
}

function startRendering() {


    newFunction();

    newFunction_8();

    newFunction();

    newFunction_7();

    newFunction_9();

    newFunction_6();

    var delegatetotreshi = newFunction_5();

    var delegatetotreshi = newFunction_4();

    newFunction_3();

    newFunction_2();

    newFunction_1();

    function newFunction_9() {
        var delegatetenjishi = JSON.parse(localStorage.getItem("01:00 pm"));
        dymedhete.val(delegatetenjishi);
    }

    function newFunction_8() {
        var delegatetodhjete = JSON.parse(localStorage.getItem("10:00 am"));
        thjete.val(delegatetodhjete);
    }

    function newFunction() {
        var delegatenjembdhjete = JSON.parse(localStorage.getItem("11:00 am"));
        nimdhete.val(delegatenjembdhjete);
    }

    function newFunction_7() {
        var delegdymbdhjete = JSON.parse(localStorage.getItem("12:00 pm"));
        twelvePm.val(delegdymbdhjete);
    }

    function newFunction_6() {
        var delegatetedyshi = JSON.parse(localStorage.getItem("02:00 pm"));
        dynaksham.val(delegatetedyshi);
    }

    function newFunction_5() {
        var delegatetotreshi = JSON.parse(localStorage.getItem("03:00 pm"));
        trenaksham.val(delegatetotreshi);
        return delegatetotreshi;
    }

    function newFunction_4() {
        var delegatetotreshi = JSON.parse(localStorage.getItem("04:00 pm"));
        katernaksham.val(delegatetotreshi);
        return delegatetotreshi;
    }

    function newFunction_3() {
        var delegatetokatershi = JSON.parse(localStorage.getItem("05:00 pm"));
        pesnaksham.val(delegatetokatershi);
    }

    function newFunction_2() {
        var delegatetogjashtshi = JSON.parse(localStorage.getItem("06:00 pm"));
        gjashtnaksham.val(delegatetogjashtshi);
    }

    function newFunction_1() {
        var delegateteshtatshi = JSON.parse(localStorage.getItem("07:00 pm"));
        shtatnaksham.val(delegateteshtatshi);
    }

    function newFunction() {
        var delegatetonente = JSON.parse(localStorage.getItem("09:00 am"));
        nene.val(delegatetonente);
    }
}

function changeTxtColor() {

    newFunction();

    function newFunction() {
        $(".description").each(function () {
            var testClock = parseInt($(this).attr("id"));
            hour = parseInt(hour);
            console.log(testClock);
            console.log(hour);
            //      console.log(this);
            if (hour > testClock) {
                $(this).addClass("past");
            } else if (hour < testClock) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
        });
    }
}

