const Input = ({ title, type, placeholder, value, set }) => {
  return (
    <fieldset className="w-full border-[1px] border-neutral-400 rounded-lg">
      <legend className="ml-6 px-3">{title}</legend>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => set(e.target.value)}
        className="w-full bg-transparent p-2 focus:outline-none"
        autoComplete={"on"}
        required
      />
    </fieldset>
  );
};

export default Input;
