## signmessage "address" "message"

Sign a message with the private key of an address

## Arguments:
1. "address"         (string, required) The particl address to use for the private key.
2. "message"         (string, required) The message to create a signature for.

## Result:
"signature"          (string) The signature of the message encoded in base 64

## Examples:

Unlock the wallet for 30 seconds
`particl-cli walletpassphrase "mypassphrase" 30`

Create the signature
`particl-cli signmessage "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc" "my message"`

Verify the signature
`particl-cli verifymessage "PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc" "signature" "my message"`

As json rpc
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "signmessage", "params": ["PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc", "my message"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
