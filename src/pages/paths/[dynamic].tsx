import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import PathItem from '@/components/Paths/PathItem';

import { getInitialData } from '@/utils/api';

import { Path } from '@/types/types';

export const getStaticProps: GetStaticProps = async context => {
  const path = context.params?.dynamic;
  const data = await getInitialData();
  const { paths } = data;
  const pathData = paths.find((p: any) => p.pathId === path);

  return {
    props: {
      pathData: pathData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getInitialData();
  const pathsWithParams = data.paths.map((path: any) => ({
    params: { dynamic: path.pathId },
  }));

  return {
    paths: pathsWithParams,
    fallback: false, // fallback to 404 if not found
  };
};

const PathPage = ({ pathData }: { pathData: Path }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{pathData.path}</title>
      </Head>
      <PathItem path={pathData} />
      <Link
        className="m-6 font-medium text-blue-600 dark:text-blue-500"
        href={'/'}
      >
        Back
      </Link>
    </>
  );
};

export default PathPage;
