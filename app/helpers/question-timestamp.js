import Ember from 'ember';

export function questionTimestamp(params/*, hash*/) {
	var month=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	var dayofweek=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
	var date=new Date(parseInt(params));
	var datestring="Posted "+date.getHours()+":"+date.getMinutes()+", "+dayofweek[date.getDay()]+" "+date.getDate()+"-"+month[date.getMonth()];
  	
  	var checkYear=function(date, datestring){
  		var currentyear=new Date().getTime();
  		var yr=new Date(currentyear);
  		var thisyr=parseInt(yr.getFullYear());
  		var dateyr=date.getFullYear();
  		if(thisyr==dateyr){
  			return datestring;
  		}
  		else{
  			var yearsago="";
  			var diff=thisyr-dateyr;
  			if(Math.abs(diff)==1){
  				yearsago=(diff)+" year ago";
  			}
  			else{
  				yearsago=(diff)+" years ago";
  			}
  			return datestring+", "+yearsago;
  		}
  	}
  	return checkYear(date, datestring);
}

export default Ember.Helper.helper(questionTimestamp);
