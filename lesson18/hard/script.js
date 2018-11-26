var name = prompt('Как вас зовут?',)
var age = prompt('Сколько вам лет?', );
var logic;

if (age >=18) {
	logic = 1;
	if (prompt('Подписаны ли вы на рассылку?', ) == 'да') {
	alert('Вы допущены к сайту');
}
else 
 alert('Доступ запрещен, подпишитесь на рассылку');
 logic = 0;
}
else
 logic = 0;
 
function accessForm() {
	alert('Вы допущены к сайту');
	console.log('Пользователь допущен');
}

if (logic == 1){
	accessForm();
}

