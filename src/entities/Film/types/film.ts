import { Rating } from '@/entities/Rating'

export interface Film {
  id: string;
  title: string;
  cover: string;
  images: string[];
  year: string;
  age: string;
  price: number;
  duration: number;
  director: string;
  box_office_date: string;
  opening_date: string;
  country: string;
  description: string;
  isPremiere: boolean;
  genres: string[];
  cast: string[];
  ratings: Rating[];
}
