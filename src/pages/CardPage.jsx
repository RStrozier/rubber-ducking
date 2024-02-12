import React, { useEffect } from 'react';
import '../App.css';
import CardContainer from '../components/CardContainer';

const Homepage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
      })
    },
    {
      rootMargin: "-100px",
    });

    cards.forEach(card => {
      intersectionObserver.observe(card);
    });

    // Clean up the observer when the component unmounts
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="page-container">
        <CardContainer />
      </div>
    </>
  );
}

export default Homepage;