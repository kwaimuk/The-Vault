'use strict';

function vault() {
//create two objects for storage. Put in records for vault and passcode.
var vault = {};
var passcode = {};

  function _setValue(key,value){
    //incoming key will assign to passcode
    passcode=key;
    //incoming value will assing to vault
    vault=value;
  }

  function _getValue(key){
    //if incoming key is matched to current passcode, or not, return null
    if(key === passcode){
        return vault;
      }else{
        return null;
      }
    }



	return {
    /*for npm test looking for gV and sV, it will
    look for _gV and _sV which are functions*/
		getValue: _getValue,
		setValue:_setValue
	};
}

module.exports = vault;

var myVault = vault();
console.log(myVault);