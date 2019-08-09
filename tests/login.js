module.exports = {
    'Testcase 1:LoginPage_cursor is focused on “Username':''+function (client) {
      client
        .url('http://localhost:8888/login')
        .waitForElementVisible("input[name='user_name']")
        .click("input[name='user_name']")
        .assert.elementPresent("input[name='user_name']:focus")
        .end();
    },
    'Testcase 2:LoginPage_Validate all Elements':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
          .assert.elementPresent("input[name='user_name']")       
          .assert.elementPresent("input[name='password']")
          .assert.elementPresent("input[value='Login']")
          //.assert.elementPresent("a[href='mercuryregister.php']")
          //.assert.containsText("a[href='mercuryregister.php']",'REGISTER')
          .end();
      },
      'Testcase 3:LoginPage_TabFunctionality1':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
        .pause(5000)
        .click("input[name='user_name']")
        .assert.elementPresent("input[name='user_name']:focus")
        .keys(client.Keys.TAB)   
        .assert.elementPresent("input[name='password']:focus") 
        .keys(client.Keys.TAB)      
        .assert.elementPresent("input[value='Login']:focus")
        .keys(client.Keys.TAB)
        //.assert.containsText("a[href='mercuryunderconst.php']",'your destination')
        //.click("a[href='mercuryunderconst.php']")        
          
          .end();
      },
      'Testcase 4:Verify_SignIn Using Enter1':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
        .pause(5000)
        .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'aparnaM')
        .setValue("input[name='password']", 'aparnaM')
       
        
        .keys(client.Keys.TAB)      
        .assert.elementPresent("input[value='Login']:focus")
        .keys(client.Keys.ENTER)
        //.assert.containsText("a[href='mercuryunderconst.php']",'your destination')
        //.click("a[href='mercuryunderconst.php']")        
       // .pause(5000)
       // .assert.elementPresent("img[src='<img src='/images/masts/mast_signon.gif']")
          .end();
      },
      'Testcase 5:Verify_SignIn with blank Username and password':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
        .pause(5000)
        .click("input[value='Login']")     
      
    .assert.containsText('#errormessage','User name or password is not correct.')        
          .end();
      },
      'Testcase 6:Verify_SignIn with inavlid Username and password':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
                .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'Inavlid')
        .setValue("input[name='password']", 'Inavlid')       
        .pause(5000)
        .click("input[value='Login']")     
      
    .assert.containsText('#errormessage','User name or password is not correct.')        
          .end();
      },
      'Testcase 6:Verify_SignIn with inavlid Username and password':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
                .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'Inavlid')
        .setValue("input[name='password']", 'Inavlid')       
        .pause(5000)
        .click("input[value='Login']")     
      
    .assert.containsText('#errormessage','User name or password is not correct.')        
          .end();
      },
      'Testcase 7:Verify_Register functionality':''+function (client) {
        client
          .url('http://localhost:8888/register')
          .waitForElementVisible("input[name='user_name']")
                .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'abc')
        .setValue("input[name='password']", 'abc')  
        .setValue("input[name='email']", 'abc@gmail.com')   
        .pause(2000)
        .click("input[value='Register']")     
      
    .assert.containsText('td','User info registration success.')        
          .end();
      },
      'Testcase 8:Verify_Login successful functionality':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
                .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'jerry')
        .setValue("input[name='password']", 'dev2qa.com')  
      
        .pause(2000)
        .click("input[value='Login']")     
      
    .assert.containsText('font','User name and password is correct, login success.')        
          .end();
      },
      'Testcase 13_14:Verify_Login back functionality':''+function (client) {
        client
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']")
                .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'jerry')
        .setValue("input[name='password']", 'dev2qa.com')  
      
        .pause(2000)
        .click("input[value='Login']")     
      
    .assert.containsText('font','User name and password is correct, login success.') 
    .keys(client.back())
   
    .pause(5000)
    .assert.containsText(('h3','Input user name and password to login.') 
   
          .end();
      },
      'Testcase 10:Verify_Login back functionality':function (client) {
        client
          .url('http://localhost:8888/login')
  
    .assert.containsText('h3','Input user name and password to login.')    
   
          .end();
      },

      '---***********LoginPage_TabFunctionality':''+function (client) {
        client
          .url('http://newtours.demoaut.com/')
          .waitForElementVisible("input[name='userName']")
        .pause(5000)
        .click("input[name='userName']")
        .assert.elementPresent("input[name='userName']:focus")
        .keys(client.Keys.TAB)   
        .assert.elementPresent("input[name='password']:focus") 
        .keys(client.Keys.TAB)      
        .assert.elementPresent("input[name='login']:focus")
        .keys(client.Keys.TAB)
        //.assert.containsText("a[href='mercuryunderconst.php']",'your destination')
        //.click("a[href='mercuryunderconst.php']")        
          
          .end();
      },
      'Verify_SignIn Using Enter':''+function (client) {
        client
          .url('http://newtours.demoaut.com/')
          .waitForElementVisible("input[name='userName']")
        .pause(5000)
        .click("input[name='userName']")
        .setValue("input[name='userName']", 'aparnaM')
        .setValue("input[name='password']", 'aparnaM')
       
        
        .keys(client.Keys.TAB)      
        .assert.elementPresent("input[name='login']:focus")
        .keys(client.Keys.ENTER)
        //.assert.containsText("a[href='mercuryunderconst.php']",'your destination')
        //.click("a[href='mercuryunderconst.php']")        
        .pause(5000)
        .assert.elementPresent("img[src='<img src='/images/masts/mast_signon.gif']")
          .end();
      }


}