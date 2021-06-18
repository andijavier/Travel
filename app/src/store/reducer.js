import {
  SET_HOTEL,
  SET_HOTEL_ERR,
  SET_HOTEL_LOADING,
  SET_RECOMMEND,
  SET_RECOMMEND_LOADING,
  SET_RECOMMEND_ERR,
  SET_DETAIL,
  SET_DETAIL_ERR,
  SET_DETAIL_LOADING
} from "./action"

const initialState = {
  hotel: [],
  recommendation: [],
  detail: [],
  hotelLoading: false,
  recommendLoading: false,
  detailLoading: false,
  hotelErr: null,
  detailErr: null,
  recommendErr: null
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_HOTEL:
      return { ...state, hotel: payload }
    case SET_HOTEL_LOADING:
      return { ...state, hotelLoading: payload }
    case SET_HOTEL_ERR:
      return { ...state, hotelErr: payload }
    case SET_DETAIL:
      return { ...state, detail: payload }
    case SET_DETAIL_LOADING:
      return { ...state, detailLoading: payload }
    case SET_DETAIL_ERR:
      return { ...state, detailErr: payload }
    case SET_RECOMMEND:
      return { ...state, recommendation: payload }
    case SET_RECOMMEND_ERR:
      return { ...state, recommendErr: payload }
    case SET_RECOMMEND_LOADING:
      return { ...state, recommendLoading: payload }
    default:
      return state
  }
}

export default reducer