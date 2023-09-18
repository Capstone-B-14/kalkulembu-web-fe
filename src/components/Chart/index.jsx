import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
import dailyCowWeightData from "../../_data/dailyCow"; // Import dailyCowWeightData from the correct path

Chart.register(...registerables);

const TimeSeriesChart = () => {
  const [chartData, setChartData] = useState(dailyCowWeightData);
  const [filter, setFilter] = useState("day"); // Default filter

  useEffect(() => {
    // Filter data based on the selected filter (day, month, year)
    let filteredData = dailyCowWeightData;

    if (filter === "month") {
      // Filter data for the entire month of September 2023
      filteredData = dailyCowWeightData.filter((entry) =>
        dayjs(entry.date).isSame(dayjs("2023-09-01"), "month")
      );
    } else if (filter === "year") {
      // Filter data for the entire year of 2023
      filteredData = dailyCowWeightData.filter((entry) =>
        dayjs(entry.date).isSame(dayjs("2023-01-01"), "year")
      );
    }

    setChartData(filteredData);
  }, [filter]);

  // Define chart data
  const chartDataFormatted = {
    labels: chartData.map((entry) => entry.date),
    datasets: [
      {
        label: "Cow Weight",
        data: chartData.map((entry) => entry.weight),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        display: true,
        align: "end",
        anchor: "end",
        formatter: (value) => value.toFixed(2), // Format data labels
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: filter, // Dynamic x-axis unit (day, month, year)
          displayFormats: {
            day: "dd MMM",
            month: "MMM yyyy",
            year: "yyyy",
          },
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Time Series Chart</h2>
      <div>
        {/* Filter buttons */}
        <button onClick={() => setFilter("day")}>Day</button>
        <button onClick={() => setFilter("month")}>Month</button>
        <button onClick={() => setFilter("year")}>Year</button>
      </div>
      <div>
        {/* Chart */}
        <Line data={chartDataFormatted} options={options} />
      </div>
    </div>
  );
};

export default TimeSeriesChart;
