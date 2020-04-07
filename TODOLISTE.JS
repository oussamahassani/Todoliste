
    var myNodelist = document.getElementsByTagName("LI");
    var myNodelist1 = document.getElementsByTagName("i");
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
      ev.target.classList.add('checked');
      console.log(ev.target.firstChild)
      if (ev.target.firstChild == 'I');
      ev.target.firstChild.remove();
      /*myNodelist1.parentNode.removeChild(myNodelist1)*/
      }
    }, false);
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      }}
    function newElement() { 
        let textinput = document.getElementById("text1").value;
        let li = document.createElement("li");
        let span = document.createElement("span");
        let ii = document.createElement("i");
       /* let classesToAdd = [ 'fa ', 'fa-twitter', 'fa-5' ];*/
        ii.classList .add('fa','fa-check','fa-5') ;    
         li.classList.add("pading-top");
        span.classList.add("close");
        t = document.createTextNode(textinput)
        spancode = document.createTextNode("\u274c");
        li.appendChild(ii);
        li.appendChild(t);
        span.appendChild(spancode);
        li.appendChild(span);
        console.log(textinput);
        var patt = new RegExp('[a-z]','g');
        console.log(patt.test(textinput));
        if( patt.test(textinput) === false )
        {
            alert("merci d'ecrire quelque chose logique");
         }
         else
         {
            document.getElementById("resulta").appendChild(li);
            
         }
         document.getElementById("text1").value="";
         let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
    }
    //effacer element li
    function effacer(){
      let lst = document.getElementsByTagName("ul");
        lst[0].innerHTML = "";
    }