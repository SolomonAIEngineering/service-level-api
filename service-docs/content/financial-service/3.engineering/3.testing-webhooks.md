## Plaid Webhooks
To properly test plaid webhooks, you must ensure that the service and all dependencies are running locally. 
Additionally, you must ensure that you can access our ngrok account [here](https://dashboard.ngrok.com/user/settings)
with the following credentials
```bash
email: yoan@simfinii.com
password: Granada123!
```
Once you are able to access the ngrok account, on the left panel, you should see a sub-tab called tunnels. 
Click on that and that should enable you to see the active agents. From the active agents tab, you can clik and copy the tunnel of interest. 

Semantically, it should follow the below configuration
```bash
https://d30b-50-35-101-189.ngrok-free.app
```

Now, copy the following host defintion "d30b-50-35-101-189.ngrok-free.app" into the file `/internal/plaidhandler/testutils.go` in the `var` definitions at the top of the file `ex: var PLAID_WEBHOOKS_DOMAIN       = "d30b-50-35-101-189.ngrok-free.app"`

Now, place a breakpoint in the test present in the file `/internal/plaidhandler/token_test.go` in the function named `TestPlaidWrapper_TriggerWebhookForTest`. This should trigger the plaid webhook endpoint enabling you to properly test its functionality.

## Stripe Payments
To properly test Stripe payments webhooks, you must ensure that the service and all dependencies are running locally. Additionally, you need to set up and run the Stripe CLI on your local machine. Below are the instructions you need to follow to perform extensive integration tests of the Stripe webhook implementations:

1. **Install Dependencies:**
   - Install the latest version of Stripe CLI by following the official Stripe documentation for your operating system.
   - Ensure you have a running instance of your web service that handles Stripe webhooks locally. This can be your development environment or a local server.

    ```bash
        # open a shell and run the following command to start the service locally
        make start

        # open up another shell terminal and ensure stripe cli is running 
        stripe 

        # if an error occurs then please install the stripe cli 
        brew install stripe/stripe-cli/stripe  
    ```

2. **Configure Stripe CLI:**
   - Open your terminal and authenticate the Stripe CLI by running the command: `stripe login`
   - Follow the authentication process prompted in the terminal, which includes opening a web page to authorize the CLI.

3. **Forward Webhooks to Local Server:**
   - In the terminal, use the command: `stripe listen --forward-to <local_server_url>/webhook-endpoint`
   - Replace `<local_server_url>` with the URL of your locally running web service where the webhook endpoint is configured to receive Stripe events.

    ```bash
        # in the case of the service, run the following command    
        stripe listen --forward-to localhost:9898/webhook    
    ```


4. **Create Test Events:**
   - In another terminal window, use the Stripe CLI to trigger test events. For example, you can simulate a payment intent succeeded event by running: `stripe trigger payment_intent.succeeded`.
   - Refer to the Stripe CLI documentation for a list of available test event types and their corresponding triggers.

5. **Verify Webhook Handling:**
   - Check your locally running web service logs or console output to ensure that it receives the forwarded webhook events.
   - Validate that your webhook endpoint correctly processes the events, such as updating your application's data or triggering any necessary actions.

By following these instructions, you can extensively test your Stripe webhook implementations by simulating various events and ensuring your local server handles them correctly. This approach allows you to verify the integration between your web service and the Stripe API without relying on the production environment or making live charges.

