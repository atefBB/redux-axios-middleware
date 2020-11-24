export function testRequest(){

  return {

    type:'TEST_REQUEST',
    payload:{

      request:{

        url:'https://jsonplaceholder.typicode.com/asdasd',
        onComplete: () => { console.log('complete') },
        onSuccess: () => { console.log('success') },
        onError: () => {console.log('error')},
      }

    }
    
  }

}