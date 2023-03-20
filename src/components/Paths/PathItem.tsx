import Link from 'next/link';
import Methods from '@/components/Methods/Methods';
import { Path } from '@/types/types';

const PathItem = ({ path }: { path: Path }) => {
  return (
    <div className="m-6 rounded-lg p-8 bg-slate-800">
      <Link href={`/paths/${path.pathId}`}>
        <div className='mb-2 p-2 rounded-md bg-slate-700'>
          <h2 className="ml-2 text-lg placeholder:m-2 text-sky-400">{path.path}</h2>
        </div>
        <Methods methods={path.methods} />
      </Link>
    </div>
  );
};

export default PathItem;
