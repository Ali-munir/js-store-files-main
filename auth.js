import { postData } from "./utils/httpReq.js";
import { getCookie, setCookie } from "./utils/cookie.js";

const inputsBox =  document.querySelectorAll("input")
const LoginButton = document.querySelector("button")

const submitHandler = async (event) => {
    event.preventDefault();

    const username= inputsBox[0].value;
    const password= inputsBox[1].value;
    
    const response = await postData("auth/login", {
        username,
        password,
    });

    setCookie(response.token)
    location.assign("index.html");
};

const init = () => {
    const cookie = getCookie();
    if (cookie) {
        location.assign("index.html")
    }};

LoginButton.addEventListener("click", submitHandler)
document.addEventListener("DOMContentLoaded", init)