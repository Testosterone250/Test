import axios from 'axios';
import { API_KEY, YOUTUBE_URL } from '../constants/const.js'

export function youtubeRequest(term) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  const request = axios.get(YOUTUBE_URL, { params: params });

  return {
    type: "fetch",
    payload: request
  };
}