const boutonVoirConso = document.querySelector(".voir-conso");

boutonVoirConso.addEventListener("click", function () {
    window.scrollTo({
        top: 699,
        left: 0,
        behavior: "smooth",
      });
   });

const boutonVoirUtilisation = document.querySelector(".voir-utilisation");
boutonVoirUtilisation.addEventListener("click", function() {
  window.scrollTo({
    top: 1397,
    left: 0,
    behavior: "smooth",
  });
} );

const boutonVoirNappe = document.querySelector(".voir-nappe");
boutonVoirNappe.addEventListener("click", function(){
  window.scrollTo({
    top: 2096,
    left: 0,
    behavior: "smooth",
  });
})