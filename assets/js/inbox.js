
// ==================================== compose button ==========================================

var composeEmail = document.getElementById('cmpMail');
var inboxForm = document.getElementById('inbox');
var composeBtn = document.getElementById('composeBtn');
composeBtn.addEventListener('click', openCompose);

function openCompose(){
    inboxForm.style.display = 'none';
    composeEmail.style.display = 'block';
    sentForm.style.display = 'none';
    draftForm.style.display = 'none';
    CreateGroupeMailForm.style.display = 'none';
}

var closeComposeEmail = document.getElementById('closeComposeEmail');
closeComposeEmail.addEventListener('click', closeCompose);

function closeCompose(){
    composeEmail.style.display = 'none';
    inboxForm.style.display = 'block';
}



// ==================================== inbox ===================================================

var inboxForm = document.getElementById('inbox');
var composeBtn = document.getElementById('composeBtn');

inboxBtn.addEventListener('click', openInboxView);

function openInboxView(){
    draftForm.style.display = 'none';
    composeEmail.style.display = 'none';
    sentForm.style.display = 'none';
    inboxForm.style.display = 'block';
    inboxBtn.style.color = 'white';
    inboxBtn.style.background = '#d8af3f';
    sentBtn.style.color = 'white';
    sentBtn.style.background = 'transparent';
    draftBtn.style.color = 'white';
    draftBtn.style.background = 'transparent'; 
    CreateGroupeMailForm.style.display = 'none';
    
}

// ==================================== sent ===================================================

var sentForm = document.getElementById('sentMessage');
var sentBtn = document.getElementById('sentBtn');

sentBtn.addEventListener('click', openSentView);

function openSentView(){
    inboxForm.style.display = 'none';
    composeEmail.style.display = 'none';
    draftForm.style.display = 'none';
    sentForm.style.display = 'block';
    sentBtn.style.color = 'white';
    sentBtn.style.background = '#d8af3f';
    inboxBtn.style.color = 'white';
    inboxBtn.style.background = 'transparent';
    draftBtn.style.color = 'white';
    draftBtn.style.background = 'transparent'; 
    inboxBtn.style.background = 'transparent';
    CreateGroupeMailForm.style.display = 'none';
}


// ==================================== draft ===================================================

var draftForm = document.getElementById('draftMessage');
var draftBtn = document.getElementById('draftBtn');

draftBtn.addEventListener('click', opendraftView);

function opendraftView(){
    inboxForm.style.display = 'none';
    composeEmail.style.display = 'none';
    sentForm.style.display = 'none';
    CreateGroupeMailForm.style.display = 'none';
    draftForm.style.display = 'block';    
    draftBtn.style.color = 'white';
    draftBtn.style.background = '#d8af3f';  
     inboxBtn.style.color = 'white';
    inboxBtn.style.background = 'transparent';
    sentBtn.style.color = 'white';
    sentBtn.style.background = 'transparent';
    inboxBtn.style.background = 'transparent';
}

// ==================================== create Groupe ===================================================

var CreateGroupeMailForm = document.getElementById('crtGroupe');
var CreateGpBtn = document.getElementById('CreateGpBtn');
CreateGpBtn.addEventListener('click', openCreateGroupeView);

function openCreateGroupeView(){
    inboxForm.style.display = 'none';
    composeEmail.style.display = 'none';
    sentForm.style.display = 'none';
    CreateGroupeMailForm.style.display = 'block';
    inboxBtn.style.background = 'transparent';
}

var closeCreateGroupeMail = document.getElementById('closeCreateGroupeMail');
closeCreateGroupeMail.addEventListener('click', closecreateGrp);

function closecreateGrp(){
    CreateGroupeMailForm.style.display = 'none';

    inboxForm.style.display = 'block';
}