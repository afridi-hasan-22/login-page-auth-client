import React, { useEffect } from 'react';

const Home = () => {
  useEffect(()=> {
    fetch('/api/alldata').then(res => res.json()).then(data => console.log(data))
  },[])
  return (
    <div>
      <h1>this is home</h1>
    </div>
  );
};

export default Home;