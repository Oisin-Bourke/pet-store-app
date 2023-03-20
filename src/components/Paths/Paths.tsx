import PathItem from '@/components/Paths/PathItem';
import { Path } from '@/types/types';

const Paths = ({ paths }: { paths: Path[] }) => {
  return (
    <ul>
      {paths.map((path: Path) => (
        <PathItem key={path.path} path={path} />
      ))}
    </ul>
  );
};

export default Paths;
