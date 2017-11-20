## getchaintxstats ( nblocks blockhash )

Compute statistics about the total number and rate of transactions in the chain.

## Arguments:
1. nblocks      (numeric, optional) Size of the window in number of blocks (default: one month).
2. "blockhash"  (string, optional) The hash of the block that ends the window.

## Result:
{
  "time": xxxxx,        (numeric) The timestamp for the statistics in UNIX format.
  "txcount": xxxxx,     (numeric) The total number of transactions in the chain up to that point.
  "txrate": x.xx,       (numeric) The average rate of transactions per second in the window.
}

## Examples:
`particl-cli getchaintxstats `
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintxstats", "params": [2016] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
