import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?:string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchManuProps {
  manufacturer: string;
  setManufacturer: (Manufacture: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement:number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  // manufacturer: "bmw", 
  manufacturer?: string, 
    // year: 2022, 
    year?: number, 
    fuel?: string, 
    limit?: number, 
    // model: "m8"
    model?: string
}

export interface HomeProps {
  searchParams: FilterProps;
}
