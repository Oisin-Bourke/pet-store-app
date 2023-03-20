import { useState } from 'react';
import Head from 'next/head';
import Info from '@/components/Sections/Info/Info';
import PetStore from '@/components/Sections/PetStore/PetStore';
import Select from '@/components/Core/Select';
import { getInitialData } from '@/utils/api';
import { InitialData } from '@/types/types';

export async function getStaticProps() {
  const data = await getInitialData();

  return {
    props: {
      data,
    },
  };
}

type HomeProps = {
  data: InitialData;
};

export default function Home({ data }: HomeProps) {
  const { info, paths, tags } = data;
  const [orderedPaths, setOrderedPaths] = useState(paths);

  const reorderListBySelected = (selectedTag: string) => {
    const filteredBySelected = orderedPaths.filter(
      path => path.tag === selectedTag,
    );
    const filteredByNotSelected = orderedPaths.filter(
      path => path.tag !== selectedTag,
    );
    const updatedPaths = [...filteredBySelected, ...filteredByNotSelected];
    setOrderedPaths(updatedPaths);
  };

  return (
    <div className="font-mono flex justify-center">
      <Head>
        <title>{info.title}</title>
      </Head>
      <main className="flex flex-col max-w-4xl">
        <section>
          <Info info={info} />
        </section>
        <section>
          <Select
            defaultTag={tags[0].name}
            label="Select a tag type:"
            onReorder={reorderListBySelected}
            options={tags.map(tag => tag.name)}
          />
          <PetStore paths={orderedPaths} />
        </section>
      </main>
    </div>
  );
}
