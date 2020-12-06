// Asynchronous VS Non-Blocking
// Asynchronous does not respond immediately, While Nonblocking responds immediately if the data is available and if not that
// simply returns an error.
// Asynchronous improves the efficiency by doing the task fast as the response might come later, meanwhile,
// can do complete other tasks. Nonblocking does not block any execution and if the data is available it retrieves the information quickly.
// Asynchronous is the opposite of synchronous while nonblocking I/O is the opposite of blocking. They both are fairly
// similar but they are also different as asynchronous is used with a broader range of operations while nonblocking is mostly used with I/O.