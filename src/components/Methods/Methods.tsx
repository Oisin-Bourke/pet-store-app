import MethodItem from './MethodItem';
import { Method } from '@/types/types';

const Methods = ({ methods }: { methods: Method[] }) => {
  return (
    <ul className='mt-2 mb-2'>
      {methods.map((method: any) => (
        <MethodItem key={method.operationId} method={method} />
      ))}
    </ul>
  );
};

export default Methods;
