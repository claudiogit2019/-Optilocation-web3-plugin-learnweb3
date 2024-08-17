const Web3 = require('web3');
const { Web3PluginBase } = require('web3');

class MyPlugin extends Web3PluginBase {
   constructor() {
       super();
       this.pluginNamespace = "myPlugin";
   }

   // Otros métodos y funcionalidades de tu plugin
}

const myPlugin = new MyPlugin();
console.log(myPlugin.pluginNamespace); // "myPlugin"
