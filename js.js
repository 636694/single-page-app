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
    
    let $div = $("<div></div>").addClass("card");
	let $table = $("<table></table>")
		.append($("<tr></tr>")
			.append($("<td></td>").text("journal: "))
			.append($("<td></td>").text(log[i].journal))
			.append($("<td></td>").text("date: "))
			.append($("<td></td>").text(log[i].date))
			.append($("<td></td>").text("time: "))
			.append($("<td></td>").text(log[i].time))
		)
    
}