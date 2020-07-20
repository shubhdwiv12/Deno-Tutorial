#Writing File

##Writing file Asynchronously

1. When you are writing file asynchrnously then you need to encode the data using TextEncoder() so that the string gets converted into bytes which can be easily written down.
2. After that, you need to encode and use Deno.writeFile() to write the file and if you want to write synchronously then you need to use writeFileSync(). 
3. For more details, see the documentation.

https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.writeFile