it('sign up', () => {
    cy.visit('https://www.noon.com/egypt-ar/') //visit the website
    cy.wait(20) //wait until the website loads
    cy.get('#dd_header_signInOrUp').click() //click on sign in button
    cy.get('.sc-1v3qw6e-7').click() //click on sign up button
    const randomNumber = `${Math.floor(Math.random() * 10000000000000)}` //create random nnumber of 13 digits to generate new mail and password
    cy.get('#emailInput').type('xyz'+randomNumber+'@gmail.com') //concatenate string with random number to generate new mail not in their database
    cy.get('#passwordInput').type(randomNumber) //enter rnadom number in password
    cy.get('#firstNameInput').type('userFirstName') //enter first name
    cy.get('#lastNameInput').type('userLastName') //enter last name
    cy.get('#login-submit').click() //submit sign up form
    cy.wait(60) //wait till page loads
    cy.get('[data-qa="dd_user_menu"]').click() //select my account
    cy.get('.userText').trigger('mousemove').get('.userLinksCtr > :nth-child(2)').click() //select from dropdown addresses
    cy.wait(2000) //wait until page loads
    cy.get('.dyoqji-1').click() //select search bar
    cy.get('.cq3jyf-1').type('nasr city') //enter nasr city in search bar
    cy.get(':nth-child(1) > .cq3jyf-4').click() //choose first option appears
    cy.wait(1000) //wait till it loads
    cy.get('.jZrcWR > .dyoqji-1').click() //click submit address
    // cy.get('.jZrcWR > .dyoqji-1').click()
    cy.get('.MuiSelect-root').click() //click on phone id button
    cy.get('#dd_areaCode10').click() //choose phone id as 012,010,011
    const randomPhoneNumber = `${Math.floor(Math.random() * 100000000)}` //generate random phone number of 8 digits
    cy.get('.sc-1xu65d2-21 > .ifyfcf-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(randomPhoneNumber) //enter the random phone number
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .ifyfcf-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('userFirstName') //enter first name
    cy.get(':nth-child(4) > :nth-child(1) > .ifyfcf-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('userLastName') //enter last name
    cy.get(':nth-child(1) > .sc-1xu65d2-16 > :nth-child(1) > .ifyfcf-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('ssss') //enter extra info for address
    cy.get('.sc-1xu65d2-30 > .dyoqji-0 > .dyoqji-1').click() //click submit
    cy.get('.sc-1qctye8-9 > img').click() 
    cy.get('[data-qa="dd_user_menu"]').click() //click my account
    cy.get('.userText').trigger('mousemove').get('.logOut').click() //choose logout button
    cy.wait(1000) //wait till page loads
    cy.get('#dd_header_signInOrUp').click() //click sign in button
    cy.get('#emailInput').type('xyz'+randomNumber+'@gmail.com') //enter same email used in sign up
    cy.get('#passwordInput').type(randomNumber) //enter password used in sign up
    cy.get('#login-submit').click() //click submit to sign in
    cy.wait(1000) //wait until page loads
    cy.get('[data-qa="dd_user_menu"]').click() //click my account
    cy.get('.userText').trigger('mousemove').get('.logOut').click() //click logout from dropdown
    cy.get('#dd_header_signInOrUp').click() //click sign in button
    cy.get('#emailInput').type('xyzm'+randomNumber+'@gmail.com') //enter invalid mail
    cy.get('#passwordInput').type(randomNumber+'12') //enter invalid password
    cy.get('#login-submit').click() //submit
})