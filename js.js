$(document).ready(main);

function main()	{
    
    var log = [
        
        {
            journal: "lorem ipsum",
            date: "October 11th, 2018",
            time: "8:00",
        },
        
        {
            journal: "ABC",
            date: "October 12th, 2018",
            time: "7:00",
        },
        
        {
            journal: "123",
            date: "October 13th, 2018",
            time: "14:00",
        },
        
    ];
    
    
    for (let i = 0; i < log.length; i++) {
        
    let $div = $("<div></div>").addClass("card");
	let $table = $("<table></table>")
		.append($("<tr></tr>")
			.append($("<td></td>").text("Journal Entry: "))
			.append($("<td></td>").text(log[i].journal))
			.append($("<td></td>").text("Date: "))
			.append($("<td></td>").text(log[i].date))
			.append($("<td></td>").text("Time: "))
			.append($("<td></td>").text(log[i].time))
		)
    
    $div.append( $("<h3></h3").text(log[i].name) )
		.append( $("<img>").attr("src",log[i].img) )
		.append( $( $table) )
	
	$("body").append( $div );
    
    }
}