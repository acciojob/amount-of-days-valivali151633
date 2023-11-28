function numberOfDays(year){
	function isleapyear(year){
		return ((year%4===0 &&  year%100!==0)||(year%400===0))
	}
	return isleapyear(year) ? 366 : 365;
}
let year=prompt("enter year");
