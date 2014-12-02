# connection
# hostname: 127.0.0.1
# username: root
# password: mysql
# database: bookstore

# get categories
SELECT * FROM pcategories;

# get products
SELECT * FROM products 
WHERE catid = "{filterCat}" || "{filterCat}" = "all" 
ORDER BY {sortOrder};

# register user
INSERT INTO users (fname, lname, email) VALUES ({fname}, {lname}, {email});

# get user
SELECT * FROM users WHERE email={email};

# register password
INSERT INTO login (email, password) VALUES ({email}, {password});

# login user
SELECT users.uid, users.fname, users.lname, users.email FROM users, login WHERE login.email={email} AND login.password={password} AND users.email=login.email;

# book input
INSERT INTO booklist (isbn, title, author, fPrice, amount, shelf) VALUES ({isbn}, {title}, {author}, {fPrice}, {amount}, {shelf});

# get books by isbn
SELECT * FROM booklist WHERE isbn={isbn};

# get books by title
SELECT * FROM booklist WHERE title={title};

# get books by author
SELECT * FROM booklist WHERE author={author};

# update books
INSERT INTO booklog (isbnLog, amountLog) VALUES ({isbnLog}, {amountLog});

# update booklist
UPDATE booklist SET amount = amount - {amountLog} WHERE isbn = {isbnLog};

# modify price
UPDATE pricelist SET salesPrice = {salesPrice} WHERE isbn={isbn};

# modified price result
SELECT * FROM books_with_price WHERE isbn = {isbn};

# price input
INSERT INTO pricelist (isbn, salesPrice) VALUES ({isbn}, {salesPrice});

# get books by isbn II
SELECT * FROM books_with_price WHERE isbn={isbn};


# data for report
SELECT * FROM booklog WHERE dateLog LIKE "%{dateLog}%" && isbnLog = {isbnLog};

# earnings

# match isbn
SELECT * FROM booklist WHERE isbn LIKE "{isbn}%";


-- are we using this?? Yes we are, it will -"amount" from booklist and +"amount" to booklog  -> UPDATE booklist SET amount = amount - {amountLog} WHERE isbn = '{isbnLog}';
