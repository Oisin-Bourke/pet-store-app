import ResponseItem from './ResponseItem';
import { Responses } from '@/types/types';

const Responses = ({ responses }: { responses: Responses }) => {
  const keys: string[] = Object.keys(responses);

  return (
    <div>
      <h3 className="text-base mb-2">Responses</h3>
      <ul className='mb-2 p-2 rounded-md bg-slate-700'>
        {keys.map((key: string) => (
          <ResponseItem key={key} code={key} response={responses[key]} />
        ))}
      </ul>
    </div>
  );
};

export default Responses;
