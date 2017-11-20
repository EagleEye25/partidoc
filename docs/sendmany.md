## sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] replaceable conf_target "estimate_mode")

Send multiple times. Amounts are double-precision floating point numbers.

## Arguments:
1. "fromaccount"         (string, required) DEPRECATED. The account to send the funds from. Should be "" for the default account
2. "amounts"             (string, required) A json object with addresses and amounts
    {
      "address":amount   (numeric or string) The particl address is the key, the numeric amount (can be string) in PART is the value
      ,...
    }
3. minconf                 (numeric, optional, default=1) Only use the balance confirmed at least this many times.
4. "comment"             (string, optional) A comment
5. "subtractfeefrom"     (array, optional) A json array with addresses.
                           The fee will be equally deducted from the amount of each selected address.
                           Those recipients will receive less PART than you enter in their corresponding amount field.
                           If no addresses are specified here, the sender pays the fee.
    [
      "address"          (string) Subtract fee from this address
      ,...
    ]
6. replaceable            (boolean, optional) Allow this transaction to be replaced by a transaction with higher fees via BIP 125
7. conf_target            (numeric, optional) Confirmation target (in blocks)
8. "estimate_mode"      (string, optional, default=UNSET) The fee estimate mode, must be one of:
       "UNSET"
       "ECONOMICAL"
       "CONSERVATIVE"

## Result:
"txid"                   (string) The transaction id for the send. Only 1 transaction is created regardless of 
                                    the number of addresses.

## Examples:

Send two amounts to two different addresses:
`particl-cli sendmany "" "{\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\":0.01,\"PvhJj4j9s6SsuRsAkPZUfHPCjZRNKLeuqP\":0.02}"`

Send two amounts to two different addresses, setting the confirmation and comment:
`particl-cli sendmany "" "{\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\":0.01,\"PvhJj4j9s6SsuRsAkPZUfHPCjZRNKLeuqP\":0.02}" 6 "testing"`

Send two amounts to two different addresses, subtract fee from amount:
`particl-cli sendmany "" "{\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\":0.01,\"PvhJj4j9s6SsuRsAkPZUfHPCjZRNKLeuqP\":0.02}" 1 "" "[\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\",\"PvhJj4j9s6SsuRsAkPZUfHPCjZRNKLeuqP\"]"`

As a json rpc call
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendmany", "params": ["", "{\"PswXnorAgjpAtaySWkPSmWQe3Fc8LmviVc\":0.01,\"PvhJj4j9s6SsuRsAkPZUfHPCjZRNKLeuqP\":0.02}", 6, "testing"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
