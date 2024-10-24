import { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Circle } from '@visx/shape';

const ScatterPlot = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const xScale = scaleLinear({
    domain: [0, 100],
    range: [0, 700],
  });

  const yScale = scaleLinear({
    domain: [0, 100],
    range: [300, 0],
  });

  return (
    <svg width={700} height={300}>
      <Group top={20} left={20}>
        {data.map((d: TODO, i: TODO) => (
          <Circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={6}
            fill="purple"
          />
        ))}
      </Group>
    </svg>
  );
};

const generateData = () =>
  Array.from({ length: 20 }, () => ({
    x: faker.number.int({ min: 0, max: 100 }),
    y: faker.number.int({ min: 0, max: 100 }),
  }));

export default ScatterPlot;
