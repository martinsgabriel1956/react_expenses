import './styles.css';

import { ChartBar } from './ChartBar';

export function Chart(props) {
  return (
    <>
      <div className="chart">
        {props.dataPoints.map(dataPoint => (
          <ChartBar
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={null} 
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};