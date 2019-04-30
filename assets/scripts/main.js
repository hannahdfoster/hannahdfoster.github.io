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

//Menu
$(".menubtn span").click(function () {
  $(".menu").toggle("slow");
});