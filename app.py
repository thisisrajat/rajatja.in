from flask import Flask, render_template, request, make_response, redirect
from random import randint
import time

app = Flask(__name__)

# Index Pages
vars = {}
vars['title'] = 'Rajat Jain | I make jokes when I am uncomfortable'
vars['bootstrap'] = None
vars['customsheet'] = None
vars['script'] = None
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


@app.route('/')
@app.route('/index')
def index():
  return render_template('base.html', vars=vars)

# Render the content based on the request via AJAX

@app.route('/render/<which_page>')
def render_page(which_page):
  return render_template('{}.html'.format(which_page))

@app.route('/resume')
def render_resume():
  return redirect('static/resume.pdf')


# Friends 404 :)

@app.errorhandler(404)
def four_oh_four(e):
  index = randint(0, 19)
  return render_template('base.html', vars=vars), 404

if __name__ == '__main__':
  app.run(debug=True)