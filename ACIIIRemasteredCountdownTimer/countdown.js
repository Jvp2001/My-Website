
/**
 * @type {HTMLParagraphElement} timerLabel
 * @type {string} endDateTime
 */
function countDown(timerLabel,endDateTime,timerHandle,finishedText)
{
    let countDownTime = new Date(endDateTime).getTime();

    let now = Date.now();

    let timeLeft = countDownTime - now;


    // Time calculations for days, hours minutes, seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

    // Display the time remaing
    timerLabel.innerHTML = days+":"+hours+":"+minutes+":"+seconds;
    timerLabel.style["font-size"]= 36;
    // If the count down is finished, write some text
    if(timeleft < 0)
    {
        clearInterval(timerHandle);
        timerLabel.innerHTML = finishedText;
    }





}