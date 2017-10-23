const Animation = {

	hideProject : function(id, callback) {
	    const pImg = document.querySelector('#project_'+id+' .project__image__img');
	    const pDesc = document.querySelector('#project_'+id+' .project__desc');
	    //console.log(pImg)

		pImg.style.transform = 'translateY(-200%)';

	    setTimeout(function(){
	    	pImg.style = null;
	    	callback();
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


