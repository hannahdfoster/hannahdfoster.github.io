var folder = "https://hannahdfoster.com/assets/images/";

let portfolio = window.location.pathname.match(/portfolio/g) ? fnPortfolio() : false;
function fnPortfolio() { 

    Macy({
      container: ".container #portfolio #family",
      trueOrder: false,
      waitForImages: false,
      margin: 14,
      columns: 4,
      breakAt: {
        1200: 3,
        940: 2,
        400: 2
      }
    });
  
    Macy({
      container: ".container #portfolio #love",
      trueOrder: false,
      waitForImages: false,
      margin: 14,
      columns: 4,
      breakAt: {
        1200: 3,
        940: 2,
        400: 2
      }
    });
  
    Macy({
      container: ".container #portfolio #portrait",
      trueOrder: false,
      waitForImages: false,
      margin: 14,
      columns: 4,
      breakAt: {
        1200: 3,
        940: 2,
        400: 2
      }
    });

}
// function fnPortfolio() {
//   $(".carousel").carousel({
//     interval: 2000
//   });

//   $.ajax({
//     url: folder + "family/",
//     success: function (data) {
//       $(data)
//         .find("a")
//         .attr("href", function (i, val) {
//           if (val.match(/\.(jpe?g|jpg|png|gif)$/)) {
//             $(".container #portfolio #family").append(
//               "<img src='" + folder + "family/" + val + "'>"
//             );
//           }
//         });
//     }
//   });

//   //Macy options
//   setTimeout(() => {
//     Macy({
//       container: ".container #portfolio #family",
//       trueOrder: false,
//       waitForImages: false,
//       margin: 14,
//       columns: 4,
//       breakAt: {
//         1200: 3,
//         940: 2,
//         400: 2
//       }
//     });
//   }, 250);

//   $.ajax({
//     url: folder + "love/",
//     success: function (data) {
//       $(data)
//         .find("a")
//         .attr("href", function (i, val) {
//           if (val.match(/\.(jpe?g|jpg|png|gif)$/)) {
//             $(".container #portfolio #love").append(
//               "<img src='" + folder + "love/" + val + "'>"
//             );
//           }
//         });
//     }
//   });

//   //Macy options
//   setTimeout(() => {
//     Macy({
//       container: ".container #portfolio #love",
//       trueOrder: false,
//       waitForImages: false,
//       margin: 14,
//       columns: 4,
//       breakAt: {
//         1200: 3,
//         940: 2,
//         400: 2
//       }
//     });
//   }, 250);

//   $.ajax({
//     url: folder + "portrait/",
//     success: function (data) {
//       $(data)
//         .find("a")
//         .attr("href", function (i, val) {
//           if (val.match(/\.(jpe?g|jpg|png|gif)$/)) {
//             $(".container #portfolio #portrait").append(
//               "<img src='" + folder + "portrait/" + val + "'>"
//             );
//           }
//         });
//     }
//   });

//   //Macy options
//   setTimeout(() => {
//     Macy({
//       container: ".container #portfolio #portrait",
//       trueOrder: false,
//       waitForImages: false,
//       margin: 14,
//       columns: 4,
//       breakAt: {
//         1200: 3,
//         940: 2,
//         400: 2
//       }
//     });
//   }, 250);
// }

//Menu
$(".menubtn span").click(function () {
  $(".menu").toggle("slow");
});