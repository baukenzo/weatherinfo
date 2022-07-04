import React from 'react';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { typingInSearch, searchedCitiesList, onSubmitSearchButton, onClick3days, onError, cancelError, loadingTrue, loadingFalse} from '../../store/actions';

import SearchIcon from '../../images/searchSvg.svg';

const Searchbar = () => {
    const [inProp, setInProp] = useState(false);
    const {query, citiesList} = useSelector(state => state);
    const dispatch = useDispatch();

    const onInputChange = useCallback((value) => {
        dispatch(typingInSearch(value))

        if (value.length > 3) {
            axios.get(`http://api.weatherapi.com/v1/search.json?key=d79239169e7340be9c083833222406&q=${value}`).then(res => dispatch(searchedCitiesList(res.data))).catch(console.log('ошибка запроса к списку городов'))
            setInProp(true)
        }

        if (value.length < 4) {
            dispatch(searchedCitiesList([]))
        }

    }, [dispatch, citiesList])

    function onAutoSearchClick(value) {
        dispatch(typingInSearch(value))
        dispatch(searchedCitiesList([]))
    }

    function onSubmitButton(e) {
        e.preventDefault();
        dispatch(cancelError());
        dispatch(searchedCitiesList([]));
        dispatch(loadingTrue())

        // try {
        //     axios.get(`http://api.weatherapi.com/v1/current.json?key=d79239169e7340be9c083833222406&q=${query}&aqi=yes`).then(res => dispatch(onSubmitSearchButton(res.data))).catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response.status);
        //         } else {
        //             dispatch(onError())
        //         }
        //     })
        //     dispatch(loadingTrue())
        // } catch (error) {
        //     axios.get(`http://api.weatherapi.com/v1/current.json?key=d79239169e7340be9c083833222406&q=${query}&aqi=yes`).then(res => dispatch(onSubmitSearchButton(res.data))).catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response.status);
        //         } else {
        //             dispatch(onError())
        //         }
        //     })
        // }

        axios.get(`http://api.weatherapi.com/v1/current.json?key=d79239169e7340be9c083833222406&q=${query}&aqi=yes`).then(res => dispatch(onSubmitSearchButton(res.data))).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                    dispatch(onError())
                } else {
                    dispatch(onError())
                }
            })

        // axios.get(`http://api.weatherapi.com/v1/current.json?key=d79239169e7340be9c083833222406&q=${query}&aqi=yes`).then(res => dispatch(onSubmitSearchButton(res.data))).catch(dispatch(onError()))
        dispatch(loadingFalse())
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