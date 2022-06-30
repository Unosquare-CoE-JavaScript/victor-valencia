// =====How we organize in JS =========================

// Modules

function PublicationModule(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`Title: ${ title } By: ${ author } ${ pubDate }`);
        }
    };
    return publicAPI;
}

function BookModule(bookDetails) {
    var pub = PublicationModu(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );
    var publicAPI = {
        print() {
            pub.print();
            console.log(`Publisher: ${ bookDetails.publisher } ISBN: ${ bookDetails.ISBN } `);
        }
    };
    return publicAPI;
}

function BlogPostModule(title, author, pubDate, URL) {
    var pub = PublicationModule(title, author, pubDate);
    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };
    return publicAPI;
}

var YDKJS = BookModule({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});
YDKJS.print();

var forAgainstLet = BlogPostModule(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();