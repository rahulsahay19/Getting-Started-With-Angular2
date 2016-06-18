    export class Movie {
      constructor(
        public id: number,
        public movieName: string,
        public directorName: string,
        public releaseYear: string,
        public reviews?: number
      ) {  }
    }