// install library (gets library so can use it)
    // npm install twilio 

// getting ahold of the client
const Twilio = require("twilio");

// initialize it (setting up a new client- so all requests made against this client are authenticated)
    // can see takes accountSID and auth token    
const client = new Twilio("ACd2e29d1edd672529a6ffe2959dc3cdf7", "7336bfe53c7f0c001f11ef857a1f9c63");
    // wrong bc if upload/share with anyone, credentials to steal 
    // typical solution: use environment variables (do when build application)

// Twilio Javscript library acts like most Javascript libraries
    // asynchronous and deals with promises
    // promise: set up handlers for when method call actually completes
        // to get message log: use this method call 
            client.messages.list()
                .then(messages => console.log(`The most recent message is ${messages[0].body}`))
                // method client.messages.list() (list = asynchronous method)
                    // abstracted away (but same thing did in curl/postman) -> same GET request that returns a JSON response
                        // but bc asynchronous - immediately goes on to the next line (logging "Gathering ...")
                    // returns promise (promise of a future value)
                        // future value = messages in this case
                // .then(): important method on promises 
                    // when call to list returns -> going to run this function -> passes in return value (from list call) to messages
                        // return value here (from list method?) = actual object (not JSON response) (messages = array of objects)
                            // helper library abstracted it away
                            // took HTTP request with body of JSON -> automatically turned into objects

                    // chain on that message
                    // this method should be given function that accepts a value

                    // messages: bc that's what you expect to return
                    // in function body, log out most recent message
                        // use back ticks (``) to get string interpolation
                // this call will be asynchronous
                
                .catch(err => console.error(err));
                    // make sure to capture any errors that happened asychronously
                        // e.x. if put in incorrect SID, shows no error if don't do this
                        // need to catch any error

                        // every promise has method named catch
                            // .then(...) also a promise -> can say .catch
                                // catch error err and send the error

                                
console.log('Gathering your message log');
