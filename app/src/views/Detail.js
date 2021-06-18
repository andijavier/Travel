import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetail } from '../store/action'

function Detail () {
  const { location_id } = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detail)
  const detailLoading = useSelector(state => state.detailLoading)
  const detailErr = useSelector(state => state.detailErr)

  useEffect(() => {
    dispatch(fetchDetail(location_id))
  }, [location_id])

  function toQuery() {
    return detail.name?.split(" ").join("+")
  }

  if(detailErr) {
    return <h4>{detailErr.message}</h4>
  }

  return (
    <>
      {detailLoading? <h3>Loading...</h3> :
        <div className="card mx-5 p-3"
        style={{ backgroundColor: "#F0E3CA",
        justifyItems: "center",
        alignItems: "center" }}>
        <h2>{detail.name}</h2>
        <p>Rating: {detail.rating} <i class="far fa-star"></i></p>
        <img
          src={detail.photo?.images.original.url}
          className="card-img-top"
          alt="..."
          style={{ width: "40vw", height: "45vh"}}/>
        <p className="m-3">{detail.description}</p>
        <p className="my-2" style={{ alignItems: "initial" }} >Address: {detail.address}</p>
        <div className="card-body">
          <div className="row justify-content-start" >
            <div className="col-5">
              <h5>Facilities:</h5>
              <div
                style={{ overflowY: "scroll",
                flexWrap: "wrap",
                maxHeight: "40vh" }}>
                  <ul style={{ flex: 30 }}>
                    {detail.amenities?.map((amenity, i) => {
                      return <li style={{ flex: 1 }} key={i}>{amenity.name} </li>
                    })}
                  </ul>
              </div>
            </div>
            <div className="col-5">
              <h5>Maps:</h5>
                <iframe
                width="250%"
                height="90%"
                frameborder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBInyY6uXyu8lvmL00ufGGEckvns2xZGWc&q=${toQuery()}`} allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Detail