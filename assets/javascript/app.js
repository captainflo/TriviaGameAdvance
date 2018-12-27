var game = {
    correct: 0,
    wrong: 0,
    unanswered: 0,
    questions: {
        q1: "how many continents are there?",
        q2: "how many people are in the world?",
        q3: "When did Mario first appear?",
        q4: "How many presidents did America have?",
    },
    options: {
        o1: ["5","6","7","8"],
        o2: ["7.5 Billion", "8 Billion" ,"9 Billion", "10 Billion"],
        o3: ["1981","1986","1989","1990"],
        o4: ["41","42","43","44"], 
    },
    answers: {
        a1: "7",
        a2: "7.5 Billion",
        a3: "1981",
        a4: "43",
    }
}

var number = 30;
var intervalId;

function resettime() {
    number = 30;
    $("#show-number").text(number);
}

function decrement() {
    number--;
    $("#show-number").html(number);
    if (number === 0) {
        stop();
        $("#time-left").text("Time Up Buddy !");
        if ($('#select1').is(':visible')){
            game.unanswered++;
            $("#unanswered").html("<img src=" + images[2] + " width='400px'>");
            $('#select1').attr('disabled', 'disabled');
            slide2(); 
        }
        if ($('#select2').is(':visible')){
            game.unanswered++;
            $("#unanswered").html("<img src=" + images[2] + " width='400px'>");
            $('#select2').attr('disabled', 'disabled');
            slide3(); 
        }
        if ($('#select3').is(':visible')){
            game.unanswered++;
            $("#unanswered").html("<img src=" + images[2] + " width='400px'>");
            $('#select3').attr('disabled', 'disabled');
            slide4(); 
        }
        if ($('#select4').is(':visible')){
            game.unanswered++;
            $("#unanswered").html("<img src=" + images[2] + " width='400px'>");
            $('#select4').attr('disabled', 'disabled');
            $('.result').show();
            result();
            slide1();
        }
    }
}
// run  timer function 
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  Stop timer function
function stop() {
clearInterval(intervalId);
}

// call function Time
run();

var images = ["./assets/images/tenor.gif", "./assets/images/wrong.gif", "./assets/images/answer.gif"];
function start(){
    appear();
    appear2();
    appear3();
    appear4();
    resettime();
    $("#select2").hide();
    $("#select3").hide();
    $("#select4").hide();
    $(".result").hide();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();
    $("#correct").empty();
    $("#wrong").empty();
    $("#unanswered").empty();
    $("#select1").show();
    $(".question").show(); 
}

start();

function refresh() {

    setTimeout(function () {
        location.reload()
    });
}

function slide2(){
    document.onkeyup = function(event){
        event.key
        resettime();
        run();
        $("#select2").show();
        $(".question").hide();
        $(".question2").show();
        $("#select1").hide();
        $("#correct").empty();
        $("#wrong").empty();
        $("#unanswered").empty();
    }
    $( "body" ).mouseup(function() {
        resettime();
        run();
        $("#select2").show();
        $(".question").hide();
        $(".question2").show();
        $("#select1").hide();
        $("#correct").empty();
        $("#wrong").empty();
        $("#unanswered").empty();
    })
}

function slide3(){
        document.onkeyup = function(event){
            event.key
            resettime();
            run();
            $(".question2").hide();
            $(".question3").show();
            $("#select3").show();
            $("#select2").hide();
            $("#correct").empty();
            $("#wrong").empty();
            $("#unanswered").empty();
        }
        $( "body" ).mouseup(function() {
            resettime();
            run();
            $(".question2").hide();
            $(".question3").show();
            $("#select3").show();
            $("#select2").hide();
            $("#correct").empty();
            $("#wrong").empty();
            $("#unanswered").empty();
        })
}

function slide4(){
    document.onkeyup = function(event){
        event.key
        resettime();
        run();
        $(".question3").hide();
        $(".question4").show();
        $("#select4").show();
        $("#select3").hide();
        $("#correct").empty();
        $("#wrong").empty();
        $("#unanswered").empty();
    }
    $( "body" ).mouseup(function() {
        resettime();
        run();
        $(".question3").hide();
        $(".question4").show();
        $("#select4").show();
        $("#select3").hide();
        $("#correct").empty();
        $("#wrong").empty();
        $("#unanswered").empty();
    })
}
function slide1(){
    document.onkeyup = function(event){
        event.key
        refresh();  
    }
    $( "body" ).mouseup(function() {
        refresh();
    })
}

function result(){
    $(".correct").text("Correct: " +game.correct);
    $(".wrong").text("Wrong: " +game.wrong);
    $(".unanswered").text("Unanswered: " +game.unanswered);
}
 

// Appear questions and options
function appear(){
    $(".question").text(game.questions.q1);
    $.each(game.options.o1, function(key, value) {  
        $('#select1').append($("<option></option>").attr("value",value).text(value));
   });
}
function appear2(){
    $(".question2").text(game.questions.q2);
    $.each(game.options.o2, function(key, value) { 
        $('#select2').append($("<option></option>").attr("value",value).text(value)); 
   });
}
function appear3(){
    $(".question3").text(game.questions.q3);
    $.each(game.options.o3, function(key, value) {   
        $('#select3').append($("<option></option>").attr("value",value).text(value)); 
   });
}
function appear4(){
    $(".question4").text(game.questions.q4);
    $.each(game.options.o4, function(key, value) {   
        $('#select4').append($("<option></option>").attr("value",value).text(value)); 
   });
}

// count 
$('#select1 option').on("click", function(){
    if ($('#select1 option:selected').val() === game.answers.a1 && $('#select1').is(':enabled')){
        game.correct++;
        $("#correct").html("<img src=" + images[0] + " width='400px'>");
        $('#select1').attr('disabled', 'disabled');
        stop();
        slide2();

    } 
    else if( $('#select1 option:selected').val() != game.answers.a1 && $('#select1').is(':enabled')){
        game.wrong++;
        $("#unanswered").html("<img src=" + images[1] + " width='400px'>");
        $('#select1').attr('disabled', 'disabled');
        slide2();
        stop();
    }
});

$('#select2 option').on("click", function(){
    $("#correct").show();
    if ($('#select2 option:selected').val() === game.answers.a2 && $('#select2').is(':enabled')){
        game.correct++;
        $("#correct").html("<img src=" + images[0] + " width='400px'>");
        $('#select2').attr('disabled', 'disabled');
        stop();
        slide3();
        
    } 
    else if( $('#select2 option:selected').val() != game.answers.a2 && $('#select2').is(':enabled')){
        game.wrong++;
        $("#unanswered").html("<img src=" + images[1] + " width='400px'>");
        $('#select2').attr('disabled', 'disabled');
        stop();
        slide3();
    }
});

$('#select3 option').on("click", function(){
    if ($('#select3 option:selected').val() === game.answers.a3 && $('#select3').is(':enabled')){
        game.correct++;
        $("#correct").html("<img src=" + images[0] + " width='400px'>");
        $('#select3').attr('disabled', 'disabled');
        stop();
        slide4();
    } 
    else if( $('#select3 option:selected').val() != game.answers.a3 && $('#select3').is(':enabled')){
        game.wrong++;
        $("#unanswered").html("<img src=" + images[1] + " width='400px'>");
        $('#select3').attr('disabled', 'disabled');
        stop();
        slide4();
    }
});

$('#select4 option').on("click", function(){
    if ($('#select4 option:selected').val() === game.answers.a4 && $('#select4').is(':enabled')){
        game.correct++;
        $("#correct").html("<img src=" + images[0] + " width='400px'>");
        $('#select4').attr('disabled', 'disabled');
        $(".result").show();
        result();
        stop();
        slide1();
    }
    else if( $('#select4 option:selected').val() != game.answers.a4 && $('#select4').is(':enabled')){
        game.wrong++;
        $("#unanswered").html("<img src=" + images[1] + " width='400px'>");
        $('#select4').attr('disabled', 'disabled');
        $(".result").show();
        result();
        stop();
        slide1();
    }
});

