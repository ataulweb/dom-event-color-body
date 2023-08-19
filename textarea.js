document.getElementById('post-btn').addEventListener('click', function(){
    const textArea = document.getElementById('floatingTextarea2')
    const inputText = textArea.value;
    
    const newTextArea = document.getElementById('textarea-container')
    const p = document.createElement('p')
    p.innerText = inputText;
    newTextArea.appendChild(p);

    textArea.value = ''
})