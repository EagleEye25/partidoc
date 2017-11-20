## mnemonic <new|decode|addchecksum>
mnemonic new [password] [language] [nBytesEntropy] [bip44]
    Generate a new extended key and mnemonic
    password, can be blank , default blank
    language, english|french|japanese|spanish|chinese_s|chinese_t|italian|korean, default english
    nBytesEntropy, 16 -`64, default 32`
    bip44, true|false, default true
mnemonic decode <password`<mnemonic> [bip44]`
    Decode mnemonic
    bip44, true|false, default true
mnemonic addchecksum <mnemonic>
    Add checksum words to mnemonic.
    Final no of words in mnemonic must be divisible by three.
mnemonic dumpwords [language]
    Print list of words.
    language, default english
mnemonic listlanguages
    Print list of supported languages.

