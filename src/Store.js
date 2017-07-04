import axios from 'axios'
export const Store = {
  datas: {
    favorite: []
  },
  getData() {
    return axios.get('http://localhost:3000/').then((res) => {
      console.log("getData en Store: ", res.data.data.results);
      return res.data.data.results;
    });
  },

  getDetail(id) {
    console.log("created de CARD");
    return axios.get('http://localhost:3000/profile/' + id).then((res) => {
      console.log("CARD result: ", res.data.data.results);
      return res.data.data.results[0];
    });
  }
}
