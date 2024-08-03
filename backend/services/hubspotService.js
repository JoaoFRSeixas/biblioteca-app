
import axios from 'axios';

const API_KEY = process.env.API_KEY

const createContact = async (contactData) => {
  let data = {
    "properties": {
      "firstname": `${contactData}`,
    }
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.hubapi.com/crm/v3/objects/contacts',
    headers: {
      'authorization': `Bearer ${API_KEY}`,
      'content-type': 'application/json'
    },
    data: data
  };

  try {
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
};

export default createContact
