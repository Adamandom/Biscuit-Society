
    function reviewSubmitted() {
        alert("Thank you for your submission!");
    }
    
    document.getElementById("reviewImage").addEventListener("change", showUpload);

    // // change the score bar on hover
    // var scoreColors = ["red", "orange", "yellow", "green", "lime"];
    // function scoreBar() {
    //     document.getElementById("score_text").style.display = "none";

    //     let bar = document.getElementById("score_bar");
    //     let score = bar.title; 
    //     let color = scoreColors[score-1]; 
    //     let width = String(18*score) + "%";

    //     bar = bar.style;

    //     bar.width = width;
    //     bar.background = color;

    // }

    
    var active = false;
    
    // changes color depending on slider value
    function sliderColor() {
        var active = true;
        let slider = document.getElementById("reviewScore");
        let color = document.getElementById("reviewScore").value;
        let score = Math.ceil(color/24);
        slider.style.filter = "hue-rotate(" + String(color) + "deg)";
        document.getElementById("currentScore").innerText = score + "/5";
        if (active) {
            sliderColor();
        }
    }

    // displays the name of the file below the button
    function showUpload() {
        let filePath = document.getElementById("reviewImage").value;
        // this code section removes the fluff from the file directory
        let commonNameBeginning = filePath.lastIndexOf("\\");
        filePath = filePath.slice(commonNameBeginning + 1, filePath.length);
        document.getElementById("uploadedFile").innerText = "\"" + filePath +  "\"" + " is selected"; 
    }


    