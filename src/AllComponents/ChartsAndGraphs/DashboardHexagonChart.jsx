// import React from 'react';
// import "./DashboardHexagonChartStyle.css";
// import ReactApexChart from 'react-apexcharts';
// import { useSelector } from 'react-redux';
// export const DashboardHexagonChart = () => {
//     const chartData = useSelector((state) => state.chart.data);

//     const categories = chartData.map((item) => item.skill);
//     const seriesData = chartData.map((item) => item.level);

//     const chartOptions = {
//     chart: {
//         height:  "clamp(20px, 50vh, 400px)",
//         type: "radar",
//         toolbar: { show: false },
//         offsetX: -20, 
//         offsetY: 70,
//     },
//     xaxis: {
//         categories,
//         labels: {
//         style: {
//             colors: "white",
//             fontSize: "12px",
            
//         },
//         },
//     },
//     yaxis: {
//         show: false,
//     },
//     plotOptions: {
//         radar: {
//         polygons: {
//             strokeColors: "#ffffff",
//             connectorColors: "#ffffff",
//         },
//         },
//     },
//     stroke: {
//         show: true,
//         width: 2,
//         colors: ["#ffffff"],
//     },
//     fill: {
//         opacity: 0.1,
//     },
//     };

//     const chartSeries = [
//     {
//         name: "Skill Level",
//         data: seriesData,
//     },
//     ];

//     return (
//         <>
        
//             <div className="skill-matrix-header">
//                 <span className="skill-matrix-header-title">Skill Matrix</span>
//                 <button className='skill-matrix-header-button'>View Matrix</button>
//             </div>
//             <ReactApexChart
//             options={chartOptions}
//             series={chartSeries}
//             type="radar"
//             height={300}
//             />
//         </>
//     );
// };
  

import React, { useState, useEffect, useRef } from "react";
import "./DashboardHexagonChartStyle.css";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export const DashboardHexagonChart = () => {
  const chartData = useSelector((state) => state.chart.data);
  const chartContainerRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: "100%", height: "100%" });

  useEffect(() => {
    const updateChartSize = () => {
      if (chartContainerRef.current) {
        setChartSize({
          width: chartContainerRef.current.offsetWidth,
          height: chartContainerRef.current.offsetHeight,
        });
      }
    };

    updateChartSize(); // Initial size
    window.addEventListener("resize", updateChartSize);

    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  const categories = chartData.map((item) => item.skill);
  const seriesData = chartData.map((item) => item.level);

  const chartOptions = {
    chart: {
      type: "radar",
      toolbar: { show: false },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
    yaxis: { show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#ffffff",
          connectorColors: "#ffffff",
        },
        offsetX: -20, 
      },
    },
    stroke: { show: true, width: 2, colors: ["#ffffff"] },
    fill: { opacity: 0.2 },
  };

  const chartSeries = [{ name: "Skill Level", data: seriesData }];

  return (
    <div className="dashboard-hexagon-chart">
      <div className="skill-matrix-header">
        <span className="skill-matrix-header-title">Skill Matrix</span>
        <button className="skill-matrix-header-button">View Matrix</button>
      </div>

      <div className="chart-container" ref={chartContainerRef}>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="radar"
          width={chartSize.width}
          height={chartSize.height}
        />
      </div>
    </div>
  );
};
