import logging
from urllib.parse import unquote

from flask import Flask, Request, render_template, request
from modules import (Config, Json)

logger = logging.getLogger("main")

class Dashboard():
    app = Flask(__name__)
    def __init__(self) -> None:
        pass

    @app.route("/", methods=["GET", "POST"])
    def root():
        return open("index.html").read()
    
    @app.route("/templates/<filename>", methods=["GET", "POST"])
    def template(filename):
        return render_template(filename)
    
    def run(self):
        self.app.run(
            host=Config.web_console.host,
            port=Config.web_console.port,
            debug=Config.web_console.debug,
            use_reloader=False
        )
