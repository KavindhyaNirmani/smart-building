import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PowerGauge = ({ value }) => {
    const gaugeOptions = {
      series: [value],
      options: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: true,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#333',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -20,
                show: false,
                color: '#888',
                fontSize: '13px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '30px',
                show: true
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Power Consumption']
      }
    };
  
    return (
      <div className="gauge-chart">
        <ReactApexChart options={gaugeOptions.options} series={gaugeOptions.series} type="radialBar" height={200} />
      </div>
    );
  };
  
  export default PowerGauge;
  