const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timerDisplay");

startButton.addEventListener("click", function(){
    const timeInSeconds = parseInt(timeInput.value);
    const timeInMilliseconds = timeInSeconds * 1000;

    // call the countdown function passing the desired time in a conversation
    countdown(timeInMilliseconds);
});

function countdown(timeRemaining){

    timeRemaining.textContent = formatTime(timeRemaining);

    // reduce the time by 1 second 
   const newTime = timeRemaining - 1000;


   // If the new time is greater than zero, call the countdown function again after 1 second

   if(newTime > 0){
    setTimeout(function(){
        countdown(newTime);
    }, 1000);

   }else{
    //If the time is zero or negative, display a message
    timerDisplay.textContent = "Countdown Completed";
   }
}

// function formatTime(){
//     const minutes = Math.floor(time/6000);
//     const seconds = Math.floor((time%6000)/1000);
//     return ${minutes}:${seconds.toString().padStart("2", "0")};
// }