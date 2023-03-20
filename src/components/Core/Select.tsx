import React, { useEffect, useState } from 'react';

type SelectProps = {
  defaultTag: string;
  label: string;
  onReorder: (selectedTag: string) => void;
  options: string[];
};

const Select = ({ defaultTag, label, onReorder, options }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultTag);

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onReorder(selectedOption);
  }, [selectedOption]);

  return (
    <label className="max-w-xs block ml-6 mb-2 text-sm font-medium text-white">
      {label}
      <select
        className="mt-2 first-line:max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
