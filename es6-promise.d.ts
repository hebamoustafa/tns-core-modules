/* tslint:disable */
// Type definitions for es6-promise
// Project: https://github.com/jakearchibald/ES6-Promise
// Definitions by: François de Campredon <https://github.com/fdecampredon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
interface PromiseLike<T> {
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => PromiseLike<U>): PromiseLike<U>;
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => U): PromiseLike<U>;
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => void): PromiseLike<U>;
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => PromiseLike<U>): PromiseLike<U>;
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => U): PromiseLike<U>;
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => void): PromiseLike<U>;
}

interface Promise<T> extends PromiseLike<T> {
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => PromiseLike<U>): Promise<U>;
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => U): Promise<U>;
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => void): Promise<U>;
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => PromiseLike<U>): Promise<U>;
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => U): Promise<U>;
    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => U, onRejected?: (error: any) => void): Promise<U>;

    /**
     * Sugar for promise.then(undefined, onRejected)
     * @param onRejected called when/if "promise" rejects
     */
    catch<U>(onRejected?: (error: any) => PromiseLike<U>): Promise<U>;
    /**
     * Sugar for promise.then(undefined, onRejected)
     * @param onRejected called when/if "promise" rejects
     */
    catch<U>(onRejected?: (error: any) => U): Promise<U>;
    /**
     * Sugar for promise.then(undefined, onRejected)
     * @param onRejected called when/if "promise" rejects
     */
    catch<U>(onRejected?: (error: any) => void): Promise<U>;
}

interface PromiseConstructor {
    /**
      * A reference to the prototype.
      */
    prototype: Promise<any>;

    /**
     * Creates a new Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

    /**
     * Returns promise (only if promise.constructor == Promise)
     */
    cast<T>(promise: Promise<T>): Promise<T>;
    /**
     * Make a promise that fulfills to obj.
     */
    cast<T>(object: T): Promise<T>;

    /**
     * Make a new promise from the PromiseLike. 
     * A promise-like can be anything as far as it has a "then" method. 
     * This also creates a new promise if you pass it a genuine JavaScript promise, making it less efficient for casting than Promise.cast.
     */
    resolve<T>(promise?: PromiseLike<T>): Promise<T>;
    /**
     * Make a promise that fulfills to obj. Same as Promise.cast(obj) in this situation.
     */
    resolve<T>(object?: T): Promise<T>;

    /**
     * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
     */
    reject(error: any): Promise<any>;

    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
     * the array passed to all can be a mixture of promise-like objects and other objects. 
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     */
    all<T>(promises: Promise<T>[]): Promise<T[]>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     */
    race<T>(promises: Promise<T>[]): Promise<T>;
}

declare var Promise: PromiseConstructor;
