
'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    
    const adv = document.querySelectorAll('.promo__adv img'),
          nameFilms = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type ="checkbox"]');
          

          

    addForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        let newFilm=addInput.value;
        let favorite=checkbox.checked;

        if (newFilm){
            if (newFilm.length>21){
                newFilm =`${newFilm.substring(0,21)}...`;
            }

            if(favorite){
                console.log('favorete film');
            }
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            montreList(movieDB.movies, nameFilms);           
        }            
        e.target.reset();

    });

  
    const deletAdv = (obj)=>{
        obj.forEach(item =>{
            item.remove();
        });
    };
       
    function montreList (films, parent){        
        parent.innerHTML="";
        films.sort();    
        films.forEach((item, i )=>{
            
            parent.innerHTML +=

            `<li class="promo__interactive-item"> ${i+1} ${item}
            <div class="delete"></div>
            </li>`;
        }); 
        
        document.querySelectorAll('.delete').forEach((del, i) =>{
            
            del.addEventListener('click',()=>{
                del.parentElement.remove();
                films.splice(i,1);
                montreList(films, parent);
            });
           
        });
    }

    deletAdv(adv);
    montreList(movieDB.movies, nameFilms);

});


