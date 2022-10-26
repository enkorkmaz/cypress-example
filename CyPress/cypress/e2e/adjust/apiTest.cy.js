
context('XMLHttpRequest - XHR',()=>{

  const requestUrlPet  ='https://petstore.swagger.io/#/pet/addPet'
  const requestUrlUser ='https://petstore.swagger.io/#/user/createUser'
  const requestUrlUserPut = 'https://petstore.swagger.io/#/user/updateUser'
    it('XHR-Post Example Add Pet',()=>{

        cy.request(requestUrlPet,{
            
                "id": 77,
                "category": {
                  "id": 0,
                  "name": "van cat"
                },
                "name": "van kitty",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "cat"
                  }
                ],
                "status": "available"
              
    }).then((response)=>{
        console.log(response)
        assert.equal(response.status,200)
        expect(response.statusText).to.eq('OK')
    })

    })

    it('XHR-Post Example Add User',()=>{

        cy.request(requestUrlUser,{
                "id": "77",
                "username": "elif",
                "firstName": "elifnur",
                "lastName": "korkmaz",
                "email": "blabla@gmail.com",
                "password": "1234",
                "phone": "12",
                "userStatus": 0
        }).then((response)=>{
            console.log(response)
            assert.equal(response.status,200)
            expect(response.statusText).to.eq('OK')
        })
    })



    it('XHR-Put Example Update User',()=>{
      cy.request(requestUrlUserPut, 
      { userName: "elif",
      userName: "abc",
  }
  ).then((response) => {
      expect(response.status).to.eq(200)
     
  })
  })
    })
