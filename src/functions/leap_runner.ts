import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function leap_runner(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('leap_runner', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: leap_runner
});
