( () => {

  interface Bird {
    eat(): void;

  }
  
  interface FlyingBird {
    fly(): void;
  }
  interface RunningBird {
    run(): void;
  }
  interface SwimmerBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird  {

    public fly() { return 100; }
    public eat() {}
  }

  class Hummingbird implements Bird, FlyingBird {
    
    public fly() { return 200;  }
    public eat() {}
  }
  
  class Ostrich implements Bird, RunningBird{
    public eat() {}
    public run() {}
  }
  
  class Pinguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
  }


})()


/* 
* No implementar metodos en clases que no lo requieran. 

? Detectar violaciones a ISP

*  Cuando las interfaces que implmentamos nos forzan a violar los
* principios de responsabilidad unica y de sustitucion de Liskov.

! Debemos segregar interfaces. Esto generara una robustes alta al cambio.

! Codigo de alta calidad cuando se tenga un proyecto con un ciclo de vida muy largo.
*/