## getaccount "address"

DEPRECATED. Returns the account associated with the given address.

## Arguments:
1. "address"         (string, required) The particl address for account lookup.

## Result:
"accountname"        (string) the account address

## Examples:
`particl-cli getaccount "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getaccount", "params": ["PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
