let myLibrary = [];

function Book(title, author, pages, read) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
		this.info = function(){
			return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
		}
	}
const thehobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");

// list div where the books added
const list = document.querySelector("#bookList");
/*const thead = document.createElement("thead");
thead.innerHTML = "List of Books:";
list.appendChild(thead);
*/
function addBookToLibrary(book) {
	let tr = document.createElement("tr");
  	let th = document.createElement("th");

	th.classList.add("row");

  	list.appendChild(tr);
  	tr.appendChild(th);

	th.textContent = `- ${book.info()}`;
}

addBookToLibrary(thehobbit);
myLibrary.push(thehobbit);

// selecting the form and add an event to submit data from the form
const addForm = document.forms["addBook"];
addForm.addEventListener("submit", function(e) {
  	e.preventDefault();

  	let bookName = addForm.querySelector("#bookName").value;
  	let bookAuthor = addForm.querySelector("#bookAuthor").value;
  	let bookPages = addForm.querySelector("#bookPages").value;
  	let readOrNot = addForm.querySelector("#readOrNot").value;

  	let newBook = new Book(`${bookName}`,`${bookAuthor}`,`${bookPages}`,`${readOrNot}`);
	addBookToLibrary(newBook);
	// pushing the new book to the array myLibrary
	myLibrary.push(newBook)
	// reset method clear all form inputs after submit the data
	addForm.reset();
	addForm.style.display = "none";
})

// until I'll find a way for the checkbox later
	/*const checkBox = document.querySelector("#checkBox");
	checkBox.addEventListener("change",function() {
		if (checkBox.checked) {
			readOrNot.textContent = "Read";
		}else {
			readOrNot.textContent = "Not Read yet";
		}
	})*/


// Toggle the form
const add = document.querySelector("#add");
add.addEventListener("click", function toggleForm() {
	if (addForm.style.display === "none") {
		addForm.style.display = "inline-grid";
	}else{
		addForm.style.display = "none";
	}
})