document.addEventListener('DOMContentLoaded', function() {
var parametersForm = document.getElementById('parametersForm');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

parametersForm.addEventListener('submit', function(event) {
event.preventDefault();

var color = document.getElementById('color').value;
var texture = document.getElementById('texture').value;
var pattern = document.getElementById('pattern').value;

var xhr = new XMLHttpRequest();
xhr.open('POST', '/generate');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
if (xhr.status === 200) {
var design = JSON.parse(xhr.responseText);
drawDesign(design);
}
};
xhr.send('color=' + encodeURIComponent(color) +
'&texture=' + encodeURIComponent(texture) +
'&pattern=' + encodeURIComponent(pattern));
});

function drawDesign(design) {
// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw design
// ...
}
});
