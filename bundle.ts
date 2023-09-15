/*
https://bun.sh/docs/runtime/typescript

Running .ts files
Bun can directly execute .ts and .tsx files just like vanilla JavaScript, 
with no extra configuration. If you import a .ts or .tsx file (or an npm 
  module that exports these files), Bun internally transpiles it into 
  JavaScript then executes the file.

Note — Similar to other build tools, Bun does not typecheck the files. 
Use tsc (the official TypeScript CLI) if you're looking to catch static 
type errors.

Is transpiling still necessary? — Because Bun can directly execute 
TypeScript, you may not need to transpile your TypeScript to run in 
production. Bun internally transpiles every file it executes (both .js 
and .ts), so the additional overhead of directly executing your .ts/.tsx 
source files is negligible.

That said, if you are using Bun as a development tool but still targeting 
Node.js or browsers in production, you'll still need to transpile.
*/

try {
  const result = await Bun.build({
    entrypoints: ['./src/app.ts'],
    outdir: './build',
    // root: '.',
    // external: ['*'],
    minify: false,
    sourcemap: 'external',
  });

  if (result.success) {
    console.log('Build complete.\nOutput can be found in ./build');
  } else {
    console.log('Build was unsuccessful...');
    result.logs.forEach((log) => console.log(log));
  }
} catch (error) {
  // will only catch errors relating to incorrect Bun.build() params
  console.log(error);
}
