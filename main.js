const textarea = document.getElementById('text');
const languages = document.getElementById('languages');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let language = languages.value === 'pt-BR' ? 'pt-BR': 'en-US';

    const speaks = new SpeechSynthesisUtterance(textarea.value);
    speaks.lang = language;
    window.speechSynthesis.speak(speaks);
})