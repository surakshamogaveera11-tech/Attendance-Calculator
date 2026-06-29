function calculateAttendance() {
    let total =Number(document.getElementById("total").value);
    let attended =Number(document.getElementById("attended").value);

    if (total <= 0 || attended < 0 || attended > total) {
        document.getElementById("result").innerHTML =
            "Please enter valid values.";
        return;
    }

    let percentage = (attended / total) * 100;

    let status = percentage >= 75
            ? "Eligible for Exam"
            : "Not Eligible for Exam";

    let result=document.getElementById("result");
    if (percentage >= 75) {
    result.innerHTML =
        "Attendance: " + percentage.toFixed(2) +
        "%<br><span style='color:green;'>Eligible for Exam</span>";
} else {
    result.innerHTML =
        "Attendance: " + percentage.toFixed(2) +
        "%<br><span style='color:red;'>Not Eligible for Exam</span>";
}
}