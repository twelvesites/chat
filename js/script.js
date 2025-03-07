var button = document.getElementById("msgBtn");
        var hasButtonClickListener = false;
        var enterKeyTriggered = false;

        // Add an event listener for the "click" event
        button.addEventListener("click", handleButtonClick);

        // Add an event listener for the "keydown" event to listen for the Enter key (key code 13)
        document.addEventListener("keydown", function(event) {
            if (event.keyCode === 13 && document.activeElement !== document.getElementById("msgTxt") && !enterKeyTriggered) {
                event.preventDefault();
                button.click();
                enterKeyTriggered = true; // Set the flag to prevent double triggering
            }
        });

        // Add a function to handle the button click
        function handleButtonClick() {
            if (!hasButtonClickListener) {
                hasButtonClickListener = true;
                module.sendMsg();
            }
        }