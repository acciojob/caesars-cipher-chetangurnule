// Your Script here.
function rot13(str){
	let newStr = "";
	for(let i = 0; i < str.length; i++){
		if(str.charCodeAt(i)>= 65 && str.charCodeAT(i) <= 90){
			for(let i = 1; i <= 13; i++){
				if(str.charCodeAt(i) < 90){
					str.charCodeAt(i) += 1;
				}else{
					str.charCodeAt(i) = 65;
				}
			}
			let newValue = str.charCodeAt(i);
			newStr += String.fromCharCode(newValue);
		}else{
			newStr += str.charAt(i);
		}
	}
	return newStr;
}
