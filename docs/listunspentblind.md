## listunspentblind ( minconf maxconf  ["addresses",...] [include_unsafe] )

Returns array of unspent transaction blind outputs
with between minconf and maxconf (inclusive) confirmations.
Optionally filter to only include txouts paid to specified addresses.

## Arguments:
1. minconf          (numeric, optional, default=1) The minimum confirmations to filter
2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter
3. "addresses"    (string) A json array of particl addresses to filter
    [
      "address"   (string) particl address
      ,...
    ]
4. include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend
                  because they come from unconfirmed untrusted transactions or unconfirmed
                  replacement transactions (cases where we are less sure that a conflicting
                  transaction won't be mined).
5. query_options    (json, optional) JSON with query options
    {
      "minimumAmount"    (numeric or string, default=0) Minimum value of each UTXO in PART
      "maximumAmount"    (numeric or string, default=unlimited) Maximum value of each UTXO in PART
      "maximumCount"     (numeric or string, default=unlimited) Maximum number of UTXOs
      "minimumSumAmount" (numeric or string, default=unlimited) Minimum sum value of all UTXOs in PART
      "cc_format"        (bool, default=false) Format for coincontrol
    }

Result
[                   (array of json object)
  {
    "txid" : "txid",          (string) the transaction id 
    "vout" : n,               (numeric) the vout value
    "address" : "address",    (string) the particl address
    "account" : "account",    (string) DEPRECATED. The associated account, or "" for the default account
    "scriptPubKey" : "key",   (string) the script key
    "amount" : x.xxx,         (numeric) the transaction output amount in PART
    "confirmations" : n,      (numeric) The number of confirmations
    "redeemScript" : n        (string) The redeemScript if scriptPubKey is P2SH
  }
  ,...
]

Examples
`particl-cli listunspentblind `
`particl-cli listunspentblind 6 9999999 "[\"PfqK97PXYfqRFtdYcZw82x3dzPrZbEAcYa\",\"Pka9M2Bva8WetQhQ4ngC255HAbMJf5P5Dc\"]"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listunspentblind", "params": [6, 9999999 "[\"PfqK97PXYfqRFtdYcZw82x3dzPrZbEAcYa\",\"Pka9M2Bva8WetQhQ4ngC255HAbMJf5P5Dc\"]"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
