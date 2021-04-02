// import { MyDatabaseClassic } from './db/my-database-classic';
// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './Module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: 'João', age: 29 });
// myDatabaseClassic.add({ name: 'Ana', age: 39 });
// myDatabaseClassic.add({ name: 'Maria', age: 59 });
// myDatabaseClassic.remove(1);
// myDatabaseClassic.show();

// console.log(
//   'Are instances equals ? ',
//   myDatabaseClassic === myDatabaseClassicFromModuleA,
// );

import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseModule as myDatabaseModuleFromModuleA } from './Module_a';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'João', age: 29 });
myDatabaseModule.add({ name: 'Ana', age: 39 });
myDatabaseModule.add({ name: 'Maria', age: 59 });
myDatabaseModule.remove(1);
myDatabaseModule.show();

console.log(
  'Are instances equals ? ',
  myDatabaseModule === myDatabaseModuleFromModuleA,
);
