import ParameterItem from './ParameterItem';
import { Parameter } from '@/types/types';

const Parameters = ({ parameters }: { parameters: Parameter[] }) => {
  return (
    <div>
      <h3 className="text-base mb-2">Parameters</h3>
      {parameters.length > 0 ? (
        <ul className='mb-2 p-2 rounded-md bg-slate-700'>
          {parameters.map((parameter: any) => (
            <ParameterItem key={parameter.name} parameter={parameter} />
          ))}
        </ul>
      ) : (
        <div className="text-slate-500 dark:text-slate-400">No parameters</div>
      )}
    </div>
  );
};

export default Parameters;
