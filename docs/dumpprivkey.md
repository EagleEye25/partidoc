## dumpprivkey "address"

Reveals the private key corresponding to 'address'.
Then the importprivkey can be used with this output

## Arguments:
1. "address"         (string, required) The particl address for the private key

## Result:
"key"                (string) The private key

## Examples:
`particl-cli dumpprivkey "myaddress"`
`particl-cli importprivkey "mykey"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "dumpprivkey", "params": ["myaddress"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
