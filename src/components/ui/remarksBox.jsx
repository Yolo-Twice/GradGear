import { useState } from "react";

export default function RemarksBox({ onSubmit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const remark = e.target.remark.value.trim();
    if (remark) {
      onSubmit?.(remark);
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 3000); // hide message after 3s
    }
  };

  return (
    <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mt-16">
      <h2 className="text-lg font-semibold mb-4 text-left">Spot a weird bug or have a cool suggestion? We'd love to know!</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          name="remark"
          rows="5"
          placeholder="Share your thoughts..."
          className="w-full bg-[#2a2a2a] border border-gray-700 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7289da] placeholder-gray-400 resize-none"
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-[#7289da] hover:bg-[#53639f] transition-colors text-white px-6 py-2 rounded-xl font-medium"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <p className="text-green-400 text-sm mt-4">Thanks for your input!</p>
      )}
    </div>
  );
}
