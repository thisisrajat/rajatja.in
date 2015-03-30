from flask import Flask, render_template, request, make_response, redirect
from random import randint, shuffle
import os, time
from four_oh_four import error_message

app = Flask(__name__)

# Global Variables
vars = {}
vars['title'] = 'Rajat Jain | I make jokes when I am uncomfortable'
vars['bootstrap'] = '../static/css/bootstrap.min.css'
vars['customsheet'] = '../static/css/main.css'
vars['script'] = '../static/js/script.js'
vars['jquery'] = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'
vars['bootstrapjs'] = '../static/js/bootstrap.min.js'
vars['font'] = 'http://fonts.googleapis.com/css?family=Open+Sans'
vars['spinjs'] = '../static/js/pace.min.js'

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


ABOUT_CONTENT = '''Hey! I am <strong>Rajat Jain</strong>. I am an undergraduate in my junior year, majoring in <strong>computer science</strong>. I like solving algorithmic puzzles, getting caffinated at odd times of day, coding in <strong>Python</strong> and <strong>Javascript</strong>. Few years back I started participating in programming contests and I've been hooked ever since. Also, I have a knack for minimal UX. If you want to hire me or need a hand with something or just want to say hi, <a href="#contact" onclick="contact()">contact me</a>.'''

CONTACT_LIST = [
  '<img src = "../static/img/facebook.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "https://www.facebook.com/Rajat.legend">Facebook</a></img>', 
  '<img src = "../static/img/googleplus.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "https://plus.google.com/u/0/117644368358855184827/posts">Google+</a></img>', 
  '<img src = "../static/img/twitter.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "http://twitter.com/thisisrajat">Twitter</a></img>', 
  '<img src = "../static/img/linkedin.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "http://in.linkedin.com/in/thisisrajat">LinkedIn</a></img>',
  '<img src = "../static/img/github.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "https://github.com/thisisrajat/">Github</a></img>',
  '<img src = "../static/img/skype.png" height="32px" width="32px">&nbsp;&nbsp;&nbsp;<a href = "#">Skype @thisisrajatjain</a></img>',
  '<img src = "../static/img/mail.png" height="26px" width="32px">&nbsp;&nbsp;&nbsp;<a href= "mailto:rajat@rajatja.in">Mail</a></img>'
]

# Index page @ / and /index
@app.route('/')
@app.route('/index')
def index():
  return render_template('base.html', vars=vars)

# Render about page
@app.route('/render/about')
def render_about_page():
  return ABOUT_CONTENT

# Render contact me
@app.route('/render/contact')
def render_contact_page():
  str_to_return = "Not good at advice! Can I interest you in a sarcastic comment?<br /><br />"
  shuffle(CONTACT_LIST)
  for content in CONTACT_LIST:
    str_to_return += content + "<br /><br />"
  return str_to_return

# Render projects
@app.route('/render/projects')
def render_projects_page():
  return render_template('projects.html')

# Render resume, because why not
@app.route('/resume')
def render_resume():
  return redirect('static/resume.pdf', code=302)

# Friends 404 :)
@app.errorhandler(404)
def four_oh_four(e):
  index = randint(0, len(error_message) - 1)
  return render_template('404.html', vars=vars, error_message=error_message[index]), 404

if __name__ == '__main__':
  app.run(debug=True)