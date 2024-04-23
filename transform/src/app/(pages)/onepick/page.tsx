"use client";

import { useEffect, useState } from "react";
import OnepickBanner from "@/app/_components/banner";
import Filter from "./filter/filter";

type OnepickBannerData = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export default function Onepick() {
  const [data, setData] = useState<OnepickBannerData[]>([]);

  useEffect(() => {
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((error) => alert("Error " + error));
    }
    
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <OnepickBanner />
      <Filter />
      {data.map((datainfo) => {
        return (
          <div className="test" key={datainfo.id}>
            {datainfo.name}
          </div>
        );
      })}
      <div>Onepick Content</div>
    </>
  )
}
