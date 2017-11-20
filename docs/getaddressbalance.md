## getaddressbalance

Returns the balance for an address(es) (requires addressindex to be enabled).

## Arguments:
{
  "addresses"
    [
      "address"  (string) The base58check encoded address
      ,...
    ]
}

## Result:
{
  "balance"  (string) The current balance in satoshis
  "received"  (string) The total number of satoshis received (including change)
}

## Examples:
`particl-cli getaddressbalance '{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}'`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["Pb7FLL3DyaAVP2eGfRiEkj4U8ZJ3RHLY9g"]}] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
