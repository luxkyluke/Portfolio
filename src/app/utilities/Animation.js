var Animation = function () {};
module.exports = Animation;


Animation.hideProject = function(id) {
    const pImg = document.querySelector('#project_'+id+' .project__image');
    const pDesc = document.querySelector('#project_'+id+' .project__desc');
    console.log(pImg)
    pImg.style.transform = 'scale(0.8)';
};