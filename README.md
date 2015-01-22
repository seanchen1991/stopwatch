# Acelio Code Challenge

Prompt: For this code challenge, design and code a Stopwatch, and then utilize it to design and code a Racer.

## Documentation

### new Stopwatch([listener, resolution])
Creates a Stopwatch object with optional tick `listener` function and `resolution` milliseconds. See `setListener()` to get a better idea of what the `listener` parameter does.

### Stopwatch.stop()
Stops the watch and returns the elapsed time as an object. See Stopwatch.getElapsed() for the format of the time object.

### Stopwatch.start()
Starts the watch. If a listener is attached via `setListener()`, the listener is triggered each time `resolution` milliseconds has elapsed. 

### Stopwatch.reset()
Resets the watch to 0. If the watch is running it will continue to run from 0. Calling `reset()` does not trigger the listener function.

### Stopwatch.restart()
Restarts the watch from 0.

### Stopwatch.getElapsed()
Returns the total elapsed time in an object with attributes `hours`, `minutes`, `seconds`, and `milliseconds`.

### Stopwatch.setElapsed(hours, minutes, seconds)
Resets the stopwatch and elapsed time to the specific time. Does not stop the watch, so a running watch will immediately continue from the specified time.

### Stopwatch.toString()
Returns a human readable version of the elapsed time. Works while running.

### Stopwatch.setListener(listenerFunction)
Sets the listener of the stopwatch. The `listenerFunction` will be called each time `resolution` milliseconds have elapsed.
