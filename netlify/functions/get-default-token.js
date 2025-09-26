// netlify/functions/get-default-token.js
exports.handler = async function(event) {
  try {
    const token = process.env.DEFAULT_PUBLIC_TOKEN || '';
    if (!token) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'no-default-token' })
      };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'internal' }) };
  }
};
