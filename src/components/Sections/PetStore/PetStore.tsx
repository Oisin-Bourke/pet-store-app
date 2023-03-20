import Paths from '@/components/Paths/Paths';
import { Path } from '@/types/types';

const PetStore = ({ paths }: { paths: Path[] }) => {
  return (
    <div>
      <Paths paths={paths} />
    </div>
  );
};

export default PetStore;
