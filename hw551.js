var p = document.getElementById('nextmovee')
var lastX, lastY, cursorX, cursorY;

window.addEventListener('mousemove', function (e) {
  cursorX = e.pageX;
  cursorY = e.pageY;
})
setInterval(function () {
  var newX = p.offsetLeft + (cursorX - lastX) / 1
  var newY = p.offsetTop + (cursorY - lastY) / 1

  p.style.left = newX + 'px'
  p.style.top = newY + 'px'

  lastX = p.offsetLeft
  lastY = p.offsetTop
}, 1)