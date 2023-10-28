const userName = prompt('Enter a name:');

switch (userName) {
  case 'Ahmed':
  case 'Bilal':
  case 'ALI':
    console.log('You are a friend.');
    break;
  default:
    console.log("You're not a friend.");
}
