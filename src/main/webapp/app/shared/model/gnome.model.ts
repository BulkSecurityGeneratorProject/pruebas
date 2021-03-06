export interface IGnome {
    id?: number;
    name?: string;
    thumbnail?: string;
    weight?: number;
    height?: number;
    hair_color?: string;
}

export class Gnome implements IGnome {
    constructor(
        public id?: number,
        public name?: string,
        public thumbnail?: string,
        public weight?: number,
        public height?: number,
        public hair_color?: string
    ) {}
}
