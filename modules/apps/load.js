const { createClient } = require('xpra-html5-client')

const client = createClient({
  uri: 'ws://localhost:9876'
});
 
client.on('ws:open', () => console.log('Connected!'));
 
client.connect();