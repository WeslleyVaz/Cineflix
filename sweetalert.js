$(document).ready(function () {
    

    $("#btninfo").click(function () {

    $(".titulo_danger").hide();
    $(".titulo_info").show();

    Swal.fire({
        title: "botão info cliclado",
        text: "titulo danger foi escondido!",
        icon:"sucess!"
    });


    });

    $("#btdanger").click(function () {
    
        $(".titulo_danger").hide();
        $(".titulo_info").show();

        swal.fire({
            
            title: "botão info cliclado",
            text: "titulo danger foi escondido!",
            icon:"sucess!"

        })

    
    });
});