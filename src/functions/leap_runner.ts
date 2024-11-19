import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function leap_runner(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  try {
    // Ensure the request is a POST and parse the JSON body
    const body = await request.json();

    // Log the parsed JSON body
    context.log("Received JSON body:", body);

    // Return the JSON body in the response
    return {
      body: `recieved message`,
    };
  } catch (error) {
    context.log("Error parsing JSON:", error.message);

    // Handle errors gracefully
    return {
      body: "Invalid JSON format",
      status: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
}

app.http("leap_runner", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: leap_runner,
});
