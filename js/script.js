$(document).ready(function () {

    $("#btnassistir").click(function () {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo Deu Errado!"
        });
    })
$("#btnterror").click(function () {
    $(".card").hide();
    $(".terror").show();
})
$("#btndrama").click(function () {
    $(".card").hide();
    $(".drama").show();
})
$("#btncomedia").click(function() {
    $(".card").hide();
    $(".comedia").show();

})
})
