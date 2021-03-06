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
  
    // ๐ฉ  key : value ์์ value๋ฅผ ๋ณ์๋ก ๋์ฒดํ  ์ ์๋ค.
    const ellie2 = {   
      name: name,
      age: age,
    };
  
    // โจ  key : value ํ์์ด์ง๋ง key ์ value๊ฐ ๊ฐ๋ค๋ฉด keyํ๊ฐ๋ง ์จ๋ ๋๋ค.
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
  
    // ๐ฉ  object ์ ์๋ ๊ฐ์ ๊ฐ์ ธ์ค๊ธฐ ์ํด์๋ ํ์ค์ฉ ์ป์ด์ผ ํ๋๋ฐ
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // โจ  object destructuring์ ์ด์ฉํ๋ฉด ํด๋น object ์ element ์์๋๋ก ๋์ดํ๋ฉด ์๋ ํ ๋น๋์ด์ง๋ค.
    {
      const { name, level } = student;
      console.log(name, level);
    // element ์ ์ด๋ฆ์ ๋ฐ๊พธ๊ณ ์ ํ๋ค๋ฉด  org : new ์ ๊ฐ์ด ๋์ดํ๋ฉด ์๋ ๋งคํ๋๋ค.
      const { name: studentName, level: studentLevel } = student;  
      console.log(studentName, studentLevel);
    }
  
    // array 
    const animals = ['๐ถ', '๐ฝ'];
  
    // ๐ฉ  ๋ฐฐ์ด์ ๊ฒฝ์ฐ๋ ์ธ๋ฑ์ค๋ฅผ ์ด์ฉํ์ฌ ๋ณ์์ ํ ๋น ํด์ผ ํ์ง๋ง 
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // โจ  object destructuring์ ์ด์ฉํ๋ฉด index์ ์์๋๋ก ํด๋น ๋ฐฐ์ด์ ์๋ํ ๋น๋๋ค.
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    //console.clear();
  }
  
  /**
   * Spread Syntax  ๋ณต์ฌํ  ๋ ํด๋น ๊ฐ์ฒด์ value๊ฐ ์๋ ์ฃผ์๋ฅผ ๋ณต์ฌํ๊ธฐ ๋๋ฌธ์ ์๋ณธ์ด ๋ณํ๋ฉด ๋ณต์ฌ๋๊ฒ๋ค๋ ๊ฐ์ด ๋ณํ๋ค. 
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy  ... ์ ์๋ฏธ๋ ํด๋น item ํ๋ํ๋ ๋ชจ๋๋ฅผ ๋ณต์ฌํ๋ค๋ ์๋ฏธ๋ก ํด์ํ๋ค.
    const arrayCopy = [...array];   // ๋ฐฐ์ด์ ๋ฐฐ์ด์ ๊ดํธ๋ฅผ ์ด์ฉํด์ผํ๊ณ 
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }]; // ๊ธฐ์กด๊ฒ์ ํ๋ํ๋ ๋ชจ๋ ๋ณต์ฌํ๋ค ๋ง์ง๋ง ๊ฐ์ฒด๋ฅผ ๋ ์ถ๊ฐํ๋ค.
    obj1.key = 'newKey';   // ์๋ณธ์ ๊ฐ์ด ๋ณํ๋ฉด ๋ณต์ฌํ๋ ๋ชจ๋  ๊ฐ์ฒด์์๋ ๊ฐ์ด ๋ณํ๊ฒ๋๋ค.
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };      // Object๋ Object์ ๊ดํธ๋ฅผ ์ด์ฉํด์ผ ํ๋ค.
    console.log("obj3:"+obj3.key);

    const obj4 = obj3;
    console.log("obj4 :" + obj4.key);
  
    // array concatenation
    const fruits1 = ['๐', '๐'];
    const fruits2 = ['๐', '๐ฅ'];
    const fruits = [...fruits1, ...fruits2];  // ๋ฐฐ์ด์ ๋ณํฉ์ด ๊ฐ๋ฅํ๋ค.
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '๐' };
    const dog2 = { dog: '๐ถ' };
    const dog = { ...dog1, ...dog2 };    // Object์ ๋ณํฉ๋ ๊ฐ๋ฅํ๋ค. key๊ฐ ์ค๋ณต๋๋ค๋ฉด ๋ง์ง๋ง์ ๊ฐ์ผ๋ก ๋ฎ์ด์ฐ๊ฒ๋๋ค. ์๋ํ๋ฉด key๋ ์ค๋ณต๋  ์ ์๊ธฐ ๋๋ฌธ.
    console.log(dog);
    //console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // ๐ฉ
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
  
    // โจ  ํจ์์ ์ธ์๊ฐ ์ ๋ฌ๋์ง ์์ ๊ฒฝ์ฐ๋ฅผ ๋๋นํด์ default ํ๋ผ๋ฏธํฐ๋ฅผ ์ค์ ํ  ์ ์๋ค. 
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
    // ๐ฉ
    {
      let component;
      if (isCat) {
        component = '๐ธ';
      } else {
        component = '๐ถ';
      }
      console.log(component);
    }
  
    // โจ
    {
      const component = isCat ? '๐ธ' : '๐ถ';
      console.log(component);
      console.log(isCat ? '๐ธ' : '๐ถ');
    }
    //console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '๐ค';
    const temparature = '16ยฐC';
  
    // ๐ฉ
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // โจ
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }