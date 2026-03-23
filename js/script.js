$(document).ready(function () {

    $(btnassistir).click(function () {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo Deu Errado!"
        });
    })
$("#btnterror").click(function () {
    $(".card").hide();
    $(".Terror").show();
})
$("#btndrama").click(function () {
    $(".card").hide();
    $(".Drama").show();
})
$("#btncomédia").click(function() {
    $(".card").hide();
    $(".Comédia").show();

})
})
