var counter = 0;

fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            counter++;
            const markup = `<li class = "${counter}">${user.title}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => {
        console.log(error);
    })

function owlCarousel() {
    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'> </i>", "<i class='fa fa-chevron-right'> </i>"],
        slideBy: 2,
        margin: 10,
        autoplay: 2000,
        animateOut: 'fadeOut',
        loop: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            425: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });
};

var ul = document.querySelector('ul');

ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        document.querySelector('.container').innerHTML = ""
        var urlStart = 'https://jsonplaceholder.typicode.com/albums/';
        var urlEnd = '/photos'
        fetch(urlStart + e.target.classList + urlEnd)
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.map(value => {
                    var imge = document.createElement('img');
                    imge.src = value.thumbnailUrl;
                    imge.alt = "dfs";
                    imge.classList = value.url;
                    var owl = document.createElement('div');
                    owl.classList.add('owl-carousel');
                    owl.classList.add('owl-theme');
                    document.querySelector('.container').appendChild(owl);
                    document.querySelector('.owl-carousel').appendChild(imge);
                });
                owlCarousel();
            })
            .catch(error => {
                console.log(error);
            })
    }
});

var container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {

        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    var target = e.target;
    var img = document.querySelector('#img');
    img.src = target.classList;
})