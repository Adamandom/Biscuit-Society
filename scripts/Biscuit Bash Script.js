var counter = 0; // keeps track of number of clicks

        function clickCookie(this) {
            counter++;
            document.getElementById("counter").innerText = counter;
        }

        // list of objects, each cookie has its own associated function and name
        const availableCookies = [
            { bite: "Content/Vector Graphics/Home_BiscuitALT.svg", link: "index.html" },
        ];
