"use client";
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

function searchInput() {

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delay = setTimeout(() =>{
      if(searchQuery){
      const newUrl = formUrlQuery({
    params: searchParams.toString(),
    key: "topic",
    value: searchQuery,
  });
  
  router.push(newUrl,{scroll: false});
      }
      else{
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["topic"],
        });
        
        router.push(newUrl, { scroll: false });
      }
    }, 300)
    return () => clearTimeout(delay);
  }, [searchQuery, searchParams, router, pathname]);



  return (
    <div className='relative border border-black border-opacity-300 rounded-md items-center rounded-lg flex gap-2 px-2 py-1 h-fit'>
      <img src="/icons/search.svg" alt="search" height={15} width={15} />
      <input type="text"
        placeholder="Search for companions"
        value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  )
}

export default searchInput