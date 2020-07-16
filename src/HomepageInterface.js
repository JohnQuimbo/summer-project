import HomepageCard from './HomepageCard';
import React from 'react';


export default function HomepageInterface({items}){
    return(
      <div className = "homepageInterface">  
        {items.map((homepageItem, index) => (
          <HomepageCard
            key={`${homepageItem.name}${index}`}
            {...homepageItem}
          />
        ))}
      </div>
    );  
}