   

document.getElementById("reviewImage").addEventListener("change", showUpload);

    // displays the name of the file below the button
    function showUpload(parent) {
        let filePath = document.getElementById("reviewImage").value;
        // this code section removes the fluff from the file directory
        let commonNameBeginning = filePath.lastIndexOf("\\");
        filePath = filePath.slice(commonNameBeginning + 1, filePath.length);
        document.getElementById("uploadedFile").innerText = "\"" + filePath +  "\"" + " is selected"; 
    }


    