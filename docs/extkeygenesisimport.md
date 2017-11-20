## extkeygenesisimport <mnemonic/key`[passphrase] [save_bip44_root] [master_label] [account_label]`
Import master key from bip44 mnemonic root key and derive default account.
Derives an extra chain from path 444444 to receive imported coin.
       Use '-stdin' to be prompted to enter a passphrase.
       if mnemonic is blank, defaults to '-stdin'.
   passphrase:         passphrase when importing mnemonic - default blank.
       Use '-stdin' to be prompted to enter a passphrase.
   save_bip44_root:    Save bip44 root key to wallet - default false.
   master_label:       Label for master key - default 'Master Key'.
   account_label:      Label for account - default 'Default Account'.
## Examples:
   extkeygenesisimport -stdin -stdin false label_master label_account

