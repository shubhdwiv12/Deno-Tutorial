//All write Operation
/*===================Write File Aysnchronously============================== */

const InputData: string = 'Hello, My name is Anthony Gonsalvis, Mai duniya me akela hu';
const encoder = new TextEncoder();
const actualData = encoder.encode(InputData);
await Deno.writeFile(`${Deno.cwd()}/data.txt`, actualData);
console.log('Data written successfully....');

/*===================Write File snchronously============================== */
const InputData2: string = 'Hello, My name is Anthony Gonsalvis2, Mai duniya me akela hu';
const encoder2 = new TextEncoder();
const actualData2 = encoder.encode(InputData);
await Deno.writeFileSync(`${Deno.cwd()}/data2.txt`, actualData2);
console.log('Data written successfully2....');
