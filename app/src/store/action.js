export const SET_RECOMMEND = 'recommendation/setRecommendation'
export const SET_RECOMMEND_LOADING = 'recommendationLoading/setRecommendationLoading'
export const SET_RECOMMEND_ERR = 'recommendationErr/setRecommendationErr'
export const SET_HOTEL = 'hotel/setHotel'
export const SET_HOTEL_LOADING = 'hotelLoading/setHotelLoading'
export const SET_HOTEL_ERR = 'hotelErr/setHotelErr'
export const SET_DETAIL = 'detail/setDetail'
export const SET_DETAIL_LOADING = 'detailLoading/setDetailLoading'
export const SET_DETAIL_ERR = 'detailErr/setDetailErr'

export function setRecommend (payload) {
  return { type: SET_RECOMMEND, payload }
}
export function setRecommendLoading (payload) {
  return { type: SET_RECOMMEND_LOADING, payload }
}
export function setRecommendErr (payload) {
  return { type: SET_RECOMMEND_ERR, payload }
}
export function setHotel (payload) {
  return { type: SET_HOTEL, payload }
}
export function setHotelLoading (payload) {
  return { type: SET_HOTEL_LOADING, payload }
}
export function setHotelErr (payload) {
  return { type: SET_HOTEL_ERR, payload }
}
export function setDetail (payload) {
  return { type: SET_DETAIL, payload }
}
export function setDetailLoading (payload) {
  return { type: SET_DETAIL_LOADING, payload }
}
export function setDetailErr (payload) {
  return { type: SET_DETAIL_ERR, payload }
}

export function fetchRecommend () {
  return function (dispatch) {
    dispatch(setRecommendLoading(true))
    fetch("https://travel-advisor.p.rapidapi.com/locations/search?query=amaris%20jakarta&sort=relevance&lang=en_US", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d6d0e9407dmshac156ea46b856b2p11d367jsnd81ebddbd315",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setRecommend(data.data))
      })
      .catch(err => {
        setRecommendErr(err)
      })
      .finally(() => {
        dispatch(setRecommendLoading(false))
      })
  }
}
export function fetchDetail (location_id) {
  return function (dispatch) {
    dispatch(setDetailLoading(true))
    fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${location_id}&lang=en_US`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d6d0e9407dmshac156ea46b856b2p11d367jsnd81ebddbd315",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(({ data }) => {
        dispatch(setDetail(data[0]))
      })
      .catch(err => {
        setDetailErr(err)
      })
      .finally(() => {
        dispatch(setDetailLoading(false))
      })
  }
}
export function fetchHotel (query) {
  return function (dispatch) {
    dispatch(setHotelLoading(true))
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${query}&sort=relevance&lang=en_US`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d6d0e9407dmshac156ea46b856b2p11d367jsnd81ebddbd315",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(({ data }) => {
        dispatch(setHotel(data))
      })
      .catch(err => {
        setHotelErr(err)
      })
      .finally(() => {
        dispatch(setHotelLoading(false))
      })
  }
}