// "use client";
import { fetchCars } from '@/utils';
import Image from 'next/image'
import SearchBar from './SearchBar'
// import updatese from './SearchBar'
import CustomFilter from './CustomFilter'
import CarCard from './CarCard';
// import { useSearchParams } from 'next/navigation';
// import {  HomeProps } from "@/types";
// import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

interface FilterProps {
  manufacturer: "bmw", 
  // manufacturer?: string, 
    // year: 2022, 
    year: number, 
    fuel: string, 
    limit: number, 
    // model: "m8"
    model: string
}
interface HomeProps {
  searchParams: FilterProps;
}
// const searchParams: any;

export default async function CarCatalogue({ searchParams } : HomeProps) {
// const CarCatalogue = async ({ searchParams } : HomeProps) => {
  const allCars = await fetchCars({
    // manufacturer: "bmw",
    manufacturer: searchParams?.manufacturer || "",
    // manufacturer: searchParams?.manufacturer,
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || "",
    limit: searchParams?.limit || 5,
    model: searchParams?.model || "",
    // manufacturer: ''
  });
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div className="mt-12 padding-x padding-y max-width" id='discover'>
      <div className="home__text-container">
        <h1 className="text-4x1 font-extrabold">Car catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      {/* console.log("hi"); */}
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          WE HAVE CARS
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className='text-black text-x1 font-bold'>Opps, no results</h2>
          {/* <p>{allCars?.message}</p> */}
        </div>
      )}
    </div>
  );
}

// export default CarCatalogue
