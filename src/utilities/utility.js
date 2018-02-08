const utility = {
    clamp(value, min, max){
        if(value > max)
            return max
        else if(value <min){
            return min;
        }
        return value;
    },

    getCenter(elem){
    	const rect = elem.getBoundingClientRect();
		const width = elem.offsetWidth;
		const height = elem.offsetHeight;
		
		return {
			x: rect.left + width / 2,
			y: rect.top + height / 2
		} 
    },

    getBlurImg(src){
    	const decompPath = src.split('.');
        const str = "."+decompPath[decompPath.length-2]+'.blur'+'.jpg';
        //console.log(str)
		return str;
    },

    isTablet(){
    	return window.innerWidth < 1059 || window.innerHeight < 770;
    },

    isTabletPortrait(){
    	return window.innerWidth < 800;
    },

    isVideo(src){
    	const re = /(?:\.([^.]+))?$/;
    	const ext = re.exec(src)[0];
        let n = src.search('video');
        if(! n > -1)
            n = src.search('youtube')

    	return ext === ".mp4" || ext === ".mov" || n > -1;
    }
}





module.exports = utility;