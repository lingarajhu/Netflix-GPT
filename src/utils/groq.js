// import { GROQ_API_KEY } from "./constants";

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

export default groq;
