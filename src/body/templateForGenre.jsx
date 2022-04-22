import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import useAuth from '../hooks/useAuth';
import { increase, decrease } from '../redux/action';
import Footer from './footer'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from '../components/modal';

export default function TemplateForGenre() {
    const [music, setMusic] = useState()
    const [active, setActive] = useState(false)

    useEffect(() => {
        axios.get(`http://192.168.0.101:5000/api/music/getAll`)
            .then((response) => {
                setMusic(response.data);
            })
    }, []);

    const submitModalAddMusic = () => {
        setActive(true)
    }

    console.log(music)
    return (<>
        <div className='wrapper'>
            {/* <button onClick={OnAddHandler}> add </button>
            {auth.isLoaded && (auth.isAdmin ? (
                <button onClick={onSubHAndler}> delete </button>
            ):( <p>ds</p>
            ))} */}
            {/* <div className='item' style={{ display: 'grid', gridAutoRows: 'repeat(12,1fr)' }}>
                <p id="inner" style={{ color: 'black', width: '100px' }}></p>
            </div> */}
            <button onClick={() => submitModalAddMusic()}>add music</button>
            {music?.map((item, index) => {
                return (
                    <>
                        <div>{item.name} {item.model} {index}</div>
                    </>
                );
            })}
            <div></div>
        </div>
        <Footer></Footer>
        <Modal  active = {active} setActive = {setActive} />
    </>);
}
