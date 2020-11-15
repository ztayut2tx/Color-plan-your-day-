//Displays current date in Header
$(document).ready(function () {
    today = $("#rightNow");
    clock = moment().hour();

    today.text(moment().format('dddd, LL'));

    console.log (clock);

// Checks for previously stored data in the individual input boxes
    storedData9 = JSON.parse(localStorage.getItem("txtInput9"));
    if (storedData9 !== null) {
        $("#ToDo9").text(storedData9.text);
    }

    storedData10 = JSON.parse(localStorage.getItem("txtInput10"));
    if (storedData10 !== null) {
        $("#ToDo10").text(storedData10.text);
    }

    storedData11 = JSON.parse(localStorage.getItem("txtInput11"));
    if (storedData11 !== null) {
        $("#ToDo11").text(storedData11.text);
    }

    storedData12 = JSON.parse(localStorage.getItem("txtInput12"));
    if (storedData12 !== null) {
        $("#ToDo12").text(storedData12.text);
    }

    storedData13 = JSON.parse(localStorage.getItem("txtInput13"));
    if (storedData13 !== null) {
        $("#ToDo13").text(storedData13.text);
    }

    storedData14 = JSON.parse(localStorage.getItem("txtInput14"));
    if (storedData14 !== null) {
        $("#ToDo14").text(storedData14.text);
    }

    storedData15 = JSON.parse(localStorage.getItem("txtInput15"));
    if (storedData15 !== null) {
        $("#ToDo15").text(storedData15.text);
    }

    storedData16 = JSON.parse(localStorage.getItem("txtInput16"));
    if (storedData16 !== null) {
        $("#ToDo16").text(storedData16.text);
    }

    storedData17 = JSON.parse(localStorage.getItem("txtInput17"));
    if (storedData17 !== null) {
        $("#ToDo17").text(storedData17.text);
    }
//this determines if the entered event has happened, is happening or will happen and is programmed to change colors depending on those parameters.
    function ebenezer() {
        if (9 < clock) {
            $("#ToDo9").addClass("past").css('background-color','blue')
        }
        if (9 == clock) {
            $("#ToDo9").addClass("present").css('background-color','green')
        }
        if (9 > clock) {
            $("#ToDo9").addClass("future").css('background-color','red')
        }

        if (10 < clock) {
            $("#ToDo10").addClass("past").css('background-color','blue')
        }
        if (10 == clock) {
            $("#ToDo10").addClass("present").css('background-color','green')
        }
        if (10 > clock) {
            $("#ToDo10").addClass("future").css('background-color','red')
        }

        if (11 < clock) {
            $("#ToDo11").addClass("past").css('background-color','blue')
        }
        if (11 == clock) {
            $("#ToDo11").addClass("present").css('background-color','green')
        }
        if (11 > clock) {
            $("#ToDo11").addClass("future").css('background-color','red')
        }

        if (12 < clock) {
            $("#ToDo12").addClass("past").css('background-color','blue')
        }
        if (12 == clock) {
            $("#ToDo12").addClass("present").css('background-color','green')
        }
        if (12 > clock) {
            $("#ToDo12").addClass("future").css('background-color','red')
        }

        if (13 < clock) {
            $("#ToDo13").addClass("past").css('background-color','blue')
        }
        if (13 == clock) {
            $("#ToDo13").addClass("present").css('background-color','green')
        }
        if (13 > clock) {
            $("#ToDo13").addClass("future").css('background-color','red')
        }

        if (14 < clock) {
            $("#ToDo14").addClass("past").css('background-color','blue')
        }
        if (14 == clock) {
            $("#ToDo14").addClass("present").css('background-color','green')
        }
        if (14 > clock) {
            $("#ToDo14").addClass("future").css('background-color','red')
        }

        if (15 < clock) {
            $("#ToDo15").addClass("past").css('background-color','blue')
        }
        if (15 == clock) {
            $("#ToDo15").addClass("present").css('background-color','green')
        }
        if (15 > clock) {
            $("#ToDo15").addClass("future").css('background-color','red')
        }

        if (16 < clock) {
            $("#ToDo16").addClass("past").css('background-color','blue')
        }
        if (16 == clock) {
            $("#ToDo16").addClass("present").css('background-color','green')
        }
        if (16 > clock) {
            $("#ToDo16").addClass("future").css('background-color','red')
        }

        if (17 < clock) {
            $("#ToDo17").addClass("past").css('background-color','blue')
        }
        if (17 == clock) {
            $("#ToDo17").addClass("present").css('background-color','green')
        }
        if (17 > clock) {
            $("#ToDo17").addClass("future").css('background-color','red')
        }

    }

    ebenezer();
//this is all the on click function for each individual hour save button.
    $("#saveBtn9").on("click", function (event) {
        event.preventDefault();
        var txtInput9 = {
            text: document.querySelector("#ToDo9").value.trim()
        }
        localStorage.setItem("txtInput9", JSON.stringify(txtInput9));
    });

    $("#saveBtn10").on("click", function (event) {
        event.preventDefault();
        var txtInput10 = {
            text: document.querySelector("#ToDo10").value.trim()
        }
        localStorage.setItem("txtInput10", JSON.stringify(txtInput10));
    });

    $("#saveBtn11").on("click", function (event) {
        event.preventDefault();
        var txtInput11 = {
            text: document.querySelector("#ToDo11").value.trim()
        }
        localStorage.setItem("txtInput11", JSON.stringify(txtInput11));
    });

    $("#saveBtn12").on("click", function (event) {
        event.preventDefault();
        var txtInput12 = {
            text: document.querySelector("#ToDo12").value.trim()
        }
        localStorage.setItem("txtInput12", JSON.stringify(txtInput12));
    });

    $("#saveBtn13").on("click", function (event) {
        event.preventDefault();
        var txtInput13 = {
            text: document.querySelector("#ToDo13").value.trim()
        }
        localStorage.setItem("txtInput13", JSON.stringify(txtInput13));
    });

    $("#saveBtn14").on("click", function (event) {
        event.preventDefault();
        var txtInput14 = {
            txt: document.querySelector("#ToDo14").value.trim()
        }
        localStorage.setItem("txtInput14", JSON.stringify(txtInput14));
    });

    $("#saveBtn15").on("click", function (event) {
        event.preventDefault();
        var txtInput15 = {
            txt: document.querySelector("#ToDo15").value.trim()
        }
        localStorage.setItem("txtInput15", JSON.stringify(txtInput15));
    });

    $("#saveBtn16").on("click", function (event) {
        event.preventDefault();
        var txtInput16 = {
            txt: document.querySelector("#ToDo16").value.trim()
        }
        localStorage.setItem("txtInput16", JSON.stringify(txtInput16));
    });

    $("#saveBtn17").on("click", function (event) {
        event.preventDefault();
        var txtInput17 = {
            txt: document.querySelector("#ToDo17").value.trim()
        }
        localStorage.setItem("txtInput17", JSON.stringify(txtInput17));
    });

    setInterval(ebenezer(), 5000);


});

