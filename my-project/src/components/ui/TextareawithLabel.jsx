// TextareaWithLabel.jsx
const TextareaWithLabel = ({ id, label, placeholder, value, onChange }) => (
  <div className="md:col-span-2 space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-800">
      {label}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
    />
  </div>
);

export default TextareaWithLabel;