'use client';


import Movie from "@/components/Movie";
import { useState } from "react";


export default function Home() {
  
 
const [search, setsearch] = useState('iron')
  const [type, settype] = useState(''  )
  const [data, setdata] = useState([])
    
  return (
    <>
    
    <div>
      <Movie search={search} type={type} setdata={setdata} />

    </div>



    
    
    
    
    
    
    
    </>
  );
}
