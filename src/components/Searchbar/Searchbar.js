import React from 'react';
import { useState } from 'react';
import SearchIcon from '../../images/searchSvg.svg';
import axios from 'axios';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);

    function onInputChange(value) {
        setQuery(value)

        if (value.length > 3) {
            // fetch(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${query}`).then(response => response.json()).then(response=> setList(response)).catch(response=> setList(response))
            axios.get(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${query}`).then(res => setList(res.data))
            console.log(list)
        }

        if (value.length < 4) {
            setList([])
            console.log(list)
        }
        
    }

    function onAutoSearchClick(value) {
        setQuery(value);
        setList([])
    }


    return (
        <div className='search-wrap'>
            <div className='wrap' >
                <form className="search">
                    <input type="text" 
                           className='searchInput' 
                           placeholder='Search your city'
                           value={query}
                           onChange={(e) => onInputChange(e.target.value)} />
                    <button type='submit' className='searchButton'>
                        <img src={SearchIcon} alt="" />
                    </button>
                </form>
                {list && (
                    <div className='cityWrap' >
                        {list.map(cities => {
                            return  <input key={cities.id} type='text' readOnly className='city' onClick={(e) => onAutoSearchClick(e.target.value)} value={cities.name}/>
                        })}
                    </div>
                )}

            </div>
        </div>
        
    );
};

export default Searchbar;