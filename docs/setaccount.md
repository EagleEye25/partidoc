## setaccount "address" "account"

DEPRECATED. Sets the account associated with the given address.

## Arguments:
1. "address"         (string, required) The particl address to be associated with an account.
2. "account"         (string, required) The account to assign the address to.

## Examples:
`particl-cli setaccount "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc" "tabby"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "setaccount", "params": ["PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc", "tabby"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
