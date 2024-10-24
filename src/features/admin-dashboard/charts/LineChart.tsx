import { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import { curveMonotoneX } from '@visx/curve';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';

const LineChart = () => {
  const [data, setData] = useState(generateData());
  const [dimensions, setDimensions] = useState({ width: 300, height: 200 });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.4; // 例如占用 40% 的宽度
      const newHeight = newWidth * 0.5; // 高度为宽度的一半
      setDimensions({ width: newWidth, height: newHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化设置尺寸

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 定义 x 和 y 轴的比例尺
  const xScale = scaleLinear({
    domain: [0, data.length - 1],
    range: [0, dimensions.width],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.value))],
    range: [dimensions.height, 0],
  });

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <LinePath
        data={data}
        x={(d) => xScale(d.index)}
        y={(d) => yScale(d.value)}
        stroke="steelblue"
        strokeWidth={2}
        curve={curveMonotoneX} // 可选择不同的曲线类型
      />
    </svg>
  );
};

// 生成模拟数据
const generateData = () =>
  Array.from({ length: 10 }, (_, index) => ({
    index,
    value: faker.number.int({ min: 10, max: 100 }),
  }));

export default LineChart;
