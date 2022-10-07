// Fake code that walks through the operations that occur when a Node program is started
// Demonstrating th event loop

//  node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContents();
// New timers, tasks, operations are recorded from myFile running

// Node does 3 checks to decide if another iteration, 'tick, should occur.
function shoudContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like a server listening to a port)
  // Check three: Any pending long running operations? (Like reading a file, fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in 1 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) Node looks at pendingOSTasks & pendingOperations and calls the relevant callbacks
  // 3) Node pauses execution. Continue when...
  //     - a new pendingOSTask is done
  //     - a new pendingOperation is done
  //     - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

// exit back to terminal
