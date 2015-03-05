window.onload = function() {
  document.getElementById('about').className = 'active';
  about();
};

function renderHtml(name) {
  var request = new XMLHttpRequest();
  request.open('GET', '/render/' + name, true);
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      document.getElementById('content').className = 'wrapper ' + name + '-content';
      document.getElementById('content').innerHTML = request.responseText;
    }
  };
  request.send();
}

function removeActiveClass() {
  ids = ['about', 'projects', 'blog', 'resume', 'contact'];
  for(var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).className = "";
  }
}

function removeFunnyText() {
  ids = ['about', 'projects', 'blog', 'resume', 'contact'];
  var newText = {
    'about' : 'About',
    'projects' : 'Projects',
    'blog' : 'Blog',
    'resume' : 'Resume',
    'contact' : 'Contact'
  }
  for(var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).childNodes[0].innerHTML = newText[ids[i]];
  }
}

function about() {
  removeActiveClass();
  removeFunnyText();
  document.getElementById('about').className = "active";
  document.getElementById('about').childNodes[0].innerHTML = 'About - That I wrote';
  renderHtml('about');
}

function projects() {
  removeActiveClass();
  removeFunnyText();
  document.getElementById('projects').className = "active";
  document.getElementById('projects').childNodes[0].innerHTML = 'Projects - That I code';
  renderHtml('projects');
}

function resume() {
  removeActiveClass();
  removeFunnyText();
  document.getElementById('resume').className = "active";
  document.getElementById('resume').childNodes[0].innerHTML = 'Resume - That show my competence';
  setTimeout(about, 5000);
}

function contact() {
  removeActiveClass();
  removeFunnyText();
  document.getElementById('contact').className = "active";
  document.getElementById('contact').childNodes[0].innerHTML = 'Contact me - You know you want to';
  renderHtml('contact');
}
