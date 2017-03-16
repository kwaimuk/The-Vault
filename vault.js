'use strict';

function vault() {
var vault ={};
var passcode ={};

  function _setValue(key,value){
    passcode=key;
    vault=value;
  }

  function _getValue(key){
    if(key===passcode){
        return vault;
      }else{
        return null;
      }
    }



	return {
		getValue: _getValue,
		setValue:_setValue
	};
}

module.exports = vault;

var myVault = vault();
console.log(myVault);