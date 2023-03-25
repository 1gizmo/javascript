// <div id='box>
// <input id='abc' class='zzz','xxx','vvv' type='text'> </input>

let box, input;

box = {
    tagName: 'div',
    attribuyes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
}

input = {
    tagName: 'input',
    attribuyes: {
        id: 'abc',
        classList: ['zzz','xxx','vvv'],
        type: 'text'
    },
    parentNode: box
}


console.log(input)