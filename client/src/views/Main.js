import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PirateForm from '../components/PirateForm';
import PirateList from '../components/PirateList';
import PirateInfo from '../components/PirateInfo'; 
import EditPirateForm from '../components/EditPirateForm';
import { Routes, Route, Link} from 'react-router-dom';

export default () => {
    return (
        <>
         <div className="w-75 mx-auto p-1"></div>

          <Routes>
          <Route path="/" element={<PirateList />} />
          <Route path="/new" element={<PirateForm />} />
          <Route path="/pirate/:_id" element={<PirateInfo/>} />
          <Route path="/edit/:_id" element={<EditPirateForm/>} />
        </Routes>
        </>
      );
}
