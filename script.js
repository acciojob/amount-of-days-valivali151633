//your JS code here. If required.
let years = prompt(" enter year");
function numberOFDays(year){
	if(year % 4 === 0)
{
	if(year%100=== 0)
	{
		if(year%400 ===0)
		{
			console.log(366)
		}
		else
		{
			coonsole.log(365)
		}
	}
	else
	{
		console.log(366)
	}
}
else
{
	console.log(365)
}
}
numberOFDays(years);
