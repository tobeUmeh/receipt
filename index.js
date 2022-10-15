const img = document.getElementsByClassName('logo');
const detailsLists = document.querySelector('.details__lists');


///////////// transfer details data 
const details = [
	{ col1: 'Amount', col2: 'N200,000' },
  { col1: 'Destination', col2: 'Access Bank' },
  { col1: 'Receivers account', col2: '12345678'},
  { col1: 'Reciever', col2: 'Tobenna'},
  { col1: 'Sender', col2: 'Afeez'},
  { col1: 'Ref no', col2: '0312345678910111223456789456'},
];


/////////  code
const text = details.map((row) => {
	return `<div class='details__row'><div class='details__list'><div class='details__list__col1'>${row.col1}</div><div class='details__list__col2'>${row.col2}</div></div>`;
});

/////// DOM insertion
text.forEach((el) => {
  return detailsLists.insertAdjacentHTML('beforeend', el)
});

