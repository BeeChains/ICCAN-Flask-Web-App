from flask import Flask, render_template, request, jsonify
from iccan import ICCAN

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    # Get parameters from request
    color = request.form['color']
    texture = request.form['texture']
    pattern = request.form['pattern']

    # Generate camouflage design
    iccan = ICCAN()
    design = iccan.generate(color, texture, pattern)

    # Return generated design as JSON response
    return jsonify(design)

if __name__ == '__main__':
app.run()
