const Command = require('command');

module.exports = function auto_beer(dispatch) {
	const command = Command(dispatch);
	const HEADID = 98260;
	HARROWHOLD = 9950;
	inDung = false;

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
        inDung =(event.zone == HARROWHOLD);
    });
	dispatch.hook('S_SPAWN_DROPITEM', 6, (event) => {           
		if(inDung){	
			if (HEADID!=event.item){
				return false;
			}
		}
	});
}