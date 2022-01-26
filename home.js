class homePage {
  constructor() {
    this.loginButton = createButton("login")
    this.signUpButton = createButton("register")
    this.title = createElement("h2")
    this.welcomeText = createElement("h2")
    this.loginText = createElement("h2")
    this.signUpText = createElement("h2")
  }

  setPosition() {
    this.title.position(width / 2 - 420, height / 2 - 350);
    this.welcomeText.position(width / 2 - 405, height / 2 - 280, 50);
    this.loginText.position(width / 2 - 125, height / 2 - 150)
    this.signUpText.position(width / 2 - 130, height / 2)
    this.loginButton.position(width / 2 - 50, height / 2 - 50);
    this.signUpButton.position(width / 2 - 55, height / 2 + 100);
  }
  setElementsStyle() {
    this.title.class("greeting3");
    this.welcomeText.class("greeting4")
    this.loginText.class("greeting5")
    this.signUpText.class("greeting5")
    this.loginButton.class("customButton");
    this.signUpButton.class("customButton");
  }

  hide() {
    this.title.hide();
    this.welcomeText.hide();
    this.loginText.hide();
    this.signUpText.hide();
    this.loginButton.hide();
    this.signUpButton.hide();
  }

  passwordFinder(){

  }

  async password(){
    const { value: password } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
      confirmButtonText : 'view password',
      showCancelButton: true ,
      cancelButtonText: 'ok',
      inputAttributes: {
        maxlength: 50,
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      inputValidator: (value) => {
        if(!value){
          return 'You need to give the Password'
        }
      }
    }).then((result) =>{
      if(result.value){
        Swal.fire({
          title: 'Enter your password',
          input: 'text',
          showDenyButton : true , 
          denyButtonText: 'back' ,
          inputValue : result.value,
        })
      }
      if(result.isCanceled){
        Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputLabel: 'Password',
          inputPlaceholder: 'Enter your password',
          confirmButtonText : 'view password',
          showDenyButton: true ,
          denyButtonText: 'ok',
          inputAttributes: {
            maxlength: 50,
            autocapitalize: 'off',
            autocorrect: 'off'
          },
          inputValidator: (value) => {
            if(!value){
              return 'You need to give the Password'
            }
          }
        })
      }
    })
    
    //if (password) {
     // Swal.fire(`Entered password: ${password}`).then((result) => {
        //  if(result.is){
           // Swal.fire({
             // title: 'Tips',
             // icon:'info' ,
             // text: 'copy the text what you can in the next screen see if it is correct copy or else change it and do it again'
           // })
         // }
     // })
    //}
  }

  username(){
    Swal.fire({      
      title: 'Username',
      confirmButtonText : 'Next' ,
  input:'text',
  inputLabel: 'Username',
  inputAttributes:{
    width: 30 ,
    length: 50 ,
    maxLength: 1000,
  
  },
inputPlaceholder: 'Enter your Username',
inputValidator: (value) => {
  if(!value){
    return 'You need to give the Username'
 }
}
}).then((result) => {
  if (result.isConfirmed) {
    this.password();
  }
})
}



stepsToLogin(){
  Swal.fire({
    title : 'Steps to login' ,
    icon: 'info' , 
    timer: 1000000 ,
    input: 'checkbox',
    inputValue: 0,
    text: 'Step 1 : Give username and click next If it is invalid it shows it is invalid username so give the username that we gave and next  give your password correctly and to see the password you have given is to click in view password... ' , 
    timerProgressBar : true ,
    inputPlaceholder:
    'I have read the Steps to Login',
  confirmButtonText:
    'Continue <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'if you already read click the checkbox and click continue' 
  },
  }).then((result) => {
    if (result.isConfirmed) {
      this.username();
    }
})
}

  display() {
    var titleText = `School vaccination information center`
    this.title.html(titleText);

    var welcomePart = ` WELCOME! <br>
      Everyone   to   the   school   vaccination   information   center  `
    this.welcomeText.html(welcomePart)

    var loginPart = `if you already registered ,<br>
    click here`
    this.loginText.html(loginPart)

    var signUpPart = `if you did not registered ,<br>
     click here`
    this.signUpText.html(signUpPart)

    
    this.signUpButton.mousePressed(() => {
      Swal.fire({
        title : 'Steps to get the vaccine' ,
        icon : 'info' ,
        timer : 10000 , 
        showConfirmButton : false ,
        text : 'So , First you should give the details clearly or else you wont get vaccine ' ,
        timerProgressBar : true ,
        didOpen: () => {
        Swal.showLoading()
        }
        });
      gameState = 2;
      this.title.hide();
      this.welcomeText.hide();
      this.loginText.hide();
      this.signUpText.hide();
      this.loginButton.hide();
      this.signUpButton.hide();
      form = new Form();
      form.display();
      school = new School();
      schoolCount = school.getCount();
    })

    this.loginButton.mousePressed(() =>{
      this.title.hide();
      this.welcomeText.hide();
      this.loginText.hide();
      this.signUpText.hide();
      this.loginButton.hide();
      this.signUpButton.hide();
      this.stepsToLogin();
    })

    this.setPosition();
    this.setElementsStyle();
  }
}