//     ================================ login =================================================================================

// login form
var loginform = document.getElementById('myLogin');

// Sign in button on landing page at the bar
var signInBtn = document.getElementById('signInBtn');

// function to display login form on landing page

signInBtn.addEventListener('click', dispalySignIn);

function dispalySignIn(){
    signupform.style.display = 'none';
    loginform.style.display = 'block';
    resetPasswdform.style.display = 'none';
}


//     ================================ Sign up =================================================================================


//sign-up form 
var signupform = document.getElementById('mySignup');
 
//sigb up button on landing page at the bar
var signUpBtn = document.getElementById('signUpBtn');


// function to display the sign up form on the landing page
signUpBtn.addEventListener('click', dispalySignUp);

function dispalySignUp(){
    loginform.style.display = 'none';
    resetPasswdform.style.display = 'none';
    signupform.style.display = 'block';
    
}

// === submit form ===

var submt1 = document.getElementById('submt1');

submt1.addEventListener('click', showLoginForm);

function showLoginForm(){
    resetPasswdform.style.display = 'none';
    signupform.style.display = 'none';
    loginform.style.display= 'block';
}



//   ================================= Reset password ================================

//======reset form 
var resetPasswdform = document.getElementById('myReset');

//======the button that lead to our function
var ResetBtn = document.getElementById('ResetBtn');

//========== function to display the password-Reset form 
ResetBtn.addEventListener('click', displayResetform);

function displayResetform(){
    
    loginform.style.display = 'none';
    signupform.style.display = 'none';
    resetPasswdform.style.display = 'block';

}


//========================  outside click close   ============================================================================


window.addEventListener('click', clickOutside);

// function to close windows if clicked outside
function clickOutside(o){
    if(o.target == loginform){
        loginform.style.display = 'none';
    }
   
    if(o.target == signupform){
        signupform.style.display = 'none';
    }

    if(o.target == resetPasswdform){
        resetPasswdform.style.display = 'none';
    }
    
}


