/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * 

00:53 Shorthand property names  : 객체에서 key : value 에서 value값을 변수로 이용하자, key = value 일경우 key 만 나열한다. 
01:53 Destructuring assignment  : 객체를 { , , ,} [ , , ,] = object 형태로 Destructuring 할 수 있다.  객체는 {} 배열은 [] 를 쓴다.
03:58 Spread syntax             : [...arr1] arr1의 모든 element를 나타낸다. {...obj1} obj1의 모든 element를 나타낸다. object들을 병합 및 추가할 수 있다.
08:06 Default parameters        : 함수에 파라미터를 전달할 때 파라미터가 없는 경우를 대비해서 default 파라미터를 지정해 놓을 수 었다. 
08:55 Ternary Operator          : const comp1 = iscat ? '1','2'
09:44 Template Literals         : 'aaa' + bbb + 'ccc' 대신  'aaa ${bbb} ccc'  이런식으로 쓰자 
10:22 Optional chaining (ES11)  : person.job?.manager?.name  person 객체에 job 있고 manager가 있으면 name을 출력한다.
12:18 Nullish Coalescing Operator (ES11) :  OR연산자를 쓸 때 버그가 발생하지 않도록 주의 해야 한다. 다르게 해석하는 식으로 처리한다.
 */
 {
    const person1 = {
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    // OR 연산자는 앞에것이 false 일때만 뒤에것이 할당되는데
    // false에는 '', 0 도 false로 간주되기 때문에 버그가 만들어진다.
    // 이를 방지하기 위해 ?? 를 쓴다. nullish coalescing 을 이용한다.

    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ✨ nullish collising
    // 해석을 잘해야 한다. name 이 있으면 이용하고 없으면 'Guest' 라하자
    {
      const name = '';
      const userName = name ?? 'Guest';
      console.log(userName);
    
      // num 이 있으면 이용하고 없으면 undefined 라 하자
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }
  }