import { InitialData } from '@/types/types';

export const getInitialData: any = async () => {
  const res = await fetch('https://petstore.swagger.io/v2/swagger.json');
  const data = await res.json();

  const { info, tags, paths } = data;

  const formattedPaths = Object.keys(paths).map(path => {
    const pathData = paths[path];
    const methods = Object.keys(pathData);
    const methodData = methods.map(method => {
      const methodInfo = pathData[method];
      return {
        method,
        ...methodInfo,
        path,
      };
    });
    return {
      path,
      pathId: stripPath(path),
      methods: methodData,
      tag: methodData[0]?.tags[0],
    };
  });

  const initialData: InitialData = {
    info,
    tags,
    paths: formattedPaths,
  };

  return initialData;
};

const stripPath = (path: string): string => {
  return path.replace(/\//g, '').replace(/{|}/g, '');
};
