interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  label: string;
  type?: string;
  id?: string;
  className?: string;
  name?: string;
  htmlFor?: string;
  labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  className,
  id,
  type,
  name,
  placeholder,
  htmlFor,
  labelClassName,
}) => {
  return (
    <div className="mb-2">
      <label
        className={`mb-2 block text-sm text-gray-600 ${labelClassName}`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 min-h-8 p-2 ${className}`}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
