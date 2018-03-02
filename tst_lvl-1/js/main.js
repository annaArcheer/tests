var bool = true;
var txtSizes = document.querySelectorAll(".txtSize");
var typeTxts = document.querySelectorAll(".typeTxts");
var Tds = document.getElementsByTagName('td');
var body = document.body;

function qSel(a){
    return document.querySelector(a);
}

function iD(a){
    return document.getElementById(a);
}

//Buttons

iD('Edit').addEventListener('click', function(){
    qSel('.textareaDiv').style.display = 'block';
    qSel('.textStyle').style.display = 'none';
    qSel('.textarea').value = qSel('.span').innerHTML;
})

iD('Save').addEventListener('click', function(){
    qSel('.span').innerHTML = qSel('.textarea').value;
})

iD('Style').addEventListener('click', function(){
    qSel('.textStyle').style.display = 'block';
    qSel('.textareaDiv').style.display = 'none';
})

iD('Color').addEventListener('click', function(){
    iD('colorTb').style.display = 'table';
    b = true;
})

iD('BgColor').addEventListener('click', function(){
    iD('colorTb').style.display = 'table';
    b = false;
})

iD('Add').addEventListener('click',function(){
    qSel('.addCreate').style.display = 'block';
    qSel('.main').style.display = 'none';
})

iD("CreateTb").onclick = function () {
		createTabl();
	}
iD("CreateList").onclick = function () {
	createList();
}
//table/list check
iD('typeTable').onclick = function(){
    if (this.checked){
        qSel('.tableCheck').style.display = 'block';
        qSel('.listCheck').style.display = 'none';
        qSel('.listCheck').checked = false;
    }
}

iD('typeList').onclick = function(){
    if (this.checked){
        qSel('.listCheck').style.display = 'block';
        qSel('.tableCheck').style.display = 'none';
        qSel('.tableCheck').checked = false;
    }
}

//fontSize

for (i=0; i< txtSizes.length; i++){
    txtSizes[i].onclick = function(){
       if (this.checked){
           qSel('.span').style.fontSize = this.value;
       }
    }
    txtSizes.checked = false;
}

//fontFamily

iD('fontFamily').onchange = function(){
    for (i=0; i< typeTxts.length; i++){
        if (typeTxts[i].selected){
            qSel('.span').style.fontFamily = this.value;
        }
    }
}

//fontStyle, fontWeight

iD('boldTxt').onclick = function(){
    this.checked ? qSel('.span').style.fontWeight = 'bold' : qSel('.span').style.fontWeight = 'normal';
}

iD('italicTxt').onclick = function(){
    this.checked ? qSel('.span').style.fontStyle = 'italic' : qSel('.span').style.fontStyle = 'normal';
}

//color

for (i = 0; i < Tds.length; i++) {
	Tds[i].addEventListener('click', function () {
		b ? qSel('.span').style.color = this.style.background : qSel('.span').style.background = this.style.background;
		iD('colorTb').style.display = 'none';
	})
}
//target
body.addEventListener('click', function (event) {
		event.target.className != 'btnColor' ? iD('colorTb').style.display = 'none' : iD('colorTb').style.display = 'table';
	})

//table

function createTabl() {
	var countTr = document.getElementById('cOfRow').value;
	var countTd = document.getElementById('cOfCell').value;
	var widthTd = document.getElementById('wOfCell').value;
	var heightTd = document.getElementById('hOfCell').value;
	var brdWidth = document.getElementById('BrdWidth').value;
	var brdType = document.getElementById('brdType').value;
	var brdColor = document.getElementById('brdColor').value;
	//create table
	var table = document.createElement("table");
	table.id = "tabl";
	//Borders
	table.style.borderWidth = brdWidth + "px";
	table.style.borderStyle = brdType;
	table.style.borderColor = brdColor;
	//create div, put in body
	var div = document.createElement("div");
	body.appendChild(div);
	div.style.display = "none";
	//put table in div
	div.appendChild(table);
	//tr
	for (var i = 0; i < countTr; i++) {
		//create td, put in table
		var tr = document.createElement("tr");
		table.appendChild(tr);
		//td
		for (var j = 0; j < countTd; j++) {
			var td = document.createElement("td");
			//user
			td.style.width = widthTd + "px";
			td.style.height = heightTd + "px";
			td.innerHTML = " ";
			tr.appendChild(td);
		}
	}
	qSel(".textarea").value = qSel(".span").innerHTML + div.innerHTML;
	qSel(".addCreate").style.display = "none";
	qSel(".main").style.display = "block";
}

	//list

function createList() {
	var countList = document.getElementById('cOfItem').value;
	var mark = document.getElementById('typeOfM').value;
	var ul = document.createElement("ul");
	ul.type = mark;
	ul.id = "ulList";
	var div = document.createElement("div");
	body.appendChild(div);
	div.style.display = "none";
	div.appendChild(ul);
	for (var i = 0; i < countList; i++) {
		var li = document.createElement("li");
		li.innerHTML = "Текст";
		ul.appendChild(li);
	}
	qSel(".textarea").value = qSel(".span").innerHTML + div.innerHTML;
	qSel(".addCreate").style.display = "none";
	qSel(".main").style.display = "block";
}