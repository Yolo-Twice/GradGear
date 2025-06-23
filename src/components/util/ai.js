export async function queryModel(prompt) {
  try {
    // Convert the array into a comma-separated string
    const promptString = Array.isArray(prompt) ? prompt.join(', ') : String(prompt);

    const res = await fetch('http://192.168.1.100:3001/api/infer', {
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
