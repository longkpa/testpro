// @nearfile
import { context, storage, logging } from "near-sdk-as";


import { LAST_SENDER_KEY } from "./model"


export function sayHi(): void {
 
  const sender = context.sender;
 
  logging.log(sender + " says \"Hi!\"");
 
  storage.setString(LAST_SENDER_KEY, sender);
}

// This is our view method. It returns the last account_id of a sender who called `sayHi`.
// It reads value from the persistent store under the key "last_sender" and returns it.
export function whoSaidHi(): string | null {
  // getString returns a string value for a given string key.
  return storage.getString(LAST_SENDER_KEY);
}
export function long(){
  
}
