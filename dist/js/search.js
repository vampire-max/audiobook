
    function loadBook() {
      return {
        search: "",
        pageNumber: 0,
        size: 8,
        total:"",
        isOpen: false,
        myForData: sourceData,

        get filterBook() {
          const start = this.pageNumber * this.size,
          end = start + this.size;

          if (this.search === "") {
            this.total = this.myForData.length;
            return this.myForData.slice(start, end);
          }

          this.total = this.myForData.filter((book) => {
            return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.author.toLowerCase().includes(this.search.toLowerCase());
          }).length;
          
          return this.myForData.filter((book) => {
            return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.author.toLowerCase().includes(this.search.toLowerCase());
          })
          .slice(start, end);
        },

        pages() {
          return Array.from({
            length:Math.ceil(this.total /this.size),
          });
        },

        nextPage() {
          this.pageNumber++;
        },

        prevPage() {
          this.pageNumber--;
        },

        pageCount() {
          return Math.ceil(this.total / this.size);
        },

        startResults() {
          return this.pageNumber + this.size + 1;
        },

        endResults() {
          let resultOnPage = (this.pageNumber + 1) * this.size;

          if (resultsOnPage <= this.total) {
            return resultOnPage;
          }

          return this.total;
        },  

        viewPage(index) {
          this.pageNumber = index;
        }
      }
    }

    var sourceData = [
      {
        id: "1",
        title: "Welcome to the 8pt Grid Guide",
        author: "MARC ANDREW",
        cover_image: "./img/book1.png"
      },
      {
        id: "2",
        title: "Web Typography 101 Guide",
        author: "MARC ANDREW",
        cover_image: "./img/book2.png"
      },
      {
        id: "3",
        title: "Business Thinking for Designers",
        author: "RYAN RUMSEY",
        cover_image: "./img/book3.png"
      },
      {
        id: "4",
        title: "Remote Work for Design Teams",
        author: "BEN GOLDMAN, ABBY SINNOTT",
        cover_image: "./img/book4.png"
      },
      {
        id: "5",
        title: "Getting Started with Design Systems",
        author: "MARVEL",
        cover_image: "./img/book5.png"
      },
      {
        id: "6",
        title: "1 Hour to a Better Landing Page",
        author: "JAMIE SYKE",
        cover_image: "./img/book6.png"
      },
      {
        id: "7",
        title: "The Grit Season 2",
        author: "AVOCODE",
        cover_image: "./img/book7.png"
      },
      {
        id: "8",
        title: "The Grit Season 2",
        author: "AVOCODE",
        cover_image: "./img/book8.png"
      },
      {
        id: "9",
        title: "Animation in Design System",
        author: "VAL HEAD",
        cover_image: "./img/book9.png"
      },
      {
        id: "10",
        title: "The Manager's Handbook",
        author: "CLEARBIT",
        cover_image: "./img/book10.png"
      },
      {
        id: "11",
        title: "Startup Handbook",
        author: "ANGELA TRAN",
        cover_image: "./img/book11.png"
      },
      {
        id: "12",
        title: "The Shape of Design",
        author: "FRANK CHIMERO",
        cover_image: "./img/book12.png"
      },
    ]

