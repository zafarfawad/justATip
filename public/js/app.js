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