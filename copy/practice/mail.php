<?php 
	if(mail("daddyfuckinggosh@mail.ru", "Test Ajax", $_REQUEST["fio"] . " " . $_REQUEST["phone"]))
		echo "1";
	else
		echo "0";
?>