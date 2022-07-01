import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { typingInSearch, searchedCitiesList, onSubmitSearchButton, onClick3days} from '../../store/actions';

import SearchIcon from '../../images/searchSvg.svg';

const Searchbar = () => {
    console.log('render')
    const [inProp, setInProp] = useState(false);
    const {query, citiesList, today} = useSelector(state => state);
    const dispatch = useDispatch();

    const onInputChange = useCallback((value) => {
        dispatch(typingInSearch(value))

        if (value.length > 3) {
            // fetch(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${query}`).then(response => response.json()).then(response=> setList(response)).catch(response=> setList(response))
            axios.get(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${value}`).then(res => dispatch(searchedCitiesList(res.data)))
            console.log(citiesList)
            setInProp(true)
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

    async function onSubmitButton(e) {
        e.preventDefault();
        console.log('onsubmit')
        dispatch(searchedCitiesList([]))
        axios.get(`http://api.weatherapi.com/v1/current.json?key=d79239169e7340be9c083833222406&q=${query}&aqi=yes`).then(res => dispatch(onSubmitSearchButton(res.data)))
        dispatch(onClick3days([]))
    }


    return (
        <div className='search-wrap'>
            <div className='wrap' >
                <form onSubmit={(e) => onSubmitButton(e)}  className="search">
                    <input  type="text" 
                           className='searchInput' 
                           placeholder='Search your city'
                           value={query}
                           onChange={(e) => onInputChange(e.target.value)} />
                    <button type='submit' className='searchButton'>
                        <img src={SearchIcon} alt="" />
                    </button>
                </form>
                {citiesList && (
                    <CSSTransition in={inProp} timeout={900} classNames="my-node">
                        <div className='cityWrap' >
                            {citiesList.map(cities => {
                                return  <input key={cities.id} type='text' readOnly className='city' onClick={() => onAutoSearchClick(cities.name)} value={cities.name}/>
                            })}
                        </div>
                    </CSSTransition>
                )}
            </div>
        </div>

    );
};

export default Searchbar;