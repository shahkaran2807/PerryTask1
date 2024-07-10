import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

function Home() {
   const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/getImages')
    
   };
  return (
   <div>
    <Container className='d-flex justify-content-center align-items-center vh-100 bg-light'>
        <form onSubmit={handleSubmit}>
        <input type="submit" className="btn btn-primary w-100 mt-5"/>
      </form>
    </Container>
   </div>
  );
}

export default Home;