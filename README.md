# wallaby-symlink-bug-reproduction

Running wallaby start results in the following error:

```
[Error] Runtime error: Error: Cannot find module './vendor/parse-xml/src'​​
​​[Error]     at Function.Module._resolveFilename (module.js:470:15)​​
​​[Error]     at Function.Module._load (module.js:418:25)​​
​​[Error]     at Module.require (module.js:498:17)​​
​​[Error]     at require (internal/module.js:20:19)​​
​​[Error]     at Object.<anonymous> (./modules/utilities/git-client.js:3:25)​​
​​[Error]     at Module._compile (module.js:571:32)​​
​​[Error]     at Object.Module._extensions..js (module.js:580:10)​​
​​[Error]     at Module.load (module.js:488:32)​​
​​[Error]     at tryModuleLoad (module.js:447:12)​​
​​[Error]     at Function.Module._load (module.js:439:3)​​
​​[Error]     at Module.require (module.js:498:17)​​
​​[Error]     at require (internal/module.js:20:19)​​
​​[Error]     at Object.<anonymous> (~/.vscode/extensions/WallabyJs.wallaby-vscode-1.0.62/projects/1e2d5c1830139d79/instrumented/modules/utilities/git-client-spec.js:3:31)​​
​​[Error]     at Module._compile (module.js:571:32)​​
​​[Error]     at Object.Module._extensions..js (module.js:580:10)​​
​​[Error]     at Module.load (module.js:488:32)​​
​​[Error]     at tryModuleLoad (module.js:447:12)​​
​​[Error]     at Function.Module._load (module.js:439:3)​​
​​[Error]     at Module.require (module.js:498:17)​​
​​[Error]     at require (internal/module.js:20:19)​​
​​[Error]     at ~/Development/Xolvio/wallaby-bug-repro/node_modules/mocha/lib/mocha.js:231:27​​
​​[Error]     at Array.forEach (native)​​
​​[Error]     at Mocha.loadFiles (~/Development/Xolvio/wallaby-bug-repro/node_modules/mocha/lib/mocha.js:228:14)​​
​​[Error]     at Mocha.run (~/Development/Xolvio/wallaby-bug-repro/node_modules/mocha/lib/mocha.js:514:10)​​
​​[Error]     at emitTwo (events.js:106:13)​​
​​[Error]     at WebSocket.emit (events.js:194:7)​​
​​[Error]     at afterWrite (_stream_writable.js:383:3)​​
​​[Error]     at onwrite (_stream_writable.js:374:7)​​
​​[Error]     at afterTransform (_stream_transform.js:79:3)​​
​​[Error]     at TransformState.afterTransform (_stream_transform.js:54:12)​​
​​[Error]     at Zlib.callback (zlib.js:625:5)​​
```
