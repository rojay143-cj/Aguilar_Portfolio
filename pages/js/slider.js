// const initSlider = () => {
//     const slideButtons = document.querySelectorAll(".movie-container .slide-button");
//     const imageList = document.querySelector(".movie-container .data");
//     const maxScroll = imageList.scrollWidth - imageList.clientWidth;
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () =>{
//             const direction = button.id==="btn-prev"? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
//         });
//     });
//     const handleSlide = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScroll ? "none" : "block";
//     }
//     imageList.addEventListener("scroll", () => {
//         handleSlide();
//     });
// }
// window.addEventListener("load", initSlider);
$(function() {
    const $imageList = $(".movie-container .data");
    const $slideButtons = $(".movie-container .slide-button");
    const maxScroll = $imageList[0].scrollWidth - $imageList[0].clientWidth;

    $slideButtons.on("click", function() {
        const scrollAmount = $imageList[0].clientWidth * ($(this).is("#btn-prev") ? -1 : 1);
        $imageList.stop().animate({ scrollLeft: $imageList.scrollLeft() + scrollAmount }, 80, "swing");
    });

    $imageList.on("scroll", function() {
        $slideButtons.first().toggle($imageList.scrollLeft() > 0);
        $slideButtons.last().toggle($imageList.scrollLeft() < maxScroll);
    }).trigger("scroll");
});
