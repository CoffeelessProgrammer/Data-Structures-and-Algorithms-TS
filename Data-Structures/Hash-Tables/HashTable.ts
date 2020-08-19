export class HashTable {
  private size: number;
  private data: Array<Array<any>>;

  constructor(numBuckets: number) {
    this.size = numBuckets;
    this.data = new Array(numBuckets);
  }

  public insert(key: string, value: any): void {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key,value]);
  }

  public get(key: string): any {
    let address = this._hash(key);
    const currentBucket: any[] = this.data[address];

    if (currentBucket.length) {
      for(let item of currentBucket) {
        if (item[0] === key) return item[1];
      }
    }

    return undefined;
  }

  public keys(): string[] {
    const keysArray = new Array<string>();

    // Loop through all buckets
    for (let i=0; i < this.data.length; ++i) {
      // If bucket has item(s)
      if (this.data[i]) {
        // Handle Collisions: Grab all keys from bucket 
        //    (incl. multiple items)
        for(let item of this.data[i]) {
          keysArray.push(item[0]);
        }
      }
    }

    return keysArray;
  }

  public values(): string[] {
    const valuesArray = new Array<string>();

    for (let i=0; i < this.data.length; ++i) {
      if (this.data[i]) {
        for(let item of this.data[i]) {
          valuesArray.push(item[1]);
        }
      }
    }

    return valuesArray;
  }

  public getSize(): number {
    return this.size;
  }

  private _hash(key: string) {
    let hash = 0;

    for (let i=0; i < key.length; ++i) {
      hash = (hash + key.charCodeAt(i) * i)
        % this.data.length;
    }

    return hash;
  }

  public testHashFunction() {
    console.log(this._hash('grapes'));
    console.log(this._hash('grapess'));
    console.log(this._hash('grapes'));
  }
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const hashTable = new HashTable(16);
  // hashTable.testHashFunction();

  hashTable.insert('grapes', 27);  // Θ(1)
  hashTable.insert('apples', 6);
  hashTable.insert('tangerines', 12);

  console.log('apples:', hashTable.get('apples'));
  console.log('grapes:', hashTable.get('grapes'));

  console.log(hashTable.keys());
  console.log(hashTable.values());

  // RUN: deno run Data-Structures/Hash-Tables/Implementation.ts
}