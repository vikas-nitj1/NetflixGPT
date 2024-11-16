export const LOGO='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';
export const USER_AVTAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6PCrEK1QxHMTjNCL-KYLVtXodbOP6dYG5lSSQ-YJGQ&s";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";
  export const BG_URL='https://i.pinimg.com/originals/95/ea/f8/95eaf8f43b75d58122081002ebf31d61.jpg'

  export const SUPPORTED_LANGUAGE=[
  {identifier:"en", name:"English"},
  {identifier:"hi", name:"Hindi"},
  {identifier:"sp", name:"Spanish"}
];

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;