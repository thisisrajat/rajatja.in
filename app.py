from flask import Flask, render_template, request, make_response, redirect
from random import randint, shuffle
from four_oh_four import error_message
import os

app = Flask(__name__)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


# Index page @ / and /index
@app.route('/')
@app.route('/index')
def index():
  print request.get_json()
  return render_template('base.html')

@app.route('/about')
def about_page():
  return render_template('about.html')

@app.route('/contact')
def contact_page():
  return render_template('contact.html')

@app.route('/facebook')
def redirect_facebook():
  return redirect('https://www.facebook.com/Rajat.legend')

@app.route('/twitter')
def redirect_twitter():
  return redirect('http://twitter.com/thisisrajat')

@app.route('/googleplus')
def redirect_googleplus():
  return redirect('https://plus.google.com/u/0/117644368358855184827/posts')

@app.route('/github')
def redirect_github():
  return redirect('https://github.com/thisisrajat/')

@app.route('/email')
def redirect_email():
  return redirect('mailto:me@rajatja.in')

@app.route('/linkedin')
def redirect_linkedin():
  return redirect('http://in.linkedin.com/in/thisisrajat')

@app.route('/blog')
def redirect_blog():
  return redirect("http://blog.rajatja.in")

# Render projects
@app.route('/projects')
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
  return render_template('404.html', error_message=error_message[index]), 404

# Because chill maar na yaar ;)
@app.route('/chill')
def chill_maar():
  return render_template('chill.html')

# Booze's Birthday 2015
@app.route('/happy/birthday/booze')
def booze():
  return render_template('booze.html')

if __name__ == '__main__':
  app.run(host="0.0.0.0")