## addnode "node" "add|remove|onetry"

Attempts to add or remove a node from the addnode list.
Or try a connection to a node once.

## Arguments:
1. "node"     (string, required) The node (see getpeerinfo for nodes)
2. "command"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once

## Examples:
`particl-cli addnode "192.168.0.6:51738" "onetry"`
`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "addnode", "params": ["192.168.0.6:51738", "onetry"] }' -H 'content-type: text/plain;' http://127.0.0.1:51935/`