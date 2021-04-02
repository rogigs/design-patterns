// import { MyDatabaseClassic } from './db/my-database-classic';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: 'Igor', age: 19 });
// myDatabaseClassic.add({ name: 'Luiz', age: 30 });
// // myDatabaseClassic.show();

// export { myDatabaseClassic };

import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Igor', age: 19 });
myDatabaseModule.add({ name: 'Luiz', age: 30 });
// myDatabaseModule.show();

export { myDatabaseModule };
