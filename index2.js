class CalorieTracker {
    constructor() {
        this.baseCalorieBurn = 1500;
        this.caloriesData = [];
        this.reportArr = [];
    }

    addDayData(burnt, intake) {
        this.caloriesData.push({ burnt, intake });
    }

    calculateSurplusDeficit(burnt, intake) {
        return burnt - (intake + this.baseCalorieBurn);
    }

    generateDailyReport(dayIndex) {
        const { burnt, intake } = this.caloriesData[dayIndex - 1];
        const surplusDeficit = this.calculateSurplusDeficit(burnt, intake);
        const report = `Day ${dayIndex}: Surplus/Deficit: ${surplusDeficit > 0 ? surplusDeficit + " (Surplus)" : surplusDeficit + " (Deficit)"}`;
        // console.log(report);
        this.reportArr.push({report});
        console.log(this.reportArr[dayIndex-1].report);
    }

    generateWeeklySummary() {
        let totalBurnt = 0;
        let totalIntake = 0;

        for (const day of this.caloriesData) {
            totalBurnt += day.burnt;
            totalIntake += day.intake;
        }

        const totalSurplus = totalBurnt - (totalIntake + this.baseCalorieBurn * this.caloriesData.length);

        let summary = "\nWeekly Summary:\n";
        summary += `Total Burnt: ${totalBurnt} calories\n`;
        summary += `Total Intake: ${totalIntake} calories\n`;
        summary += `Total Surplus/Deficit: ${totalSurplus > 0 ? totalSurplus + " (Surplus)" : totalSurplus + " (Deficit)"}\n`;

        let standingGoalAward = "";
        if (totalBurnt >= 1000) {
            standingGoalAward = "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!";
        }

        console.log(summary);
        if (standingGoalAward !== "") {
            console.log(standingGoalAward);
        }
    }
}

const tracker = new CalorieTracker();

// Adding data for each day
tracker.addDayData(400, 1500); // Day 1
tracker.addDayData(450, 1800); // Day 2
tracker.addDayData(300, 1600); // Day 3
tracker.addDayData(500, 2000); // Day 4
tracker.addDayData(350, 1700); // Day 5

// Generate daily reports
for (let i = 1; i <= 5; i++) {
    tracker.generateDailyReport(i);
}

// Generate weekly summary and awards
tracker.generateWeeklySummary();
