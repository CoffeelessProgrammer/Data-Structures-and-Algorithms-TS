// RUN: deno run Playground/Demos/Classes_101.ts

class Bender {
  protected name: string;
  protected isFemale: boolean;
  protected element: string;

  constructor(name: string, isFemale: boolean, element: string) {
    this.name = name;
    this.isFemale = isFemale;
    this.element = element;

    // console.log('bender', this);
  }

  public introduce() {
    console.log(`"Hi, I am ${this.name}. I'm from the ${this.element} nation!"`);
  }
}

class EarthBender extends Bender {
  protected specialty?: string;

  constructor(name: string, isFemale: boolean, specialty?: string) {
    super(name, isFemale, 'Earth');
    this.specialty = specialty;

    // console.log('EarthBender', this);
  }

  public earthbend() {
    console.log(`${this.name} lifts the ground beneath ${this.isFemale ? 'her' : 'him'}!`);
  }
}



const toph = new EarthBender('Toph', true, 'metal');
const bumi = new EarthBender('Bumi', false);

toph.introduce();
toph.earthbend();

bumi.introduce();
bumi.earthbend();