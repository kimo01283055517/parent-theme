import $ from 'jquery'
class Search{
    constructor(){
       this.btn = $('.btn');
       this.div = $('.inner');
       this.overlay=$('.overlay');
       this.search_btn=$('.search');
       this.close_btn= $('.close')
       this.input = $('.input-container input')
       this.searchContent=$('.search_content')
       this.timeOut;
       this.event();
    };

     event() {
        this.btn.on('click',this.showOverlay.bind(this));
        this.close_btn.on('click',this.hideOverlay.bind(this));
        $(document).on('keyup',this.openAndColseByKeyBord.bind(this));
        this.input.on('keyup',this.inputsearchevent.bind(this))
    }
    inputsearchevent(e){
       clearTimeout(this.timeOut);
       this.timeOut = setTimeout(()=>{
        const data =$.getJSON(`http://localhost/kimo/wp-json/wp/v2/posts?search='${this.input.val()}'`).then((thedate)=>{
            console.log(thedate[0].title.rendered)
        this.searchContent.html(this.showTheResult(thedate));
        })
        
       },2000)
        
    }
    showTheResult(data){
        return `${data.map(resulte=>{
            return `<h1> <a href="${resulte.link}">${resulte.title.rendered}</a></h1>`
        })}`
    }
    openAndColseByKeyBord(e){
        if (e.keyCode==83){
            this.showOverlay();
        }
        if (e.keyCode==27){
            this.hideOverlay();
        }
    }

    showOverlay(){
        this.overlay.addClass('active');
    }
    hideOverlay(){
        this.overlay.removeClass('active');
    }
}

export default Search;