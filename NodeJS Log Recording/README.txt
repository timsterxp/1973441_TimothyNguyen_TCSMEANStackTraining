Please note that sometimes VSCode has problems directly utilizing TTY for readline-sync debug statements.

Thus node debug/inspect script.js sometimes do not work on terminal due to VSCode + Readline-sync compatability 
as debugger faces issues with input/output.

A launch.json file is provided for debugging via VSCode which will provide you variable data directly in VSCode window. 
This can be achieved through pressing "Ctrl+Shift+D" or the "Run and Debug" button on the left side window. This bypasses the 
watch method that we use and gives you data on all variables.

Each "F5" will automatically bring you to the breakpoint of which is commented so you know what to look for.

This is only an issue for some versions of readline-sync/node and can be avoided if using external terminal on console launch configuration.