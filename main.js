(function (){
  let sliding = false;

  function slide(x) {
    let transform = Math.max(8,(Math.min(x, document.querySelector('.ct').offsetWidth-2)));
    document.querySelector('.ct_disc').style.width = transform + "px";
    document.querySelector('.ct_slider').style.left = transform-4 + "px";
  }

  slide(document.querySelector('.ct').offsetWidth/2)

  document.querySelector('.ct_slider').addEventListener('mousedown',()=>{
    sliding = true;
    console.log('sliding ' );
  });
  document.body.addEventListener('mouseup', ()=>{
    sliding = false;
  })
  document.body.addEventListener('moumouseleave', ()=>{
    sliding = false;
  })
  document.querySelector('.ct_disc').addEventListener('click',()=>{
    slide(850)
  })

  document.body.addEventListener('mousemove', (e)=>{
    if (!sliding) return;
    let x = e.pageX
    x -= document.querySelector('.ct').getBoundingClientRect().left;
    slide(x);
  });
})()
