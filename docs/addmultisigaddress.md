## addmultisigaddress nrequired ["key",...] ( "account" )

Add a nrequired-to-sign multisignature address to the wallet.
Each key is a Particl address or hex-encoded public key.
If 'account' is specified (DEPRECATED), assign address to that account.

## Arguments:
1. nrequired        (numeric, required) The number of required signatures out of the n keys or addresses.
2. "keys"         (string, required) A json array of particl addresses or hex-encoded public keys
     [
       "address"  (string) particl address or hex-encoded public key
       ...,
     ]
3. "account"      (string, optional) DEPRECATED. An account to assign the addresses to.

## Result:
"address"         (string) A particl address associated with the keys.

## Examples:

Add a multisig address from 2 addresses
`particl-cli addmultisigaddress 2 "[\"PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR\",\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\"]"`

As json rpc call
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "addmultisigaddress", "params": [2, "[\"PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR\",\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\"]"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
