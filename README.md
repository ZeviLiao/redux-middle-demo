

ref:  
https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components

https://medium.com/itsoktomakemistakes/react-ref-api-%E6%80%8E%E9%BA%BC%E7%94%A8-ea1f31cd0a7a

https://medium.com/4cats-io/24hrs-react-101-b287ffad1070

ref 2 ways:

* 
```
React.createRef()  
ref={this.filebox}
```
* 
```
 <input
   type="text"
   ref={ input => this.textInput = input } />
```