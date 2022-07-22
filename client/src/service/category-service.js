export function fetchCategories () {
  return fetch('/categories').then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error occured during fetch');
  })
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.log(error)
  });
}
