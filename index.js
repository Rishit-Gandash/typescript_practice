const button = document.getElementById("enable-button");
import { log, chats } from "./chats.js";
// previous code
log(chats);
button.addEventListener("click", () => {
    // @ts-ignore
    window.supportAI.enableAutoReply();
});
