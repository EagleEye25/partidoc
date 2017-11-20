## sendtypeto "typein" "typeout" [{address: , amount: , narr: , subfee:},...] ("comment" "comment-to" ringsize inputs_per_sig test_fee coin_control)

Send part to multiple outputs.

## Arguments:
1. "typein"          (string, required) part/blind/anon
2. "typeout"         (string, required) part/blind/anon
3. "outputs"         (json, required) Array of output objects
    3.1 "address"    (string, required) The particl address to send to.
    3.2 "amount"     (numeric or string, required) The amount in PART to send. eg 0.1
    3.x "narr"       (string, optional) Up to 24 character narration sent with the transaction.
    3.x "subfee"     (boolean, optional, default=false) The fee will be deducted from the amount being sent.
    3.x "script"     (string, optional) Hex encoded script, will override the address.
4. "comment"         (string, optional) A comment used to store what the transaction is for. 
                            This is not part of the transaction, just kept in your wallet.
5. "comment_to"      (string, optional) A comment to store the name of the person or organization 
                            to which you're sending the transaction. This is not part of the 
                            transaction, just kept in your wallet.
6. ringsize         (int, optional, default=4) Only applies when typein is anon.
7. inputs_per_sig   (int, optional, default=64) Only applies when typein is anon.
8. test_fee         (bool, optional, default=false) Only return the fee it would cost to send, txn is discarded.
9. coin_control     (json, optional) Coincontrol object.
   {"changeaddress": ,
    "inputs": [{"tx":, "n":},...],
    "replaceable": boolean,
       Allow this transaction to be replaced by a transaction with higher fees via BIP 125
    "conf_target": numeric,
       Confirmation target (in blocks)
    "estimate_mode": string,
       The fee estimate mode, must be one of:
           "UNSET"
           "ECONOMICAL"
           "CONSERVATIVE"
     "feeRate"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific feerate (PART per KB)
   }

## Result:
"txid"              (string) The transaction id.

## Examples:
`particl-cli sendtypeto anon part "[{\"address\":\"PbpVcjgYatnkKgveaeqhkeQBFwjqR7jKBR\",\"amount\":0.1}]"`
