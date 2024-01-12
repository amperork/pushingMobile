export interface Journey {
    id?: string;  // Optional for new entries
    departurePlace: string;
    departureLat: number;
    departureLong: number;
    departureTime: Date;
    arrivalPlace: string;
    arrivalLat: number;
    arrivalLong: number;
    busName: string;
  }
  