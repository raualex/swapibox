

export const getIntro = async () => {
  const url = 'films/'
  const result = await fetchData(url)  
  return result;
}


export const fetchData = async (url, func = null) => {
  const response = await fetch(`https://swapi.co/api/${url}`);
  const intro = await response.json();
  return intro.results;  
}




