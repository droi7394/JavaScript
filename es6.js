/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

 {
    const ellie1 = {
      name: 'Ellie',
      age: '18',
    };
  
    const name = 'Ellie';
    const age = '18';
  
    // 💩  key : value 에서 value를 변수로 대체할 수 있다.
    const ellie2 = {   
      name: name,
      age: age,
    };
  
    // ✨  key : value 형식이지만 key 와 value가 같다면 key한개만 써도 된다.
    const ellie3 = {
      name,
      age,
    };
  
    console.log("1." + ellie1, ellie2, ellie3);
   // console.clear();
  }
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'Anna',
      level: 1,
    };
  
    // 💩  object 에 있는 값을 가져오기 위해서는 한줄씩 썻어야 했는데
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨  object destructuring을 이용하면 해당 object 의 element 순서대로 나열하면 자동 할당되어진다.
    {
      const { name, level } = student;
      console.log(name, level);
    // element 의 이름을 바꾸고자 한다면  org : new 와 같이 나열하면 자동 매핑된다.
      const { name: studentName, level: studentLevel } = student;  
      console.log(studentName, studentLevel);
    }
  
    // array 
    const animals = ['🐶', '😽'];
  
    // 💩  배열의 경우도 인덱스를 이용하여 변수에 할당 해야 했지만 
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨  object destructuring을 이용하면 index의 순서대로 해당 배열에 자동할당된다.
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    //console.clear();
  }
  
  /**
   * Spread Syntax  복사할 때 해당 객체의 value가 아닌 주소를 복사하기 때문에 원본이 변하면 복사된것들도 같이 변한다. 
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy  ... 의 의미는 해당 item 하나하나 모두를 복사한다는 의미로 해석한다.
    const arrayCopy = [...array];   // 배열은 배열의 괄호를 이용해야하고
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }]; // 기존것을 하나하나 모두 복사한뒤 마지막 객체를 더 추가한다.
    obj1.key = 'newKey';   // 원본의 값이 변하면 복사했던 모든 객체에서도 값이 변하게된다.
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };      // Object는 Object의 괄호를 이용해야 한다.
    console.log("obj3:"+obj3.key);

    const obj4 = obj3;
    console.log("obj4 :" + obj4.key);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];  // 배열의 병합이 가능하다.
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 };    // Object의 병합도 가능하다. key가 중복된다면 마지막의 값으로 덮어쓰게된다. 왜냐하면 key는 중복될 수 없기 때문.
    console.log(dog);
    //console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨  함수에 인자가 전달되지 않을 경우를 대비해서 default 파라미터를 설정할 수 있다. 
    {
      function printMessage(message = 'default message') {
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
    //console.clear();
  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    //console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }