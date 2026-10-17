const textInput = document.getElementById('textInput');
const letterCount = document.getElementById('letterCount');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const bgBtn = document.getElementById('bgBtn');

textInput.addEventListener('input', () => {
  const text = textInput.value;
  
  letterCount.textContent = text.replace(/\s/g, '').length;
  
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;
  
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  sentenceCount.textContent = sentences.length;
});

bgBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});