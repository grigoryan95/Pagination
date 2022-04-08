import axios from "axios";

export const setUpdateProduct = (id, data) => {
    axios.put(
        `https://hihub-dev.kree.dev/api/categories/${id}`,
        data,
        {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV0ZXJpQGFkbWluLmNvbSIsInJvbGUiOjIsImlhdC' +
                    'I6MTYyMDY2NDA5OCwiZXhwIjoxOTM2MjMzMzU4fQ.XBl0vMNnAyD9a1EjtPGhzdej1BJ9hGO3rhvOxBADAMY'
            }
        }
    ).then(e => {
        alert('done');
    }).catch((e) => {
        alert(e.response.data.ErrorMessages[0].Arm)
        // console.log(e.Promise.reject())
        // alert()
    })
};

export default setUpdateProduct;