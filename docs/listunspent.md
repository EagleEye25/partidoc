## listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] [query_options])

Returns array of unspent transaction outputs
with between minconf and maxconf (inclusive) confirmations.
Optionally filter to only include txouts paid to specified addresses.

## Arguments:
1. minconf          (numeric, optional, default=1) The minimum confirmations to filter
2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter
3. "addresses"      (string) A json array of particl addresses to filter
    [
      "address"     (string) particl address
      ,...
    ]
4. include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend
                  See description of "safe" attribute below.
5. query_options    (json, optional) JSON with query options
    {
      "minimumAmount"    (numeric or string, default=0) Minimum value of each UTXO in PART
      "maximumAmount"    (numeric or string, default=unlimited) Maximum value of each UTXO in PART
      "maximumCount"     (numeric or string, default=unlimited) Maximum number of UTXOs
      "minimumSumAmount" (numeric or string, default=unlimited) Minimum sum value of all UTXOs in PART
      "cc_format"        (bool, default=false) Format for coincontrol
      "include_immature" (bool, default=false) Include immature staked outputs
    }

Result
[                     (array of json object)
  {
    "txid" : "txid",        (string) the transaction id 
    "vout" : n,               (numeric) the vout value
    "address" : "address",  (string) the particl address
    "coldstaking_address"  : "address" (string) the particl address this output must stake on
    "account" : "account",  (string) DEPRECATED. The associated account, or "" for the default account
    "scriptPubKey" : "key", (string) the script key
    "amount" : x.xxx,         (numeric) the transaction output amount in PART
    "confirmations" : n,      (numeric) The number of confirmations
    "redeemScript" : n        (string) The redeemScript if scriptPubKey is P2SH
    "spendable" : xxx,        (bool) Whether we have the private keys to spend this output
    "solvable" : xxx,         (bool) Whether we know how to spend this output, ignoring the lack of keys
    "safe" : xxx              (bool) Whether this output is considered safe to spend. Unconfirmed transactions
                              from outside keys and unconfirmed replacement transactions are considered unsafe
                              and are not eligible for spending by fundrawtransaction and sendtoaddress.
  }
  ,...
]

Examples
`particl-cli listunspent `
`particl-cli listunspent 6 9999999 "[\"PfqK97PXYfqRFtdYcZw82x3dzPrZbEAcYa\",\"Pka9M2Bva8WetQhQ4ngC255HAbMJf5P5Dc\"]"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999 "[\"PfqK97PXYfqRFtdYcZw82x3dzPrZbEAcYa\",\"Pka9M2Bva8WetQhQ4ngC255HAbMJf5P5Dc\"]"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
`particl-cli listunspent 6 9999999 '[]' true '{ "minimumAmount": 0.005 }'`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
`particl-cli listunspent 1 9999999 '[]' false '{"include_immature":true}'`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [1, 9999999, [] , false, {"include_immature":true} ] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
