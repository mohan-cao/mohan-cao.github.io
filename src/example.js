fetch('https://api.github.com/users/mohan-cao/repos').then(x => x.text()).then(x => console.log(x))