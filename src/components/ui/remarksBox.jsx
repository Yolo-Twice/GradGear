import { useState } from "react";
import { CheckCircle } from "lucide-react";
export default function RemarksBox({ onSubmit }) {
    const [submitted, setSubmitted] = useState(false);
    const handleRemarkSubmit = async (remark) => {
        const API_URL = "https://gradgearbackend.onrender.com/api/feedback"

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ remark }),
            });

            const data = await response.json();
            console.log("✅ Server response:", data);

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert(data.error || "Something went wrong.");
            }
        } catch (err) {
            console.error("❌ Failed to send remark:", err);
            alert("Could not send remark. Check console.");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const remark = e.target.remark.value.trim();
        if (remark) {
            handleRemarkSubmit(remark)
            e.target.reset()
        }
    };

    const resetForm = () => {
        setSubmitted(false);
    };

    return (
        <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mt-16">
            {!submitted ? (
                <>
                    <h2 className="text-lg font-semibold mb-4 text-left">
                        Spot a weird bug or have a cool suggestion? We'd love to know!
                    </h2>
                    <form onSubmit={handleFormSubmit} className="flex flex-col">
                        <textarea
                            name="remark"
                            rows="5"
                            placeholder="Share your thoughts..."
                            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7289da] placeholder-gray-400 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 bg-[#7289da] hover:bg-[#53639f] transition-colors text-white px-6 py-2 rounded-xl font-medium text-xl self-center"
                        >
                            Submit
                        </button>
                    </form>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <div className="bg-[#7289da] p-4 rounded-full">
                        <CheckCircle className="text-white w-10 h-10" strokeWidth={2.5} />
                    </div>
                    <p className="text-lg text-center">Thanks for your input!</p>
                    <button
                        onClick={resetForm}
                        className="bg-[#2a2a2a] border border-gray-700 hover:bg-[#363636] transition-colors px-4 py-2 rounded-xl text-sm text-white"
                    >
                        Add another remark
                    </button>
                </div>
            )}
        </div>
    );
}
