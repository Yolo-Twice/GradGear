const handleRemarkSubmit = async (remark) => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3001/api/feedback"
      : "https://gradgearbackend.onrender.com/api/feedback"; 

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
