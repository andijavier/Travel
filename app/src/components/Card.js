import React from 'react'
import { useHistory } from 'react-router-dom'

function Card (props) {
  const history = useHistory()
  const recomData = props.recomData

  function toDetail() {
    history.push('/detail/' + recomData.location_id)
  }

  return (
    <>
      <div className="card m-1 btn"
        style={{ width: "20vw",
        backgroundColor: "#A35709" }}
        onClick={toDetail}
      >
        <img
          src={recomData.photo.images.medium.url}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "15vh"}}/>
        <div className="card-body">
          <h6 className="card-title" style={{color: "whitesmoke"}}>{recomData.name}</h6>
        </div>
      </div>
    </>
  )
}

export default Card