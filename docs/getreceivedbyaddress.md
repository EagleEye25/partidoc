## getreceivedbyaddress "address" ( minconf )

Returns the total amount received by the given particl address in transactions with at least minconf confirmations.

## Arguments:
1. "address"         (string, required) The particl address for transactions.
2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.

## Result:
amount   (numeric) The total amount in PART received at this address.

## Examples:

The amount from transactions with at least 1 confirmation
`particl-cli getreceivedbyaddress "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc"`

The amount including unconfirmed transactions, zero confirmations
`particl-cli getreceivedbyaddress "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc" 0`

The amount with at least 6 confirmation
`particl-cli getreceivedbyaddress "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc" 6`

As a json rpc call
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress", "params": ["PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
