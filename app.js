let checkedIn = false;
let checkInTime = null;
let checkOutTime = null;

function getTime() {

    const now = new Date();

    return now.toLocaleTimeString(
        "vi-VN",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


function attendance() {

    const btn =
        document.getElementById("attendanceBtn");

    const status =
        document.getElementById("status");

    if (!checkedIn) {

        checkedIn = true;

        checkInTime = getTime();

        document.getElementById("checkIn")
            .innerText = checkInTime;

        document.getElementById("recentIn")
            .innerText = checkInTime;

        status.innerHTML =
            "<span></span> Đang trong ca";

        status.style.background = "#e8f5e9";
        status.style.color = "#2e7d32";

        btn.innerText =
            "↩ CHẤM CÔNG RA";

        showMessage(
            "Đã chấm công vào lúc "
            + checkInTime
        );

    } else {

        checkOutTime = getTime();

        document.getElementById("checkOut")
            .innerText = checkOutTime;

        document.getElementById("recentOut")
            .innerText = checkOutTime;

        btn.innerText =
            "ĐÃ HOÀN THÀNH";

        btn.disabled = true;

        btn.style.background = "#ddd";

        showMessage(
            "Đã chấm công ra lúc "
            + checkOutTime
        );
    }
}


function showMessage(message) {

    alert(message);

}


function updateDate() {

    const now = new Date();

    const date =
        now.toLocaleDateString(
            "vi-VN",
            {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

    document.getElementById(
        "currentDate"
    ).innerText = date;
}

updateDate();