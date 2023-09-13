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
