const Animation = {

	hideProject : function(id, callback) {
	    const pImg = document.querySelector('#project_'+id+' .project__image__img');
	    const pDesc = document.querySelector('#project_'+id+' .desc');
	    //console.log(pImg)
	
		const offsetLeft = pDesc.getBoundingClientRect().left;
		console.log(offsetLeft)
		let translateX = -offsetLeft - pDesc.offsetWidth;
		if (id%2 === 0) 
			translateX = Math.abs(offsetLeft - window.innerWidth) 

		//console.log(translateX);
		
		pImg.style.transform = 'translateY(-200%)';
		setTimeout(function(){
			pDesc.style.transform = 'translateX('+translateX+'px)';
		}, 500);
	    
	    setTimeout(function(){
	    	pImg.style = null;
	    	pDesc.style = null;
	    	callback(translateX);
	    }, 1000);
	},

	scrollTo: function (element, to, duration) {

	    if (duration <= 0) return;
	    var difference = to - element.scrollTop;
	    var perTick = difference / duration * 10;

	    setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
	        if (element.scrollTop === to) return;
	        Animation.scrollTo(element, to, duration - 10);
	    }, 10);
	}
};

export default Animation;


