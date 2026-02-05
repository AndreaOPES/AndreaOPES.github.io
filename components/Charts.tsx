
import React, { useState, useRef, useMemo } from 'react';
import { PERIOD_DATA } from '../constants';

interface EnhancedLineChartProps {
  color?: string;
  period?: string;
  heightPixels?: number;
}

export const EnhancedLineChart: React.FC<EnhancedLineChartProps> = ({ color = "#1F4650", period = 'Month', heightPixels = 280 }) => {
  // Add 'label' to the hoveredPoint state type to fix property access error on line 167
  const [hoveredPoint, setHoveredPoint] = useState<{ index: number, x: number, y: number, label: string } | null>(null);
  const containerRef = useRef<SVGSVGElement>(null);

  const data = useMemo(() => PERIOD_DATA[period] || PERIOD_DATA['Month'], [period]);
  
  const width = 600;
  const height = 150;
  const padding = { top: 20, bottom: 20, left: 10, right: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map(d => d.value)) || 1;
  const yAxisTicks = [maxVal, maxVal * 0.66, maxVal * 0.33, 0];

  const points = data.map((d, i) => {
    const x = padding.left + (i * (chartWidth / (data.length - 1)));
    const y = padding.top + (chartHeight - (d.value / maxVal) * chartHeight);
    return { x, y, ...d };
  });

  const bezierPathD = useMemo(() => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
        const x_mid = (points[i].x + points[i+1].x) / 2;
        const y_mid = (points[i].y + points[i+1].y) / 2;
        d += ` Q ${points[i].x},${points[i].y} ${x_mid},${y_mid}`;
    }
    d += ` T ${points[points.length-1].x},${points[points.length-1].y}`;
    return d;
  }, [points]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * width;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    points.forEach((p, i) => {
      const distance = Math.abs(p.x - mouseX);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    // Populate 'label' in the state to fix property access errors in JSX
    setHoveredPoint({ 
      index: closestIndex, 
      x: points[closestIndex].x, 
      y: points[closestIndex].y,
      label: points[closestIndex].label
    });
  };

  const handleMouseLeave = () => setHoveredPoint(null);

  const uniqueLabels = useMemo(() => {
    const labels: { label: string, x: number, index: number }[] = [];
    let lastLabel = "";
    points.forEach((p, i) => {
       if (p.label !== lastLabel) {
         labels.push({ label: p.label, x: p.x, index: i });
         lastLabel = p.label;
       }
    });
    return labels;
  }, [points]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div style={{ height: `${heightPixels}px` }} className="flex w-full">
        <div className="flex flex-col justify-between py-6 pr-4 text-[10px] font-bold text-gray-400 border-r border-gray-100 w-14 text-right">
          {yAxisTicks.map((tick, i) => (
            <span key={i}>€{(tick / 1000).toFixed(1)}k</span>
          ))}
        </div>

        <div className="flex-1 relative group ml-2">
          <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none opacity-[0.05] py-6 px-0">
            <div className="w-full border-t border-slate-900"></div>
            <div className="w-full border-t border-slate-900"></div>
            <div className="w-full border-t border-slate-900"></div>
            <div className="w-full border-t border-slate-900"></div>
          </div>

          <svg 
            ref={containerRef}
            viewBox={`0 0 ${width} ${height}`} 
            className="w-full h-full overflow-visible" 
            preserveAspectRatio="none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              <linearGradient id={`gradient-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path 
              d={`${bezierPathD} L${points[points.length-1].x},${height} L${points[0].x},${height} Z`} 
              fill={`url(#gradient-${color.replace('#','')})`}
              className="transition-all duration-700 ease-in-out"
            />
            
            <path 
              d={bezierPathD} 
              fill="none" 
              stroke={color} 
              strokeWidth="3" 
              strokeLinecap="round"
              className="transition-all duration-700 ease-in-out"
            />

            {hoveredPoint && (
              <line 
                x1={hoveredPoint.x} y1="0" x2={hoveredPoint.x} y2={height} 
                stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
              />
            )}
            
            <circle 
              cx={hoveredPoint ? hoveredPoint.x : points[points.length - 1].x} 
              cy={hoveredPoint ? hoveredPoint.y : points[points.length - 1].y} 
              r="5" fill={color} stroke="white" strokeWidth="2"
              className="transition-all duration-300 ease-out drop-shadow-md"
            />
          </svg>

          {hoveredPoint && (
            <div 
              className="absolute bg-slate-900 text-white p-3 rounded-xl shadow-2xl pointer-events-none z-30 transition-all duration-150 ease-out"
              style={{ 
                left: `${(hoveredPoint.x / width) * 100}%`, 
                top: `${(hoveredPoint.y / height) * 100}%`,
                transform: 'translate(-50%, -140%)'
              }}
            >
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                {points[hoveredPoint.index].label}
              </p>
              <p className="text-sm font-black leading-none">
                €{points[hoveredPoint.index].value.toLocaleString()}
              </p>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="relative h-6 ml-16 mr-2">
        {uniqueLabels.map((item, i) => (
          <span 
            key={i} 
            className={`absolute text-[10px] font-bold uppercase tracking-widest transition-colors -translate-x-1/2 ${hoveredPoint?.label === item.label ? 'text-opex-teal' : 'text-gray-400'}`}
            style={{ left: `${(item.x / width) * 100}%` }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
