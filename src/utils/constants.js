import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const twitterIcon = <FontAwesomeIcon icon={faSquareXTwitter} />;
const faceBook = <FontAwesomeIcon icon={faSquareFacebook} />;
const insta = <FontAwesomeIcon icon={faSquareInstagram} />;
const snapChat = <FontAwesomeIcon icon={faSquareSnapchat} />;

export const media = [
  { icon: twitterIcon, link: "https://x.com" },
  { icon: faceBook, link: "https://facebook.com" },
  { icon: insta, link: "https://instagram.com" },
  { icon: snapChat, link: "https://snapchat.com" },
];

export const NETFLIX_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_POSTER_CDN = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GROQ_API_KEY = process.env.REACT_APP_GROQ_KEY;
