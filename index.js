const rpc = require('./modules/rpc');
const fs = require('fs');

const mkcat = require('mkcat'),
      mkout = require('mkout');

const indexFile = 'docs/index.md';

rpc.daemon.init(() => {  
  const options = rpc.daemon.getOptions();

  try {
    fs.unlinkSync(indexFile);
  } catch(e) {
    console.log(indexFile + ' did not exist...');
  }
  rpc.rpc.rpcCall('help', null, rpc.cookie.getAuth(options), (error, response) => {
    if (error) {
      console.error(error);
    } else {
      response = response.result.split('\n');
       const commands = response.filter(cmd => {
        if (!cmd.length || cmd.indexOf('=') === 0) {
          return false;
        }
        return !!cmd;
      });

      const nextCommand = () => {
        const cmd = commands.shift();

        if (!cmd) {
          const outputFile = fs.createWriteStream('docs/index.html');
            
          mkcat({files:[indexFile]})
          .pipe(mkout({type: 'html'})) //, output: 'docs/' + cmdName + '.html'}))
          .pipe(outputFile);

          return;
        }

        const cmdName = cmd.split(' ')[0].split('"')[0]

        fs.appendFileSync(indexFile, '[' + cmdName + '](' + cmdName + '.html)\n\n');

        rpc.rpc.rpcCall('help', [cmdName], rpc.cookie.getAuth(options), (err, res) => {
          if (err) {
            console.error('ERROR', err);
          } else {
            // console.log('SUCCESS', cmd, cmdName, res.result);
            let result = '## ' + res.result.replace(/\n([A-Za-z]+\:)/g, '\n## $1')
              .replace(/\> (.+)/g, '`$1`');
            fs.writeFileSync('docs/' + cmdName + '.md', result);
            const outputFile = fs.createWriteStream('docs/' + cmdName + '.html');
            
            mkcat({files:['docs/' + cmdName + '.md']})
            .pipe(mkout({type: 'html'})) //, output: 'docs/' + cmdName + '.html'}))
            .pipe(outputFile);
            //.pipe(mkout({type: 'html', output: 'docs/' + cmdName + '.html'})); //process.stdout);
          }
          nextCommand();
        });
      };
      nextCommand();
    }
  });
}, true);



