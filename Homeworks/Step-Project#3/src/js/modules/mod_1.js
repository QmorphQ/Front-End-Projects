function say(word) {
    console.log(`%c${word}`, `color:orange;font:bold 1em/1em sans-serif;`);
    document.querySelector("body").insertAdjacentHTML("afterbegin", `<p style="color:orange;font:bold 2em/2em sans-serif;text-align:center;text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;">Module works!</p>`)

}
export default say;