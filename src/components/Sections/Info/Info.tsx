import { Info } from '@/types/types';

const Info = ({ info }: { info: Info }) => {
  return (
    <div className="m-6 rounded-lg p-8 bg-slate-800">
      <h1 className="text-xl text-sky-400 p-2">{info.title}</h1>
      <blockquote className="p-1">
        <p className="text-mg font-medium">{info.description}</p>
      </blockquote>
      <div className="text-slate-500 p-1">Contact: {info.contact.email}</div>
      <div className="text-slate-500 p-1">{info.termsOfService}</div>
    </div>
  );
};

export default Info;
