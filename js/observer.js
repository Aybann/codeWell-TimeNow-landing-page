const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const headerObserverOptions = {
  rootMargin: "-400px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver){
  entries.forEach(entry =>{
   if(!entry.isIntersecting){
    navigation.classList.add('navigation-background');
   }
   else{
    navigation.classList.remove('navigation-background');
   }
  })
}, headerObserverOptions);

headerObserver.observe(header);

const appearOptions = {
  thresshold: 0,
  rootMargin: "100px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return ;
    }else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});

sliders.forEach(slide =>{
  appearOnScroll.observe(slide);
})