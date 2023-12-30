
const button = document.createElement('button')
const style = document.createElement('style')
style.appendChild(document.createTextNode(`
.back-to-top-btn {
  font-family: 'Roboto', sans-serif;
  position: fixed;
  right: 8px;
  bottom: 8px;
  z-index: 10;
  padding: 5px;
  background: white;
  border: 1px solid #222;
  border-radius: 3px;
  cursor: pointer;
  transition: color 0.1s linear, background 0.1s linear;
  box-shadow: 0px 1px 4px 0px #c0c0c051;
}

.back-to-top-btn:hover {
  background: #222;
  color: white;
}
`))
document.head.appendChild(style)

button.classList.add('back-to-top-btn')
button.textContent = 'Back to top'
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

document.body.appendChild(button)
