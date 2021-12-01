process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

let delayTime = 0

for (let char of spinner) {
setTimeout(() => {
  process.stdout.write(char + '\r');
}, delayTime);
delayTime += 200;
}