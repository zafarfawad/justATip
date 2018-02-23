// var salary = 5.03;
// var salaryTotalDaily;
// var totalDaily;
// var perHourDaily;

// $("#submit_tip").on("click", function () {
//     var tipAmountDaily = $("#input_tip_amount").val();
//     var hoursWorkedDaily = $("#input_hours_worked").val();
//     var minutesWorkedDaily = $("#input_minutes_worked").val()
//     var notes = $("#input_notes").val();
//     dailyWage();
//     weeklyWage();

//     function dailyWage() {
//         totalHoursWorkedDaily = (parseFloat(hoursWorkedDaily) + parseFloat(minutesWorkedDaily));
//         totalSalaryDaily = (salary * hoursWorkedDaily).toFixed(2);
//         totalWageDaily = (parseFloat(tipAmountDaily) + parseFloat(totalSalaryDaily)).toFixed(2)
//         totalHourlyDaily = (totalWageDaily / parseFloat(totalHoursWorkedDaily)).toFixed(2);
//         console.log(totalHoursWorkedDaily)

//         $("#total_weekly_amount").text(totalWageDaily);
//         $("#total_weekly_hours").text(moment.duration(totalHoursWorkedDaily, "minutes").format());
//         $("#total_weekly_hourly").text(totalHourlyDaily);
//         $("#total_weekly_tips").text(tipAmountDaily);

//     }

//     function weeklyWage() {
//         console.log("This is working!")
//     }
// });


// $("#submit_tip").on("click", function (event) {
//     event.preventDefault(); // Here we grab the form elements var currentSurvey
            // $("#submit_tip").on("click", function (event) {
            //     event.preventDefault(); // Here we grab the form elements var currentSurvey

            //     var hoursWorked = {
            //         tipAmountDaily: $("#input_tip_amount").val(),
            //         hoursWorkedDaily: $("#input_hours_worked").val(),
            //         minutesWorkedDaily: $("#input_minutes_worked").val(),
            //         notes: $("#input_notes").val(),
            //     }
// >>>>>>> master

//     var hoursWorked = {
//         tipAmountDaily: $("#input_tip_amount").val(),
//         hoursWorkedDaily: $("#input_hours_worked").val(),
//         minutesWorkedDaily: $("#input_minutes_worked").val(),
//         notes: $("#input_notes").val(),
//     }


// <<<<<<< HEAD

//     $.post("/api/day", hoursWorked, function (data) {

//         var dateString = new Date(data.createdAt);
//         var date = dateString.toLocaleDateString();

//         $("#total_weekly_amount").text(data.input_tip_amount);
//         $("#total_weekly_hours").text(moment.duration(data.input_totalhours_worked,
//             "minutes").format());
//         $("#total_weekly_hourly").text(data.input_hourly_wage);
//         $("#total_weekly_tips").text(data.input_tip_amount);

            //     $.post("/api/day", hoursWorked, function (data) {

            //         var dateString = new Date(data.createdAt);

            //         var date = dateString.toLocaleDateString();

            //         console.log(date);

            //         $("#total_weekly_amount").text(data.input_tip_amount);
            //         $("#total_weekly_hours").text(moment.duration(data.input_totalhours_worked,
            //             "minutes").format());
            //         $("#total_weekly_hourly").text(data.input_hourly_wage);
            //         $("#total_weekly_tips").text(data.input_tip_amount);
// >>>>>>> master

//         //populating table
//         $("#record").append("<tr>" + "<td>" + date + "</td>" + "<td>" + data.input_tip_amount +
//             "</td>" + "<td>" + data.input_notes + "</td>" + "</tr>");

            //         //populating table
            //         // $("#ID").text(data.id);
            //         $("#record").append("<tr>" + "<td>" + date + "</td>" + "<td>" + data.input_tip_amount +
            //             "</td>" + "<td>" + data.input_notes+"</td>"+"</tr>");
            //         // $("#tip_amount").text(data.input_tip_amount);
            //         // $("#comments").text(data.input_notes);

//     });
// });

// $("#logout-button").on("click", function (event) {
//     event.preventDefault(); // Here we grab the form elements var currentSurvey

//     $.get("/auth/logout", function (data) {
//         window.location.href = window.location.origin;


//     });
// });
            //         //     $("#matchName").text(data.name);
            //         //     $("#myModal").modal();
            //         //     // window.location.reload();

            //         //     $(".form-control").val('');

            //     });
            // });
    
