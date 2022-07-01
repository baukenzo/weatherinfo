import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { typingInSearch, searchedCitiesList } from '../../store/actions';

import SearchIcon from '../../images/searchSvg.svg';

const Searchbar = () => {
    console.log('render')
    const { query, citiesList } = useSelector(state => state);
    const dispatch = useDispatch();

    const onInputChange = useCallback((value) => {
        dispatch(typingInSearch(value))

        if (value.length > 3) {
            // fetch(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${query}`).then(response => response.json()).then(response=> setList(response)).catch(response=> setList(response))
            axios.get(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${value}`).then(res => dispatch(searchedCitiesList(res.data)))
            console.log(citiesList)
        }

        if (value.length < 4) {
            dispatch(searchedCitiesList([]))
            console.log(citiesList, 'uadalena')
        }

    }, [dispatch, citiesList])

    function onAutoSearchClick(value) {
        dispatch(typingInSearch(value))
        dispatch(searchedCitiesList([]))
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
                {citiesList && (
                    <div className='cityWrap' >
                        {citiesList.map(cities => {
                            return <input key={cities.id} type='text' readOnly className='city' onClick={() => onAutoSearchClick(cities.name)} value={cities.name} />
                        })}
                    </div>
                )}

            </div>
        </div>

    );
};

export default Searchbar;