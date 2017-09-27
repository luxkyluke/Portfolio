var Animation = function () {};
module.exports = Animation;


Animation.hideProject = function(id, callback) {
    const pImg = document.querySelector('#project_'+id+' .project__image__img');
    const pDesc = document.querySelector('#project_'+id+' .project__desc');
    //console.log(pImg)

	pImg.style.transform = 'translateY(-200%)';

    setTimeout(function(){
    	pImg.style = null;
    	callback();
    }, 1000);
};