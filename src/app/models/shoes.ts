export class Shoes {
  id: number;
  name: string;
  marque: string;
  type: string;
  dateEntree: Date;
  constructor(id = null, name = null, marque = null, type = null, date = null ) {
    this.id = id;
    this.name = name;
    this.marque = marque;
    this.type = type;
    this.dateEntree = date;
  }
}
