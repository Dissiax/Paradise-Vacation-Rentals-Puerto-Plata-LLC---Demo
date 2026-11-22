window.onload = function() {
    document.getElementById("ok").innerHTML = "blah";
    let nowDate = new Date();
    let nowDay = nowDate.getDate();
    let nowMonth = nowDate.getMonth();
    let nowYear = nowDate.getFullYear();

    let centuryCode = ((3 - (Math.floor(nowYear / 100) & 0x03)) << 1);
    let yearCode = Math.floor((nowYear % 100) * 1.25);
    let monthCodex = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    let monthCode = monthCodex[nowMonth];
    if (((nowYear & 0x03) == 0) & (((nowYear % 100) != 0) | ((nowYear % 400 == 0)))) {
        if (nowMonth < 2) {
            //only January and Febuary on leap years
            monthCode -= 1;
        }
    }
    let weekDay = ((centuryCode + yearCode + monthCode + nowDay) % 7);

    document.getElementById("ok").innerHTML = weekDay;



    let displayMonth = doucment.getElementById("monthSelect");
    displayMonth.addEventListener('change', (event) => {
        let selectMonth = monthCodex[displayMonth.value];
        if (((nowYear & 0x03) == 0) & (((nowYear % 100) != 0) | ((nowYear % 400 == 0)))) {
            if (displayMonth.value < 2) {
                //only January and Febuary on leap years
                selectMonth -= 1;
            }
        }
        let selectedWeekDay = ((centuryCode + yearCode + selectMonth + 1) % 7);
        document.getElementById("ok").innerHTML = selectedWeekDay;
    });
}