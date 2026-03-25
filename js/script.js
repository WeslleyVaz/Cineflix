$(document).ready(function () {

    $("#btnassistir").click(function () {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo Deu Errado!"
        });
    })

    $("#btnterror").click(function () {
        $(".Ação").hide();
        $(".Comedia").hide();
        $(".Drama").hide();
        $(".Terror").show();
    })

  $("#btnação").click(function () {
        $(".Ação").show();
        $(".Comedia").hide();
        $(".Drama").hide();
        $(".Terror").hide();
    })

    $("#btndrama").click(function () {
        $(".Ação").hide();
        $(".Comedia").hide();
        $(".Terror").hide();
        $(".Drama").show();
    })
    $("#btncomedia").click(function () {
        $(".Terror").hide();
        $(".Drama").hide();
        $(".Ação").hide();
        $(".Comedia").show();

    })
    $("#btntodos").click(function () {
        $(".Terror").show();
        $(".Drama").show();
        $(".Ação").show();
        $(".Comedia").show();

    })
})
