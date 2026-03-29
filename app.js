let size = 1;
let increase = document.getElementById('incr');
let decrease = document.getElementById('dec');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let remove = document.getElementById('remove');
let text_color = document.getElementById('color');
let font = document.getElementById('font');
let para = document.getElementById('para');

increase.addEventListener('click', ()=>{
    size += 0.1;
    para.style.fontSize = size + 'em';
});

decrease.addEventListener('click', ()=>{
    size -= 0.1;
    if(size < 0.1) size = 0.1;
    para.style.fontSize = size + 'em';
});

bold.addEventListener('click', ()=>{
    para.style.fontWeight = 'bold';
});

italic.addEventListener('click', ()=>{
    para.style.fontStyle = 'italic';
});

underline.addEventListener('click', ()=>{
    para.style.textDecoration = 'underline';
});

remove.addEventListener('click', ()=>{
    para.style = 'none';
});

text_color.addEventListener('input', ()=>{
    para.style.color = color.value;
});

font.addEventListener('click', ()=>{
    para.style.fontFamily = font.value;
});
