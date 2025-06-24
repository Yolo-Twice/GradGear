export default async function queryModel(prompt) {
  try {
    // Convert the array into a comma-separated string
    const promptString = Array.isArray(prompt) ? prompt.map(obj => JSON.stringify(obj)).join(', ') : String(prompt);
    const res = await fetch('https://gradgearbackend.onrender.com/api/infer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promptString }),
    });

    const data = await res.json();
    return data.generated_text || 'No response generated.';
  } catch (err) {
    console.error('Error querying backend:', err);
    return 'Sorry, something went wrong on the server.';
  }
}
