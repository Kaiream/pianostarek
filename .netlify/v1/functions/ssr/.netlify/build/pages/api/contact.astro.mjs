import { createClient } from '@libsql/client/web';
export { renderers } from '../../renderers.mjs';

function getCurrentDateTime() {
  let serverTime = new Date();
  const datePraha = serverTime.toLocaleDateString('cs-CZ', { timeZone: 'Europe/Prague' });
  const timePraha = serverTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });

  return {
    date: datePraha,
    time: timePraha
  };
}

const POST = async ({ request }) => {
  const client = createClient({
    // Using environment variables to store sensitive information
    url: "libsql://pianostarek-kaiream.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA0MDQ1NTMsImlkIjoiZTIwZGE5OTgtMGRkYS00ZjUwLWIwMDItMGFlMTRjOGJlMmZlIn0.8CPqyNJ8mXmL47Jq9rMbfWLR4epSVC-2v2eAcvrI1kDjTrNCANP9tlsQl87ck0DT1EQL-QV0C6U9Qe4dorgICQ"
  });
  try {
    const formData = await request.json();
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400
      });
    }
    const { date, time } = getCurrentDateTime();
    const result = await client.execute({
      // SQL query for inserting data into the Contact table, the values are passed as arguments
      // The ? are placeholders for the actual values, they are replaced by the values in the args array
      sql: `INSERT INTO Contact (firstName, lastName, email, message, date, time) 
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [
        firstName,
        lastName,
        email,
        message,
        date,
        time
      ]
    });
    console.log("Inserted record:", result);
    return new Response(JSON.stringify({ success: true }), {
      // 201 Created
      status: 201,
      headers: {
        // Sending some headers to the server so it knows we're sending a JSON etc.
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500
    });
  } finally {
    await client.close();
  }
};
const GET = async () => {
  return new Response(JSON.stringify({
    error: "Method not allowed"
  }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Allow": "POST"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
