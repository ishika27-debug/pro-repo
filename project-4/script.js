var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.children[1].style.opacity = 1; // Access the img element directly
    });
    val.addEventListener("mouseleave", function () {
        val.children[1].style.opacity = 0;
    });
    val.addEventListener("mousemove", function (dets) {
        val.children[1].style.left = dets.x+"px";
        val.children[1].style.top = dets.y+"px"
    });
});
