/* eslint-disable react/prop-types */

export default function TextInput({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block ml-3 leading-6 text-gray-900 text-md"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="block w-full rounded-[15px] pl-3 bg-[#D9D9D9] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />
      </div>
    </div>
  );
}
