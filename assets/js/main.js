$(document).ready(function () {

    //Mail Function
//     $("form").on("submit", function (e) {
//         e.preventDefault();
//         $.ajax({
//             type: "POST",
//             url: "https://formcarry.com/s/qAW5BP7TRqb",
//             dataType: "text",
//             data: $('form').serialize(),
//             success: function () {
//                 $('#confirmEmail').modal('show')
//             }
//         });
//     });

    //Footer Year display
    let d = new Date();
    let y = d.getFullYear();
    $("#year").text(y);

    //Macy options
    setTimeout(() => {
        Macy({
            container: ".gallery",
            trueOrder: false,
            waitForImages: false,
            margin: 14,
            columns: 3,
            breakAt: {
                1200: 3,
                940: 2,
                400: 1
            }
        });
    }, 250);

    //Macy and Mansory Setup
    // var pathName = window.location.pathname;
    // var match = pathName.match(/\d/g);
    // var number = match[0];
    // var folder = `../../../assets/images/gallery${number}/`;  

    // $.ajax({
    //     url: folder,
    //     success: function (data) {
    //         $(data)
    //             .find("a")
    //             .attr("href", function (i, val) {
    //                 if (val.match(/\.(jpe?g|jpg|png|gif)$/)) {
    //                     $(".gallery").append(
    //                         "<img src='" + folder + val + "'>"
    //                     );
    //                 }
    //             });
    //     }
    // });

});
