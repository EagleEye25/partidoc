## importstealthaddress <scan_secret`<spend_secret> [label] [num_prefix_bits] [prefix_num]`
Import an owned stealth addresses.
If num_prefix_bits is specified and `0, the stealth address is created with a prefix.`
If prefix_num is not specified the prefix will be selected deterministically.
prefix_num can be specified in base2, 10 or 16, for base 2 prefix_str must begin with 0b, 0x for base16.
A 32bit integer will be created from prefix_num and the least significant num_prefix_bits will become the prefix.
A stealth address created without a prefix will scan all incoming stealth transactions, irrespective of transaction prefixes.
Stealth addresses with prefixes will scan only incoming stealth transactions with a matching prefix.
## Examples:
   getnewstealthaddress "lblTestSxAddrPrefix" 3 "0b101" 
