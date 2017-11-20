## filtertransactions [options]
List transactions.
1. options (json, optional) : A configuration object for the query

        All keys are optional. Default values are:
        {
                "count":             10,
                "skip":              0,
                "include_watchonly": false,
                "search":            ''
                "category":          'all',
                "type":              'all',
                "sort":              'time'
        }

        Expected values are as follows:
                count:             number of transactions to be displayed
                                   (integer `0)`
                skip:              number of transactions to skip
                                   (integer >= 0)
                include_watchonly: whether to include watchOnly transactions
                                   (bool string)
                search:            a query to search addresses and amounts
                                   character DOT '.' is not searched for:
                                   search "123" will find 1.23 and 12.3
                                   (query string)
                category:          select only one category of transactions to return
                                   (string from list)
                                   all, send, orphan, immature, coinbase, receive,
                                   orphaned_stake, stake, internal_transfer
                type:              select only one type of transactions to return
                                   (string from list)
                                   all, standard, anon, blind
                sort:              sort transactions by criteria
                                   (string from list)
                                   time          most recent first
                                   address       alphabetical
                                   category      alphabetical
                                   amount        biggest first
                                   confirmations most confirmations first
                                   txid          alphabetical

        Examples:
            List only when category is 'stake'
                `particl-cli filtertransactions "{\"category\":\"stake\"}"`

            Multiple arguments
                `particl-cli filtertransactions "{\"sort\":\"amount\", \"category\":\"receive\"}"`

            As a JSON-RPC call
                `curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "filtertransactions", "params": [{\"category\":\"stake\"}] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`

