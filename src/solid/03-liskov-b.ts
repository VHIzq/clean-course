
export abstract class Vehiculo {

  /* getNumberOfSeats(): number {
    throw Error('Method not implemented');
  } */

  abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehiculo {

  constructor( private numberOfSeats: number ) {
    super();
  };

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

}

export class Audi extends Vehiculo {
  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Volvo extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Azuki extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Lincon extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Hummer extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
