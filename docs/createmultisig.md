## createmultisig nrequired ["key",...]

Creates a multi-signature address with n signature of m keys required.
It returns a json object with the address and redeemScript.

## Arguments:
1. nrequired      (numeric, required) The number of required signatures out of the n keys or addresses.
2. "keys"       (string, required) A json array of keys which are particl addresses or hex-encoded public keys
     [
       "key"    (string) particl address or hex-encoded public key
       ,...
     ]

## Result:
{
  "address":"multisigaddress",  (string) The value of the new multisig address.
  "redeemScript":"script"       (string) The string value of the hex-encoded redemption script.
}

## Examples:

Create a multisig address from 2 addresses
`particl-cli createmultisig 2 "[\"PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR\",\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\"]"`

As a json rpc call
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "createmultisig", "params": [2, "[\"PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR\",\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\"]"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
