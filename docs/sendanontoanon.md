## sendanontoanon"address" amount ( "comment" "comment-to" subtractfeefromamount "narration" ringsize inputs_per_sig)

Send an amount of anon part in a blinded payment to a given address.

## Arguments:
1. "address"     (string, required) The particl address to send to.
2. "amount"      (numeric or string, required) The amount in PART to send. eg 0.1
3. "comment"     (string, optional) A comment used to store what the transaction is for. 
                            This is not part of the transaction, just kept in your wallet.
4. "comment_to"  (string, optional) A comment to store the name of the person or organization 
                            to which you're sending the transaction. This is not part of the 
                            transaction, just kept in your wallet.
5. subtractfeefromamount  (boolean, optional, default=false) The fee will be deducted from the amount being sent.
                            The recipient will receive less PART than you enter in the amount field.
6. "narration"   (string, optional) Up to 24 characters sent with the transaction.
                            The narration is stored in the blockchain and is sent encrypted when destination is a stealth address and uncrypted otherwise.
7. ringsize        (int, optional, default=4).
8. inputs_per_sig  (int, optional, default=64).

## Result:
"txid"           (string) The transaction id.

## Examples:
`particl-cli sendanontoanon "SPGyji8uZFip6H15GUfj6bsutRVLsCyBFL3P7k7T7MUDRaYU8GfwUHpfxonLFAvAwr2RkigyGfTgWMfzLAAP8KMRHq7RE8cwpEEekH" 0.1`
