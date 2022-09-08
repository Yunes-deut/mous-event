
const xvalueEl=document.querySelector('.xValue');
const yvalueEl=document.querySelector('.yValue');



this.addEventListener('mousemove',(Event)=>{

        xvalueEl.innerHTML=Event.clientX;
        yvalueEl.innerHTML=Event.clientY;
  
})
  
