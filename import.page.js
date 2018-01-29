const { execute_script } = this;

const { self: { Papa } } = await execute_script({ source: 'https://cdn.rawgit.com/mholt/PapaParse/master/papaparse.js', self: {} });

console.log(Papa);
