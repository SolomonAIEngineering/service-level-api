## Webhooks 
### Item Based Webhooks
We need to ensure we provision the following sets of webhooks 
- item-based webhooks
  - ERROR
    Fired when an error is encountered with an Item. The error can be resolved by having the user go through Link’s update mode.
    ```json
        {
            "webhook_type": "ITEM",
            "webhook_code": "ERROR",
            "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
            "error": {
                "display_message": null,
                "error_code": "ITEM_LOGIN_REQUIRED",
                "error_message": "the login details of this item have changed (credentials, MFA, or required user action) and a user login is required to update this information. use Link's update mode to restore the item to a good state",
                "error_type": "ITEM_ERROR",
                "status": 400
            },
            "environment": "production"
            }
    ```
  - USER_PERMISSION_REVOKED
    - The USER_PERMISSION_REVOKED webhook is fired when an end user has used either the my.plaid.com portal or the financial institution’s consent portal to revoke the permission that they previously granted to access an Item. Once access to an Item has been revoked, it cannot be restored. If the user subsequently returns to your application, a new Item must be created for the user.
    ```json
        {
            "webhook_type": "ITEM",
            "webhook_code": "USER_PERMISSION_REVOKED",
            "error": {
                "error_code": "USER_PERMISSION_REVOKED",
                "error_message": "the holder of this account has revoked their permission for your application to access it",
                "error_type": "ITEM_ERROR",
                "status": 400
            },
            "item_id": "gAXlMgVEw5uEGoQnnXZ6tn9E7Mn3LBc4PJVKZ",
            "environment": "production"
        }
    ```
  - NEW_ACCOUNTS_AVAILABLE
    - Fired when Plaid detects a new account for Items created or updated with Account Select v2. Upon receiving this webhook, you can prompt your users to share new accounts with you through Account Select v2 update mode.
    ```json
        {
            "webhook_type": "ITEM",
            "webhook_code": "NEW_ACCOUNTS_AVAILABLE",
            "item_id": "gAXlMgVEw5uEGoQnnXZ6tn9E7Mn3LBc4PJVKZ",
            "error": null,
            "environment": "production"
        }
    ```
  - PENDING_EXPIRATION
    - Fired when an Item’s access consent is expiring in 7 days. Some Items have explicit expiration times and we try to relay this when possible to reduce service disruption. This can be resolved by having the user go through Link’s update mode.
    ```json
        {
            "webhook_type": "ITEM",
            "webhook_code": "PENDING_EXPIRATION",
            "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
            "consent_expiration_time": "2020-01-15T13:25:17.766Z",
            "environment": "production"
        }
     ```
  - WEBHOOK_UPDATE_ACKNOWLEDGED
    - Fired when an Item's webhook is updated. This will be sent to the newly specified webhook.
    ```json
        {
            "webhook_type": "ITEM",
            "webhook_code": "WEBHOOK_UPDATE_ACKNOWLEDGED",
            "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
            "error": null,
            "new_webhook_url": "https://plaid.com/example/webhook",
            "environment": "production"
        }
    ```

### Holdings Based Webhooks
#### HOLDINGS: DEFAULT_UPDATE
Fired when new or updated holdings have been detected on an investment account. The webhook typically fires in response to any newly added holdings or price changes to existing holdings, most commonly after market close.
```json 
{
  "webhook_type": "HOLDINGS",
  "webhook_code": "DEFAULT_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "error": null,
  "new_holdings": 19,
  "updated_holdings": 0,
  "environment": "production"
}
```
#### INVESTMENTS_TRANSACTIONS: DEFAULT_UPDATE
Fired when new transactions have been detected on an investment account.
```json
{
  "webhook_type": "INVESTMENTS_TRANSACTIONS",
  "webhook_code": "DEFAULT_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "error": null,
  "new_investments_transactions": 16,
  "canceled_investments_transactions": 0,
  "environment": "production"
}
```

### Liabilities Based Webhooks
#### DEFAULT_UPDATE
The webhook of type LIABILITIES and code DEFAULT_UPDATE will be fired when new or updated liabilities have been detected on a liabilities item.
```json
{
  "webhook_type": "LIABILITIES",
  "webhook_code": "DEFAULT_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "error": null,
  "account_ids_with_new_liabilities": [
    "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58",
    "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp"
  ],
  "account_ids_with_updated_liabilities": {
    "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58": [
      "past_amount_due"
    ]
  },
  "environment": "production"
}
```

### Transactions Webhooks

#### SYNC_UPDATES_AVAILABLE
Fired when an Item's transactions change. This can be due to any event resulting in new changes, such as an initial 30-day transactions fetch upon the initialization of an Item with transactions, the backfill of historical transactions that occurs shortly after, or when changes are populated from a regularly-scheduled transactions update job. It is recommended to listen for the SYNC_UPDATES_AVAILABLE webhook when using the /transactions/sync endpoint. Note that when using /transactions/sync the older webhooks INITIAL_UPDATE, HISTORICAL_UPDATE, DEFAULT_UPDATE, and TRANSACTIONS_REMOVED, which are intended for use with /transactions/get, will also continue to be sent in order to maintain backwards compatibility. It is not necessary to listen for and respond to those webhooks when using /transactions/sync.

After receipt of this webhook, the new changes can be fetched for the Item from /transactions/sync.

Note that to receive this webhook for an Item, /transactions/sync must have been called at least once on that Item. This means that, unlike the INITIAL_UPDATE and HISTORICAL_UPDATE webhooks, it will not fire immediately upon Item creation. If /transactions/sync is called on an Item that was not initialized with Transactions, the webhook will fire twice: once the first 30 days of transactions data has been fetched, and a second time when all available historical transactions data has been fetched.

This webhook will typically not fire in the Sandbox environment, due to the lack of dynamic transactions data. To test this webhook in Sandbox, call /sandbox/item/fire_webhook.

```json
{
  "webhook_type": "TRANSACTIONS",
  "webhook_code": "SYNC_UPDATES_AVAILABLE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "initial_update_complete": true,
  "historical_update_complete": false,
  "environment": "production"
}
```

#### RECURRING_TRANSACTIONS_UPDATE
Fired when recurring transactions data is updated. This includes when a new recurring stream is detected or when a new transaction is added to an existing recurring stream. The RECURRING_TRANSACTIONS_UPDATE webhook will also fire when one or more attributes of the recurring stream changes, which is usually a result of the addition, update, or removal of transactions to the stream.
After receipt of this webhook, the updated data can be fetched from /transactions/recurring/get.
```json
{
  "webhook_type": "TRANSACTIONS",
  "webhook_code": "RECURRING_TRANSACTIONS_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "account_ids": [
    "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
    "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDff"
  ],
  "environment": "production"
}
```

#### INITIAL_UPDATE
Fired when an Item's initial transaction pull is completed. Once this webhook has been fired, transaction data for the most recent 30 days can be fetched for the Item. If Account Select v2 is enabled, this webhook will also be fired if account selections for the Item are updated, with new_transactions set to the number of net new transactions pulled after the account selection update.

This webhook is intended for use with /transactions/get; if you are using the newer /transactions/sync endpoint, this webhook will still be fired to maintain backwards compatibility, but it is recommended to listen for and respond to the SYNC_UPDATES_AVAILABLE webhook instead.
```json
{
  "webhook_type": "TRANSACTIONS",
  "webhook_code": "INITIAL_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "error": null,
  "new_transactions": 19,
  "environment": "production"
}
```

#### HISTORICAL_UPDATE
Fired when an Item's historical transaction pull is completed and Plaid has prepared as much historical transaction data as possible for the Item. Once this webhook has been fired, transaction data beyond the most recent 30 days can be fetched for the Item. If Account Select v2 is enabled, this webhook will also be fired if account selections for the Item are updated, with new_transactions set to the number of net new transactions pulled after the account selection update.

This webhook is intended for use with /transactions/get; if you are using the newer /transactions/sync endpoint, this webhook will still be fired to maintain backwards compatibility, but it is recommended to listen for and respond to the SYNC_UPDATES_AVAILABLE webhook instead.

```json
{
  "webhook_type": "TRANSACTIONS",
  "webhook_code": "HISTORICAL_UPDATE",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "error": null,
  "new_transactions": 231,
  "environment": "production"
}
```

#### TRANSACTIONS_REMOVED

Fired when transaction(s) for an Item are deleted. The deleted transaction IDs are included in the webhook payload. Plaid will typically check for deleted transaction data several times a day.

This webhook is intended for use with /transactions/get; if you are using the newer /transactions/sync endpoint, this webhook will still be fired to maintain backwards compatibility, but it is recommended to listen for and respond to the SYNC_UPDATES_AVAILABLE webhook instead.

```json
{
  "webhook_type": "TRANSACTIONS",
  "webhook_code": "TRANSACTIONS_REMOVED",
  "item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
  "removed_transactions": [
    "yBVBEwrPyJs8GvR77N7QTxnGg6wG74H7dEDN6",
    "kgygNvAVPzSX9KkddNdWHaVGRVex1MHm3k9no"
  ],
  "error": null,
  "environment": "production"
}
```