import { Response } from "@/types/types";

const ResponseItem = ({ code, response }: { code: string; response: Response }) => {
  return (
    <li>
      <div>
        <code className="text-sky-400 text-xs">{`${code} ~ ${response.description}`}</code>
      </div>
    </li>
  );
};

export default ResponseItem;
