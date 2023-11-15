/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";

import dailyCowWeightData from "../../_data/dailyCow"; // Import dailyCowWeightData from the correct path
// import Button from "../Button";
import DropdownComponent from "../../components/Dropdown";

Chart.register(...registerables);

const timeFilters = [
  { label: "day", value: "day" },
  { label: "month", value: "month" },
  { label: "year", value: "year" },
];

const TimeSeriesChart = ({
  title = "Jumlah Sapi di Peternakan",
  timeSeriesdata = [],
}) => {
  const [chartData, setChartData] = useState(timeSeriesdata);
  const [filter, setFilter] = useState("day");

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption);
  };

  useEffect(() => {
    // Filter data based on the selected filter (day, month, year)
    let filteredData = timeSeriesdata;

    if (filter === "day") {
      filteredData = timeSeriesdata.filter((entry) =>
        dayjs(entry.date).isSame(dayjs(new Date()), "day")
      );
    }

    if (filter === "month") {
      filteredData = timeSeriesdata.filter((entry) =>
        dayjs(entry.date).isSame(dayjs(new Date()), "month")
      );
    }

    if (filter === "year") {
      filteredData = timeSeriesdata.filter((entry) =>
        dayjs(entry.date).isSame(dayjs(new Date()), "year")
      );
    }

    setChartData(filteredData);
  }, [timeSeriesdata, filter]);

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
    maintainAspectRatio: true,
    layout: {
      padding: {},
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
      datalabels: {
        display: true,
        align: "end",
        anchor: "end",
        formatter: (value) => value.toFixed(2),
      },
    },
    scales: {
      xAxes: {
        type: "time",
        time: {
          unit: filter, // Dynamic x-axis unit (day, month, year)
          displayFormats: {
            day: "dd MMM",
            month: "MMMM yyyy",
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
    <div className="h-full w-full p-2 bg-[#FFFFFF]">
      <div className="absolute right-12">
        <DropdownComponent
          options={timeFilters}
          onSelect={handleFilterChange}
          placeholder="Pilih Peternakan"
          className="w-40"
        />
      </div>
      <div className="h-full min-w-full">
        {/* Chart */}
        <Line data={chartDataFormatted} options={options} />
      </div>
    </div>
  );
};

export default TimeSeriesChart;
