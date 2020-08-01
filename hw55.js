var p = document.getElementById('nextmove')
var lastX, lastY, cursorX, cursorY;

window.addEventListener('mousemove', function (e) {
  cursorX = e.pageX;
  cursorY = e.pageY;
})
setInterval(function () {
  var newX = p.offsetLeft + (cursorX - lastX) / 20
  var newY = p.offsetTop + (cursorY - lastY) / 20

  p.style.left = newX + 'px'
  p.style.top = newY + 'px'

  lastX = p.offsetLeft
  lastY = p.offsetTop
}, 20)