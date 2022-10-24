export const secondsToReadableTimeFormat = (seconds: number) => {
    const hours = parseInt(String(seconds / 3600));
    const minutes = parseInt(String(seconds / 60)) % 60;
    seconds = seconds % 60;

    const pad = function (val: number) {
        return val < 10 ? "0" + val : val;
    };

    if (pad(hours) === "00") {
        return pad(minutes) + ":" + pad(seconds);
    }

    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
};
