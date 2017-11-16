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
		return decompPath[0]+'.blur'+'.jpg';
    }
}





module.exports = utility;