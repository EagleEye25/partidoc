## getwalletinfo
Returns an object containing various wallet state info.

## Result:
{
  "walletname": xxxxx,             (string) the wallet name
  "walletversion": xxxxx,        (numeric) the wallet version
  "total_balance": xxxxxxx,      (numeric) the total balance of the wallet in PART
  "balance": xxxxxxx,            (numeric) the total confirmed balance of the wallet in PART
  "blind_balance": xxxxxxx,      (numeric) the total confirmed blinded balance of the wallet in PART
  "anon_balance": xxxxxxx,       (numeric) the total confirmed anon balance of the wallet in PART
  "staked_balance": xxxxxxx,     (numeric) the total staked balance of the wallet in PART (non-spendable until maturity)
  "unconfirmed_balance": xxx,    (numeric) the total unconfirmed balance of the wallet in PART
  "immature_balance": xxxxxx,    (numeric) the total immature balance of the wallet in PART
  "reserve": xxxxxx,             (numeric) the reserve balance of the wallet in PART
  "txcount": xxxxxxx,            (numeric) the total number of transactions in the wallet
  "keypoololdest": xxxxxx,       (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool
  "keypoolsize": xxxx,           (numeric) how many new keys are pre-generated
  "encryptionstatus":            (string) unencrypted/locked/unlocked
  "unlocked_until": ttt,         (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
  "paytxfee": x.xxxx,            (numeric) the transaction fee configuration, set in PART/kB
  "hdmasterkeyid": "<hash160>" (string) the Hash160 of the HD master pubkey
}

## Examples:
`particl-cli getwalletinfo `
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getwalletinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
