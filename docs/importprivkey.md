## importprivkey "privkey" ( "label" ) ( rescan )

Adds a private key (as returned by dumpprivkey) to your wallet.

## Arguments:
1. "privkey"          (string, required) The private key (see dumpprivkey)
2. "label"            (string, optional, default="") An optional label
3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions

## Note: This call can take minutes to complete if rescan is true.

## Examples:

Dump a private key
`particl-cli dumpprivkey "myaddress"`

Import the private key with rescan
`particl-cli importprivkey "mykey"`

Import using a label and without rescan
`particl-cli importprivkey "mykey" "testing" false`

Import using default blank label and without rescan
`particl-cli importprivkey "mykey" "" false`

As a JSON-RPC call
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey", "params": ["mykey", "testing", false] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`