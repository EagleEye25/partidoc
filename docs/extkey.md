## extkey [info|list|account|gen|import|importAccount|setMaster|setDefaultAccount|deriveAccount|options]
extkey ["info"] [key] [path]
extkey list [show_secrets] - default
    List loose and account ext keys.
extkey account <key/id`[show_secrets]`
    Display details of account.
extkey key <key/id`[show_secrets]`
    Display details of loose key.
extkey gen [passphrase] [num hashes] [seed string]
    If no passhrase is specified key will be generated from random data.
    Warning: It is recommended to not use the passphrase
extkey import <key`[label] [bip44] [save_bip44_key]`
    Add loose key to wallet.
    If bip44 is set import will add the key derived from <key`on the bip44 path.`
    If save_bip44_key is set import will save the bip44 key to the wallet.
extkey importAccount <key`[time_scan_from] [label] `
    Add account key to wallet.
        time_scan_from: N no check, Y-m-d date to start scanning the blockchain for owned txns.
extkey setMaster <key/id>
    Set a private ext key as current master key.
    key can be a extkeyid or full key, but must be in the wallet.
extkey setDefaultAccount <id>
    Set an account as the default.
extkey deriveAccount [label] [path]
    Make a new account from the current master key, saves to wallet.
extkey options <key`[optionName] [newValue]`
    Manage keys and accounts

