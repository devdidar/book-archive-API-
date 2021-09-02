// load books 
const loadBooks = () => {
        const searchInput = document.getElementById('search-input');
        const inputText = searchInput.value;
        fetch(`https://openlibrary.org/search.json?q=${inputText}`)
            .then(res => res.json())
            .then(data => displayBooks(data.docs))
        console.log(inputText);
        searchInput.value = '';
    }
    // display books
const displayBooks = books => {
    console.log(books.length);
    const booksContainer = document.getElementById('books-list');
    const countResult = document.getElementById('count-result');
    countResult.innerText = books.length
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
        console.log(book);
        const { title, cover_i, first_publish_year, author_name, publisher } = book;
        const imgUrl = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="image">
        <img src=${imgUrl} />
        </div>
        <div>
           <h3>Book Title: ${title}</h3
           <p>Author Name: ${author_name?.[0]}</p>
           <p>Publisher Name: ${publisher?.[0]}</p>
           <p>First Publish Year: ${first_publish_year}</p>  
        </div> `

        if (index < 20) {
            booksContainer.appendChild(div)
        }

    })
    if (books.length === 0) {
        booksContainer.innerHTML = `
        <h1>No Result Found</h1>`
    }
}