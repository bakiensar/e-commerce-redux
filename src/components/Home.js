import React from 'react'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          // style={{ objectFit: 'cover' }}
          src="/assets/bg9.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay" style={{ marginTop: '200px' }}>
          <div className="container mb-5">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
            <p className="card-text lead fw-bold fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
