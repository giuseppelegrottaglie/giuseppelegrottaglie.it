const slug = [
    "articolo-pro-per-lettori-pro",
    "avengers-assem-presentiamoci",
    "il-contrappasso-dei-nuovi-macbook-pro",
    "iphone-13-poche-novita-ma-tanto-potenziale",
    "social-dilemma",
    "storia-di-un-iphone-qualunque",
    "la-sfida-del-2022-nvidia-rtx-vs-apple-m1-max"
]

for (let i = 0; i <= slug.length; i++) {
    x = i + 1
    window["shareButton" + x]= function () {
        if (navigator.share) {
          let url = ["https://madmantech.it/articoli/" + slug[i]];
          navigator.share({url})
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        } else {
          console.log('Share not supported on this browser, do it the old way.');
        }
    }
}