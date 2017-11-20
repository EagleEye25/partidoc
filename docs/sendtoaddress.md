## sendtoaddress "address" amount ( "comment" "comment-to" subtractfeefromamount "narration" replaceable conf_target "estimate_mode")

Send an amount to a given address.

## Arguments:
1. "address"     (string, required) The particl address to send to.
2. amount          (numeric or string, required) The amount in PART to send. eg 0.1
3. "comment"     (string, optional) A comment used to store what the transaction is for. 
                            This is not part of the transaction, just kept in your wallet.
4. "comment_to"  (string, optional) A comment to store the name of the person or organization 
                            to which you're sending the transaction. This is not part of the 
                            transaction, just kept in your wallet.
5. subtractfeefromamount  (boolean, optional, default=false) The fee will be deducted from the amount being sent.
                            The recipient will receive less PART than you enter in the amount field.
6. "narration"   (string, optional) Up to 24 characters sent with the transaction.
                            The narration is stored in the blockchain and is sent encrypted when destination is a stealth address and unencrypted otherwise.
                             The recipient will receive less bitcoins than you enter in the amount field.
7. replaceable            (boolean, optional) Allow this transaction to be replaced by a transaction with higher fees via BIP 125
8. conf_target            (numeric, optional) Confirmation target (in blocks)
9. "estimate_mode"      (string, optional, default=UNSET) The fee estimate mode, must be one of:
       "UNSET"
       "ECONOMICAL"
       "CONSERVATIVE"

## Result:
"txid"           (string) The transaction id.

## Examples:
`particl-cli sendtoaddress "PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR" 0.1`
`particl-cli sendtoaddress "PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR" 0.1 "donation" "seans outpost"`
`particl-cli sendtoaddress "PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR" 0.1 "" "" true`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR", 0.1, "donation", "seans outpost"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`
