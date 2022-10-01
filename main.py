from flask import Flask, render_template

from modules import Json

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def root():
    return open("index.html").read()

@app.route("/templates/<filename>", methods=["GET", "POST"])
def template(filename):
    return render_template(filename)

if __name__ == "__main__":    
    CONFIG = Json.load("config.json")

    app.run(
        host=CONFIG["web_console"]["host"],
        port=CONFIG["web_console"]["port"],
        debug=CONFIG["web_console"]["debug"],
        use_reloader=False
    )

    