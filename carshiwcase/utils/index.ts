// "use client";
import Image from "next/image";
// import SearchManu from "./SearchManu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CarProps, FilterProps } from "@/types";
import React from "react";
export async function fetchCars(filters: FilterProps) {
    const {manufacturer , year, model, limit, fuel} = filters;

    // const manufacturer = "bmw";

    var gg = "audi";
        const headers = {
            'X-RapidAPI-Key': 'e5707c7c99msh0af3d890f56b804p157ce3jsnfd9fc98a9e63',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        // const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi&limit=4`, {headers : headers});
        // const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}`, {headers : headers});
        // const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}`, {headers : headers});
        const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers : headers});

        const result = await response.json();
        console.log(result);
        // alert("mode");
        return result;
}



export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make , year, model} = car;
    url.searchParams.append('customer',"k");
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType',"fullscreen");
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);

    return `${url}`;
}

