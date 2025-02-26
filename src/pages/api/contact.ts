// Contact Form API Endpoint
//
// This endpoint handles POST requests for the contact form submissions.
// It validates the incoming data and stores it in a Turso database.
//
// Functionality:
// 1. Creates POST request with form data (firstName, lastName, email, message)
// 2. Validates that all required fields are present
// 3. Adds current date and time to the submission
// 4. Stores the data in the Turso database
// 5. Returns appropriate response based on operation success
//
// Response Codes:
// * 201: Successfully created record
// * 400: Missing required fields
// * 500: Server/Database error
//
// Environment variables required - located in .env (is ignored by git, but trust me, it's there :D):
// * ASTRO_DB_REMOTE_URL: Turso database URL
// * ASTRO_DB_APP_TOKEN: Turso authentication token
//
// Database Schema (Contact table):
// * firstName: string
// * lastName: string
// * email: string
// * message: string
// * date: YYYY-MM-DD
// * time: hh:mm:ss

import { createClient } from "@libsql/client/web";
import type { APIRoute } from "astro";
import { getCurrentDateTime } from "../../utils/date-time";

// API endpoint for handling contact form submissions (using the POST HTTP method)
// The request variable has information about the current request - it is a standard request object
export const POST: APIRoute = async ({ request }) => {
  // Create a new client for the Turso database
  const client = createClient({
    // Using environment variables to store sensitive information
    url: import.meta.env.ASTRO_DB_REMOTE_URL,
    authToken: import.meta.env.ASTRO_DB_APP_TOKEN
  });

  // Parsing the incoming JSON data, the try-catch block is used to handle any errors
  try {
    // Store incoming form data in a variable
    const formData = await request.json();

    // Destructuring the form data for a more comfortable development experience
    const { firstName, lastName, email, message } = formData;

    // Destructuring required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400
      });
    }

    // Calling this function to get the current date and time from ../../utils/date-time.ts
    const { date, time } = getCurrentDateTime();

    // Insert into Turso database
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

    // Logging the result of the operation (can be deleted but it's useful for seeing what's happening)
    console.log("Inserted record:", result);

    // Returning a response to the client using the Response object (Fetch API interface)
    // The variable success is set to true to indicate that the operation was successful
    return new Response(JSON.stringify({ success: true }), {
      // 201 Created
      status: 201,
      headers: {
        // Sending some headers to the server so it knows we're sending a JSON etc.
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      }
    });

  } catch (error) { // Catching any errors that might occur during the operation
    // Logging the error (if it arises) to the console for debugging purposes - again, can be deleted, but no
    console.error("Database error:", error);

    // Returning a response to the client using another Response object
    // This time, an error message is sent back to the client
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500
    });
  } finally { // Finally block is executed regardless of the outcome of the try-catch block
    // Closing the client to free up resources
    await client.close();
  }
};

// Edge case handling for the GET HTTP method
// This is a simple response that tells the client that the GET method is not allowed
export const GET: APIRoute = async () => {
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