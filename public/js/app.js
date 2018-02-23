$("#submit_tip").on("click", function (event) {
    event.preventDefault(); // Here we grab the form elements var currentSurvey
    var hoursWorked = {
        tipAmountDaily: $("#input_tip_amount").val(),
        hoursWorkedDaily: $("#input_hours_worked").val(),
        minutesWorkedDaily: $("#input_minutes_worked").val(),
        notes: $("#input_notes").val(),
        
    }
    $.post("/api/day", hoursWorked, function (data) {
        var dateString = new Date(data.createdAt);
        var date = dateString.toLocaleDateString();
        console.log(date);

        

        $("#total_weekly_amount").text(data.input_tip_amount);

        $("#total_weekly_hours").text(moment.duration(data.input_totalhours_worked,
            "minutes").format());

        $("#total_weekly_hourly").text(data.input_hourly_wage);

        $("#total_weekly_tips").text(data.input_tip_amount);

        $("#record").append("<tr>" + "<td>" + date + "</td>" + "<td>" + data.input_tip_amount +
            "</td>" + "<td>" + data.input_notes + "</td>" + "</tr>");
    });
});

$("#add_tip").on("click", function(){
    $("#input_hours_worked").val("1");
    $("#input_minutes_worked").val("0");
    $("#input_tip_amount").val("")
    $("#input_notes").val("")
});

