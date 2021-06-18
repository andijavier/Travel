import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotel } from '../store/action'
import Card from '../components/Card'

function HotelList () {
  const query = useLocation().search.split('=')[1]
  const dispatch = useDispatch()
  const hotel = useSelector(state => state.hotel)
  const hotelLoading = useSelector(state => state.hotelLoading)
  const hotelErr = useSelector(state => state.hotelErr)

  useEffect(() => {
    dispatch(fetchHotel(query))
  }, [query])

  if(hotelErr) {
    return <h4>{hotelErr.message}</h4>
  }

  return (
    <>
      <div>
        <h3>Search Result {query.split("%20").join(" ")}</h3>
        <div className="row"
          style={{ maxHeight: "70vh",
          overflowY: "scroll",
          flexWrap: "wrap" }}
        >
          {hotelLoading? <h3>Loading...</h3> :
          hotel.map(data => {
            return <Card key={data.result_object.location_id} recomData={data.result_object} />
          })}
        </div>
      </div>
    </>
  )
}

export default HotelList