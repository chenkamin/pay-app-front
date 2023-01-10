import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:8888',
  headers: {
    'Content-Type': 'application/json',
  },
});

const makeApiCall = async (method, url= '', data) => {
    console.log(method,"url - ", 'http://localhost:8888'+url, data)
  try {
    const response = await api({
      method,
      url,
      data,
    });
    console.log('test', response.url)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default  makeApiCall;