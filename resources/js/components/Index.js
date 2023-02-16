import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './Calendar/Home';

function Index() {

    return (
        <BrowserRouter>
            <div className='container'>
                <div className='border m-3 bg-light p-3 rounded-3' style={{minHeight:'100px'}}>
                    <Routes>
                        <Route path='/' index element={<><Calendar /></>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
