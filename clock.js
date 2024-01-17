function show_clock ()
{
    let hr = document.querySelector("#hr") ; 
    let min = document.querySelector("#min") ; 
    let sec = document.querySelector("#sec") ; 
    let date = new Date() ; 
    let hours = date.getHours() ; 
    let minutes = date.getMinutes() ; 
    let seconds = date.getSeconds() ; 
    hr.style.transform = `rotate(${30 *hours + minutes/2}deg)` ; 
    min.style.transform = `rotate(${6* minutes}deg)` ; 
    sec.style.transform = `rotate(${6 * seconds}deg)` ; 
}
setInterval(show_clock , 1000) ; 