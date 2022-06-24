export default async function fetchFunction() {
  const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await getApi.json();
  return response;
}

// export function fetchDog() {
//   return (dispatch) => {
//     dispatch(requestDog());
//     return fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => dispatch(getImage(json)))
//     .catch(error => dispatch(failedRequest(error)))
//   }
// }
