// Nice scroll
$("html").niceScroll({
    cursorwidth:"6px",
    cursorborder:"1px solid #fff",
    cursorborderradius:"5px",
    
});

document.getElementById("btn-Login").addEventListener("click", ()=> {
let email = document.getElementById('email-input').value;
let password = document.getElementById('password-input').value;
// LogIn Auth
axios.post('https://reqres.in/api/login', {
    "email": email,
    "password": password
})
    .then((response) => {
        // console.log(response);
        let token = response.data.token;
        localStorage.setItem('token', token);
        // console.log(token);
        // console.log("token Received");
        window.location = "home.html";
    })
    .catch((error) => {
        // console.log(error);
        // alert(error.response.data.error);
        document.getElementById("alert").style.visibility= "visible"
    })
})