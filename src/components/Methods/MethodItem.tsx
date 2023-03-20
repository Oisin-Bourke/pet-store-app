import React, { useState, MouseEvent } from 'react';
import Parameters from '../Parameters/Parameters';
import Responses from '../Responses/Responses';
import { Method } from '@/types/types';

interface MethodTypeColors {
  [key: string]: string;
}

const MethodTypeColors: MethodTypeColors = {
  get: 'bg-green-500',
  post: 'bg-blue-500',
  put: 'bg-yellow-500',
  delete: 'bg-red-500',
};

const getMethodStyle = (type: string): string => {
  const color = MethodTypeColors[type];
  return `font-mono rounded-lg ${color} p-2 mr-2`;
};

const MethodItem = ({ method }: { method: Method }) => {
  const { method: methodType } = method;
  const [isDisplayDetails, setIsDisplayDetails] = useState(false);

  const handleToggleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDisplayDetails(!isDisplayDetails);
  };

  return (
    <div className="mt-6">
      <div className="mt-4 mb-4 flex justify-between items-center ">
        <div>
          <span className={getMethodStyle(methodType)}>
            {methodType.toUpperCase()}
          </span>
          <span className="ml-4">{method.path}</span>
        </div>
        <div className="text-slate-500 p-1 mr-4">{method.summary}</div>
      </div>
      <div>
        <button
          className='h-7 px-4 rounded-full border border-slate-200 text-slate-500'
          onClick={handleToggleClick}
        >
          {!isDisplayDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
      {isDisplayDetails && (
        <div className="mt-2">
          <Parameters parameters={method.parameters} />
          <Responses responses={method.responses} />
        </div>
      )}
    </div>
  );
};

export default MethodItem;
