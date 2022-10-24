export const secondsToReadableTimeFormat = (seconds: number) => {
    let hours = parseInt( String(seconds / 3600) ) ;
    let minutes = parseInt( String(seconds / 60) ) % 60;
    seconds = seconds % 60;

    let pad = function(val: number){
        return val < 10 ?"0"+val:val;
    }

    if (pad(hours) === "00") {
        return pad(minutes) + ":" + pad(seconds);
    }

    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}