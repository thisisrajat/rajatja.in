from flask import Flask, render_template, request, make_response, redirect
from random import randint
import os
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


ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])



# Index page @ / and /index

@app.route('/')
@app.route('/index')
def index():
  return render_template('base.html', vars=vars)


# Render the content based on the request via AJAX

@app.route('/render/<which_page>')
def render_page(which_page):
  return render_template('{}.html'.format(which_page))


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