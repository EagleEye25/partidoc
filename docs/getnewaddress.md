## getnewaddress ( "account" bech32 hardened 256bit)

Returns a new Particl address for receiving payments, key is saved in wallet.
If 'account' is specified (DEPRECATED), it is added to the address book 
so payments received with the address will be credited to 'account'.

## Arguments:
1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
2. bech32             (bool, optional) Use Bech32 encoding.
3. hardened           (bool, optional) Derive a hardened key.
4. 256bit             (bool, optional) Use 256bit hash.

## Result:
"address"           (string) The new particl address

## Examples:
`particl-cli getnewaddress `
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
