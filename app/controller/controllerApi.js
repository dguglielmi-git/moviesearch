const createData = (item, idArray) => {
  const baseURLImg = "https://image.tmdb.org/t/p/w200";

  return {
    id: item.id,
    imagen: `${baseURLImg}${item.poster_path}`,
    title: item.title,
    release: item.release_date,
    vote_average: item.vote_average,
    overview: item.overview,
    vote_count: item.vote_count,
    original_language: item.original_language,
  };
};

const createTvData = (item, idArray) => {
  const baseURLImg = "https://image.tmdb.org/t/p/w200";

  return {
    id: item.id,
    imagen: `${baseURLImg}${item.poster_path}`,
    title: item.name,
    release: item.first_air_date,
    vote_average: item.vote_average,
    overview: item.overview,
    vote_count: item.vote_count,
    original_language: item.original_language,
  };
};

export const getEstrenos = async function () {
  //Parametros de conexion
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const discover =
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  const apiKEY = "af158ebf42ce4f8e554bcd0ba82df8dc";

  const endpoint = `${url}${apiKEY}${discover}`;
  //console.log("Buscando",endpoint);
  let resultado = await fetch(endpoint);
  //console.log("resultado",resultado);
  let rtaApi = await resultado.json();
  //console.log("respuesta bruta",rtaApi);
  //Obtengo estrenos
  const estrenos = rtaApi.results;
  console.log("Resultados", estrenos);
  //Dar formato a los datos para mostrar en la grilla
  let estrenosAMostrar = [];
  let i;
  for (i = 0; i < estrenos.length; i++) {
    estrenosAMostrar.push(createData(estrenos[i], i));
  }
  return estrenosAMostrar;
};

export const getMovie = async function (busqueda) {
  //Parametros de conexion

  const url = "https://api.themoviedb.org/3/search/movie?api_key=";
  const discover = "&language=en-US&query=";
  const apiKEY = "af158ebf42ce4f8e554bcd0ba82df8dc";
  const endq = "&page=1&include_adult=false";

  const endpoint = `${url}${apiKEY}${discover}${busqueda}${endq}`;
  //console.log("Buscando",endpoint);
  let resultado = await fetch(endpoint);
  //console.log("resultado",resultado);
  let rtaApi = await resultado.json();
  //console.log("respuesta bruta",rtaApi);
  //Obtengo estrenos
  const movies = rtaApi.results;
  console.log("Resultados", movies);
  //Dar formato a los datos para mostrar en la grilla
  let moviesAMostrar = [];
  let i;
  for (i = 0; i < movies.length; i++) {
    moviesAMostrar.push(createData(movies[i], i));
  }
  console.log("Buscando: " + busqueda);
  return moviesAMostrar;
};


export const getMoviesBy = async function (movieType) {
  //Parametros de conexion
  const apiKEY = "af158ebf42ce4f8e554bcd0ba82df8dc";
  const url = "";
  const discover = "";  
  const endpoint = "";

  switch (movieType) {
    case "popular":
      url = "https://api.themoviedb.org/3/movie/popular?api_key=";
      discover = "&language=en-US&page=1";
      break;
    case "top_rated":
      url = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
      discover = "&language=en-US&page=1";
      break;
    case "upcoming":
      url = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
      discover = "&language=en-US&page=1";
      break;
    default:
      break;
  }
  endpoint = `${url}${apiKEY}${discover}`;

  let resultado = await fetch(endpoint);
  let rtaApi = await resultado.json();
  //Obtengo estrenos
  const movies_ = rtaApi.results;

  //Dar formato a los datos para mostrar en la grilla
  let moviesAMostrar = [];
  let i;
  for (i = 0; i < movies_.length; i++) {
    moviesAMostrar.push(createData(movies_[i], i));
  }
  return moviesAMostrar;
};


export const getTvBy = async function (tvType) {
  //Parametros de conexion
  const apiKEY = "af158ebf42ce4f8e554bcd0ba82df8dc";
  const url = "";
  const discover = "";  
  const endpoint = "";

  switch (tvType) {
    case "popular":
      url = "https://api.themoviedb.org/3/tv/popular?api_key=";
      discover = "&language=en-US&page=1";
      break;
    case "top_rated":
      url = "https://api.themoviedb.org/3/tv/top_rated?api_key=";
      discover = "&language=en-US&page=1";
      break;
    default:
      break;
  }
  endpoint = `${url}${apiKEY}${discover}`;

  let resultado = await fetch(endpoint);
  let rtaApi = await resultado.json();
  //Obtengo estrenos
  const tvs_ = rtaApi.results;

  //Dar formato a los datos para mostrar en la grilla
  let tvAMostrar = [];
  let i;
  for (i = 0; i < tvs_.length; i++) {
    tvAMostrar.push(createTvData(tvs_[i], i));
  }
  return tvAMostrar;
};