import { Parameter } from "@/types/types";

const ParameterItem = ({ parameter }: { parameter: Parameter }) => {
  const { name, description, required } = parameter;
  const requiredString = `${required}`;

  return (
    <div className="m-1 p-1">
      <code className="text-sky-400 text-xs" >
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Required: {requiredString}</p>
      </code>
    </div>
  );
};

export default ParameterItem;
