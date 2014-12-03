var application = application || {};

application.controller = (function () {
  function Main(dataPersister) {
    this.persister = dataPersister;
  }

  Main.prototype.load = function (selector) {
    this.attachEventHandlers();
    this.loadBooks(selector);
  }

  Main.prototype.loadBooks = function (selector) {
    this.persister.books.getAll(
        function(data) {
            var book, 
            books,
            editButton = '<button class="book-edit-btn">Edit</button>'
            deleteButton = '<button class="book-delete-btn">Delete</button>';
            for (var i = 0; i < data.results.length; i++) {
                books = data.results[i];
                book = '<li data-id="'+ books.objectId +'"><div>' + books.author +': ' + books.title + '</div>' + editButton + '   ' + deleteButton + '</li>';
                $(selector).append(book);
                };    
        },
        function(error) {
            console.log(error);
            $(selector).html(error)
        });
  }

  Main.prototype.attachEventHandlers = function() {
    var _this = this;

    $('#add-book-btn').on('click', function (ev) {
        var book = {
            author: $('#add-book-author').val(),
            title: $('#add-book-title').val(),
            isbn: $('#add-book-isbn').val()
        }
        _this.persister.books.add(book, 
            function (data) {
                location.reload();
            },
            function (error) {
                console.log(error);
            }
        );

        ev.preventDefault();
        return false;
    });

    $('#books').on('click', '.book-delete-btn', function (ev) {
        var id = $(this).parent().attr('data-id');

        _this.persister.books.remove(
            id, 
            function (data) {
                $(ev.target).parent().delete();
                location.reload();
            },
            function (error) {
                console.log(error);
                location.reload();
            }   
        )
    })

    $('#books').on('click', '.book-edit-btn', function (ev) {
        var id = $(this).parent().attr('data-id');
        $('#editBook').css('display', 'block');
        $('#addBook').css('display', 'none');
        $('#books').css('display', 'none');
        $('#book-id').text(id);

        _this.persister.books.getBook(
            id,
            function(data) {
              var currentBook = data;
              $('#edit-book-author').val(currentBook.author);
              $('#edit-book-title').val(currentBook.title);
              $('#edit-book-isbn').val(currentBook.isbn);
            },
            function(error) {
              console.log(error);
              $(selector).html(error)
            }
        );

    })

    $('#change-book-btn').on('click', function (ev) {
        var id = $('#book-id').text(),
        book = {
            author: $('#edit-book-author').val(),
            title: $('#edit-book-title').val(),
            isbn: $('#edit-book-isbn').val()
        };

        _this.persister.books.update(
            id,
            book,
            function (data) {
              $('#book-id').text('');
              location.reload();
            },
            function (error) {
                console.log(error);
            }
        )

        ev.preventDefault();
        return false;
    });
    }

    return {
        get: function(dataPersister) {
            return new Main(dataPersister);
        }
    }
}());
