$(document).ready(function() {

var tasks = [{
        'name' : 'Do homework',
        'complete' : true
    }, {
        'name' : 'Feed cats',
        'complete' : true
    }, {
        'name' : 'call mom',
		'complete' : false
    }, {
        'name' : 'Do the dishes',
        'complete' : false
    }];


$('body').append('<h2>My To Do List</h2>');

$('body').append('<ul>');

	for(var i= 0; i < tasks.length; i++) {
		   printTask (tasks[i]);
		   }

$('body').append('</ul>');

function printTask (task) {
    if (task['complete']) {
        $('ul').append('<li class="complete">' + task.name + '</li>');
    } else {
        $('ul').append('<li>' + task.name + '</li>'); 
    }
};

function removeTask (task) {
    if (task['complete']) {
        $('li').remove('.complete');
	}
};
});