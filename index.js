const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'username',  //Enter here your account login
	password: 'password'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([730,10]);    //List app IDs
});