const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)



const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];
  keys.forEach((item)=>{
    let attr = item;
    attrs.push(`${attr}="${obj[attr]}"`);
  });
  const string =  attrs.join('');
  return string;
}


const tagAttrs = obj => (content = "") => 
  `<${obj.tag}${obj.attrs? ' ' : '' } ${attrsToString(obj.attrs)}>${content}</${obj.tag}>`
  

const tag = t => {
  if(typeof t === 'string'){
    tagAttrs({tag: t});
  } else{
    tagAttrs(t)
  }
};


const tableCell = tag('tr');
const tableCells = items => items.map(tableCell).join('');



const description =  document.getElementById('$description');
const calories =  document.getElementById('$calories');
const carbs =  document.getElementById('$carbs');
const protein =  document.getElementById('$protein');


let list = [];



description.addEventListener('keypress', ()=>{
  description.classList.remove('is-invalid');
});
calories.addEventListener('keypress', ()=>{
  calories.classList.remove('is-invalid');
});
carbs.addEventListener('keypress', ()=>{
  carbs.classList.remove('is-invalid');
});
protein.addEventListener('keypress', ()=>{
  protein.classList.remove('is-invalid');
});

const validateInputs = ()=>{
    (description.value === '') && description.classList.add('is-invalid');
    (calories.value === '') && calories.classList.add('is-invalid');
    (carbs.value === '') && carbs.classList.add('is-invalid');
    (protein.value === '') && protein.classList.add('is-invalid');
    
    if(description.value && calories.value && carbs.value && protein.value){
      add();
    }
}


const add = ()=>{
  const newItem = {
    description: description.value,
    calories: parseInt(description.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  }
  cleanInputs();
}

const cleanInputs = ()=>{
  description.value = "";
  calories.value = "";
  carbs.value = "";
  protein.value = "";
}

