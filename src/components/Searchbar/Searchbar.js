import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { typingInSearch, searchedCitiesList, onSubmitSearchButton, onClick3days} from '../../store/actions';

import SearchIcon from '../../images/searchSvg.svg';

const Searchbar = () => {
    console.log('render')
<<<<<<< HEAD
    const [inProp, setInProp] = useState(false);
    const {query, citiesList, today} = useSelector(state => state);
=======
    const { query, citiesList } = useSelector(state => state);
>>>>>>> 8deccadb7947fa3b8a98e6d06c2f1405088a90a3
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
<<<<<<< HEAD
                <form onSubmit={(e) => onSubmitButton(e)}  className="search">
                    <input  type="text" 
                           className='searchInput' 
                           placeholder='Search your city'
                           value={query}
                           onChange={(e) => onInputChange(e.target.value)} />
=======
                <form className="search">
                    <input type="text"
                        className='searchInput'
                        placeholder='Search your city'
                        value={query}
                        onChange={(e) => onInputChange(e.target.value)} />
>>>>>>> 8deccadb7947fa3b8a98e6d06c2f1405088a90a3
                    <button type='submit' className='searchButton'>
                        <img src={SearchIcon} alt="" />
                    </button>
                </form>
                {citiesList && (
<<<<<<< HEAD
                    <CSSTransition in={inProp} timeout={900} classNames="my-node">
                        <div className='cityWrap' >
                            {citiesList.map(cities => {
                                return  <input key={cities.id} type='text' readOnly className='city' onClick={() => onAutoSearchClick(cities.name)} value={cities.name}/>
                            })}
                        </div>
                    </CSSTransition>
=======
                    <div className='cityWrap' >
                        {citiesList.map(cities => {
                            return <input key={cities.id} type='text' readOnly className='city' onClick={() => onAutoSearchClick(cities.name)} value={cities.name} />
                        })}
                    </div>
>>>>>>> 8deccadb7947fa3b8a98e6d06c2f1405088a90a3
                )}

            </div>
        </div>

    );
};

export default Searchbar;