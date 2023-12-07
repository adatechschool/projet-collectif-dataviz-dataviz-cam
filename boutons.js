const boutonVoirConso = document.querySelector(".voir-conso");
boutonVoirConso.addEventListener("click", function () {
    div2.scrollIntoView({ behavior: "smooth"});
});

const boutonVoirUtilisation = document.querySelector(".voir-utilisation");
boutonVoirUtilisation.addEventListener("click", function () {
  div3.scrollIntoView({ behavior: "smooth"});
});

const boutonVoirNappe = document.querySelector(".voir-nappe");
boutonVoirNappe.addEventListener("click", function () {
  div4.scrollIntoView({ behavior: "smooth"});
})