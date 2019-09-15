var notify = document.querySelector('.notification')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.total')
var saveBtn = document.querySelector('#saveB')

var albumsSelected = []
var i = 0

while(i < albums.length) { //uradi kod za svaki album element
  albums[i].onclick = function(e) {
    var albumTitle = this.querySelector('.title').textContent; //uzima naslov albuma od selektovanog, kliknutog albuma

     if(this.classList.contains('selected') !== true) { //ako ovaj element ne sadrzi klasu selected
       this.classList.add('selected')                   //onda mu daj tu klasu i gurni ga u array
       albumsSelected.push(albumTitle)
     } else {
       this.classList.remove('selected')                        //e sad ovo je za kad se klikne drugi put na isti taj element (za prvi klik nema efekta)
       albumsSelected = albumsSelected.filter(function(item) {    //kaze da obrise klasu selected
         return  item !== albumTitle                                //i posto kad pozovem ponovo f-ju na taj drugi klik, on ce da zove tu istu funkciju i opet
                                                                    //ce da gurne taj album title u niz ali sad filter kaze
                                                                    //!!!!!!!! FILTER METODA UKOLIKO ELEMENENT NE PRODJE USLOV, FILTER METODA VRACA PRAZAN ELEMENT - ARRAY
                                                                    //!!!!!! item je vrednost tog elementa niza
                                                                    //znaci vrati Maju  koja se razlikuje od naziva tog albuma, a posto su isti, filter vraca prazana niz kraj
       })
     }
     console.log(albumsSelected)
  }
  i++
}


saveBtn.onclick = function() {                          //prikazi obavestenje i prikazi broj selektovanih albuma u obavestenju
  if(albumsSelected.length <= 1) {
    itemsTotal.textContent = albumsSelected.length + ' item saved'
    notify.style.display = 'block'
  } else {
  itemsTotal.textContent = albumsSelected.length + ' items saved'
  notify.style.display = 'block'
}
  setTimeout(
    function(){
      notify.style.display = 'none'
    }, 2000  )
}
