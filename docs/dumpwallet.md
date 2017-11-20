## dumpwallet "filename"

Dumps all wallet keys in a human-readable format.

## Arguments:
1. "filename"    (string, required) The filename with path (either absolute or relative to bitcoind)

## Result:
{                           (json object)
  "filename" : {        (string) The filename with full absolute path
}

## Examples:
`particl-cli dumpwallet "test"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "dumpwallet", "params": ["test"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
