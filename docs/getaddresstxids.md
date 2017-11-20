## getaddresstxids

Returns the txids for an address(es) (requires addressindex to be enabled).

## Arguments:
{
  "addresses"
    [
      "address"  (string) The base58check encoded address
      ,...
    ]
  "start" (number) The start block height
  "end" (number) The end block height
}

## Result:
[
  "transactionid"  (string) The transaction id
  ,...
]

## Examples:
`particl-cli getaddresstxids '{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}'`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddresstxids", "params": [{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
