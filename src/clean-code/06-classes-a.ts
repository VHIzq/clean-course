( () => {

  //sin aplicar el principio de responsabilidad unica
  type Gender = 'M' | 'F'

  class Person {

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}

  }

  class User extends Person {

    
    public  lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super( name, gender, birthDate );
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }

  }

  class UserSettings extends User {
    constructor(
      public workingDIrectory: string,
      public lastOpenFolder: string,
      email: string,
      name: string,
      role: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super( email, name,role, gender, birthDate );
    }
  }

  const userSettings = new UserSettings(
    '/.user/home',
    '/home',
    'demo@test,com',
    'VHMI',
    'DevOps',
    'M',
    new Date('1994-04-13')
  )

  console.log( userSettings );

})();