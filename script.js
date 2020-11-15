var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  animationWindow = select('#animationWindow'),    
    animData = {
		wrapper: animationWindow,
		animType: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/egg_flip.json'
	}, anim;

	anim = bodymovin.loadAnimation(animData);
 anim.addEventListener('DOMLoaded', onDOMLoaded);
 anim.setSpeed(15);

function onDOMLoaded(e){
  
 animationWindow.onclick = function(e){
  if(anim.currentFrame > 0){
   anim.playSegments([anim.currentFrame, 0], true);
   TweenMax.to('.eggGroup', 1, {
    x:0,
    ease:Elastic.easeOut.config(0.9,0.38)
   })   
  } else {
   TweenMax.to('.eggGroup', 1.4, {
    x:73,
    ease:Elastic.easeOut.config(0.9,0.38)
   })
   anim.playSegments([anim.currentFrame, 300], true)
  }
 }
}