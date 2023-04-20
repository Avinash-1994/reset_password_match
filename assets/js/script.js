(function () {
  var password = document.querySelector('.password');
  var check_password = document.querySelector('.check_password');
  var btn_submit = document.querySelector('#btn-submit');
  var validationlist = {
    charLength: document.querySelector('.validation-list .length'),
    lowercase: document.querySelector('.validation-list .lowercase'),
    uppercase: document.querySelector('.validation-list .uppercase'),
    special: document.querySelector('.validation-list .special'),
    onenumber: document.querySelector('.validation-list .number')
  };

  var pattern = {
    charLength: () => {
      if (password.value.length >= 8) {
        return true;
      }
    },
    lowercase: () => {
      var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

      if (regex.test(password.value)) {
        return true;
      }
    },
    uppercase: () => {
      var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

      if (regex.test(password.value)) {
        return true;
      }
    },
    special: () => {
      var regex = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/; // Special character pattern

      if (regex.test(password.value)) {
        return true;
      }
    },
    onenumber: () => {
      var regex = /^(?=.*[0-9]).+$/; // number pattern pattern

      if (regex.test(password.value)) {
        return true;
      }
    }

  };

  // Listen for keyup action on password field
  password.addEventListener('keyup', () => {
    // Check that password is a minimum of 8 characters
    patternTest(pattern.charLength(), validationlist.charLength);

    // Check that password contains a lowercase letter      
    patternTest(pattern.lowercase(), validationlist.lowercase);

    // Check that password contains an uppercase letter
    patternTest(pattern.uppercase(), validationlist.uppercase);

    // Check that password contains special character
    patternTest(pattern.special(), validationlist.special);

    // Check that password contains number
    patternTest(pattern.onenumber(), validationlist.onenumber);
  });


  // check that both password matching 
  check_password.addEventListener('keyup', () => {
    if (password.value == check_password.value) {
      check_password.classList.add("success");
      password.classList.add("success");
      
    }
    else {
      check_password.classList.remove("success");
      password.classList.remove("success");
      check_password.classList.add('error');
      password.classList.add('error');
      document.querySelector('.help-txt').style.display="none";
    }
  });

  btn_submit.addEventListener('click', (event)=>{
    event.preventDefault();
    if(password.value === check_password.value){
      document.querySelector('.help-txt').style.display="block";
      document.querySelector('.help-txt').innerHTML+=`${check_password.value}`;
    }
    else{
      document.querySelector('.help-txt').style.display="none";
    }
  });

  function patternTest(pattern, response) {
    if (pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
  }

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    }
    else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

  }

  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    }
    else {
      new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

})();


let arry=['avinah','kumar','rajesh'];
for(let i in arry){
  console.log(arry[i]);
}

let obja = {
  name:'avinash',
  location:'bilaspur',
  add:'tifra',
}
for (let i in obja){
  console.log(obja[i]);
}

const tbalenum = 19;
for (i=1; i <= 10;i++){
  console.log(i*tbalenum);
}