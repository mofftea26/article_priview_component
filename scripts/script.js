const sharebtn = document.querySelector("#shareBtn");
const closeSharebtn = document.querySelector("#closeShareBtn");
const shareTab = document.querySelector("#shareTab");
let rdeg = 360;

sharebtn.addEventListener("click", function () {
    if (shareTab.classList.contains("shareTab")) {
        sharebtn.style = "transform:rotate(" + rdeg + "deg)";
        shareTab.classList.remove("shareTab");
        shareTab.classList.add("shareTabMobile");
        rdeg += 360;
    }
    else {
        sharebtn.style = "transform:rotate(-" + rdeg + "deg)";
        shareTab.classList.remove("shareTabMobile");
        shareTab.classList.add("shareTab");
        rdeg -= 360;
    }
})
closeSharebtn.addEventListener("click", function () {
    sharebtn.style = "transform:rotate(-" + rdeg + "deg)";
    rdeg -= 360;
    console.log("click");

    if (shareTab.classList.contains("shareTabMobile")) {
        shareTab.classList.remove("shareTabMobile");
        shareTab.classList.add("shareTab");
    }

})