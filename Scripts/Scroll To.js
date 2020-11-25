// Scroll to top script
// by Adam Sutherland

var GoTo = {
    shown: function() {
            if (document.documentElement.scrollTop > 700) {
                document.getElementById("returnToTop").style.display = "block";
            }
            else {
                document.getElementById("returnToTop").style.display = "none";
            }
        },

    scrollTo: function (pos) {
        if (typeof pos === "number") {
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });
        }
        else {
            // if pos is a string, it is the id of the element it is to travel to
            let toPosition = document.getElementById(pos).getBoundingClientRect();

            // offset needed to get to correct place
            let offset = toPosition.top - document.body.getBoundingClientRect().top;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
    } 
}

window.addEventListener("scroll", GoTo.shown);

