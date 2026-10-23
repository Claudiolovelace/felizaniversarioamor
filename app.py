from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/historia")
def historia():
    return render_template("historia.html")


@app.route("/recuerdos")
def recuerdos():
    return render_template("recuerdos.html")


@app.route("/para-ti")
def para_ti():
    return render_template("para-ti.html")


@app.route("/jardin")
def jardin():
    return render_template("jardin.html")


@app.route("/cancion")
def cancion():
    return render_template("cancion.html")


@app.route("/lo-que-amo")
def lo_que_amo():
    return render_template("lo-que-amo.html")


@app.route("/sorpresa")
def sorpresa():
    return render_template("sorpresa.html")


if __name__ == "__main__":
    app.run(debug=True)