// For bold
document.getElementById('bold').addEventListener('click', function () {
    const bold = document.getElementById('text-area')
    bold.style.fontWeight = 'bold';
})
// For italic
document.getElementById('italic').addEventListener('click', function () {
    const italic = document.getElementById('text-area')
    italic.style.fontStyle = 'italic'
})
// For Underline
document.getElementById('underline').addEventListener('click', function () {
    const underline = document.getElementById('text-area')
    underline.style.textDecoration = 'underline'
})
// For textLeft
document.getElementById('left').addEventListener('click', function () {
    const center = document.getElementById('text-area')
    center.style.textAlign = 'left'
})
// For textCenter
document.getElementById('center').addEventListener('click', function () {
    const center = document.getElementById('text-area')
    center.style.textAlign = 'center'
})
// For textCenter
document.getElementById('right').addEventListener('click', function () {
    const center = document.getElementById('text-area')
    center.style.textAlign = 'right'
})
// Font Size
document.getElementById('font-size').addEventListener('input', function(event){

    const textArea = document.getElementById('text-area')
    const fontSize = event.target.value
    textArea.style.fontSize = fontSize + 'px';
})


//   ColorPicker
document.getElementById('colorPicker').addEventListener('input', function (event) {
    const textArea = document.getElementById('text-area');
    const color = event.target.value;
    textArea.style.color = color;
})