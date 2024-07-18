from flask import Blueprint, render_template

#tworzymy blueprint
main = Blueprint('main', __name__)

@main.route("/")
def home():
    return render_template('base.html')