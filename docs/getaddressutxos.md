## getaddressutxos

Returns all unspent outputs for an address (requires addressindex to be enabled).

## Arguments:
{
  "addresses"
    [
      "address"  (string) The base58check encoded address
      ,...
    ],
  "chainInfo"  (boolean) Include chain info with results
}

Result
[
  {
    "address"  (string) The address base58check encoded
    "txid"  (string) The output txid
    "height"  (number) The block height
    "outputIndex"  (number) The output index
    "script"  (strin) The script hex encoded
    "satoshis"  (number) The number of satoshis of the output
  }
]

## Examples:
`particl-cli getaddressutxos '{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}'`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressutxos", "params": [{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
