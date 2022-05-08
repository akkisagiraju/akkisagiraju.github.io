---
title: Message Queue vs Job Queue in JavaScript with a simple example
date: 2022-05-08
---

## Message Queue
If you are a JavaScript developer, you may know that Promises were introduced back in 2015 as a part of ES6's (also known as ES2015) spec. Along with them came Job Queues. So, how are they different from the traditional event queue in JavaScript that handle regular callbacks?


Event queues (also called Message queue or Macrotask queue) give JavaScript the super power of executing asynchronous code despite the language being single threaded. If you have ever used `setTimeout` or `setTimeinterval` in JavaScript, you might know what the below code would do:

```javascript
setTimeout(() => console.log("a"), 10);
setTimeout(() => console.log("b"), 0);
console.log("c");
setTimeout(() => console.log("d"), 100);
```

If you are still unsure, do not worry. It does look a bit tricky if you are not fully aware of how event loop works in JavaScript. It will result in this:

```javascript
c
b
a
d
```

#### Explanation:

The callback functions that are passed inside the `setTimeout` functions are pushed into the message queue and they wait in the queue until the callstack is empty.

They get executed in the order they are pushed into the queue (First In, First Out). This explains the order of the results we saw above.

## Job Queue

Now, how does a job queue differ from the above illustrated behaviour?

Let's consider the below code, which is a Promise.

```javascript
async function printer(value) {
  await new Promise((resolve, reject) => {
    resolve(console.log(value))
  });
}

printer("e");
```

Promises are also executed asynchronously. But the difference between them and `setTimeout` is that Promises are pushed into job queue (also called Microtask queue).

In JavaScript, job queue has higher priority over message queue. So, if we combine code from both the examples:

```javascript
setTimeout(() => console.log("a"), 10);
setTimeout(() => console.log("b"), 0);
console.log("c");
setTimeout(() => console.log("d"), 100);

async function printer(value) {
  await new Promise((resolve, reject) => {
    resolve(console.log(value))
  });
}

printer("e");
```

`e` will be logged to the console before `b`.

```javascript
c
e
b
a
d
```

This is because items in the Job Queue are executed first before the ones in Message Queue. You may think of them as jumping the traditional queue.

## TL;DR
1. Message queue is also called Macrotasks queue.
2. Job queue is also called Microtasks queue.
3. Job queue always takes the higher priority over Message queue.
4. Promises go into Job queue.