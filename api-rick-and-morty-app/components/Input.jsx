export default function Input({ value, onChange, placeholder }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/2"
      />
    );
  }
  