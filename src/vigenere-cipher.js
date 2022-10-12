const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  regex =  /[A-Za-z]/;
  startLetterNumber = 97;
  letterCount = 26;
  modification = true;
  constructor(modification) {
    if(modification == undefined) this.modification = true;
    else {
      this.modification = modification;
    }
  }

  encrypt(str, key) {
    if(str == undefined || key == undefined) throw new Error('Incorrect arguments!');
    str = str.toLowerCase();
    key = key.toLowerCase();
    let encrypted = [];
    for(let i = 0, j = 0; i < str.length; i++, j++) {
      if(this.regex.test(str[i])) {
        let diff = str.charCodeAt(i) - this.startLetterNumber + key.charCodeAt(j) - this.startLetterNumber;
        let reminder = diff % this.letterCount;
        encrypted[i] = String.fromCharCode(reminder + this.startLetterNumber);
      }
      else {
        --j;
        encrypted[i] = str[i];
      }
      if(j == key.length - 1) j = -1; 
    }
    if(!this.modification) encrypted = encrypted.reverse();
    let encryptedStr = encrypted.join('').toUpperCase();
    return encryptedStr;
  }

  decrypt(str, key) {
    if(str == undefined || key == undefined) throw new Error('Incorrect arguments!');
    str = str.toLowerCase();
    key = key.toLowerCase();
    let decrypted = [];
    for(let i = 0, j = 0; i < str.length; i++, j++) {
      if(this.regex.test(str[i])) {
        let diff = (str.charCodeAt(i) - this.startLetterNumber) - (key.charCodeAt(j) - this.startLetterNumber);
        let reminder;
        if(diff < 0) {
          reminder = this.letterCount - Math.abs(diff);
        } else {
          reminder = diff;
        }
        decrypted[i] = String.fromCharCode(reminder + this.startLetterNumber);
      }
      else {
        --j;
        decrypted[i] = str[i];
      }
      if(j == key.length - 1) j = -1; 
    }
    if(!this.modification) decrypted = decrypted.reverse();
    let decryptedStr = decrypted.join('').toUpperCase();
    return decryptedStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
