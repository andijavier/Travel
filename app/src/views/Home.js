import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { fetchRecommend } from '../store/action'

function Home() {
  const dispatch = useDispatch()
  const recommend = useSelector(state => state.recommendation)
  const recommendLoading = useSelector(state => state.recommendLoading)
  const [query, setQuery] = useState('')

  useEffect(() => {
    dispatch(fetchRecommend())
  }, [])

  return (
    <>
      <div className="p-3 ">
        <div className="my-3 card shadow bg-body">
          <div className="card-body" style={{ backgroundColor: "#F0E3CA", padding: 30 }}>
            <h5 className="card-title">What hotel do look for ?</h5>
            <div style={{ flexDirection: "column", justifyItems: "space-around" }}>
              <i className="fas fa-search-location" style={{ margin: 15 }}></i>
              <input
                style={{ borderRadius: 15, width: "95%" }}
                placeholder="City, hotel, place to go"
                type="text" onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <p className="card-text">Find the hotel you are looking at your destination</p>
            <Link className="btn"
              style={{ backgroundColor: "#FF8303",
              color: "whitesmoke",
              marginLeft: "80%",
              borderRadius: 30,
              fontSize: 20,
              width: "10vw" }}
              to={{
                pathname: "/search",
                search: `?query=${query.split(' ').join('%20')}`,}}
            >SEARCH</Link>
          </div>
        </div>
        <div className="my-3" style={{ overflow: "hidden" }}>
          <h2>Recommendation</h2>
          <div className="row"
            style={{ maxWidth: "100vw",
            overflowX: "scroll",
            flexWrap: "nowrap" }}
          >
            {recommendLoading? <h3>Loading...</h3> : 
              recommend.map(data => {
                return <Card key={data.result_object.location_id} recomData={data.result_object} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;