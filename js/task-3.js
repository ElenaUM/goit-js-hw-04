const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.name = newName;
  },
  updatePlayTime(hours) {
    this.time = hours;
  },
  getInfo() {
    return `${"Username"} has  ${amount} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
