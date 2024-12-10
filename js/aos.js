AOS.init();

if (window.innerWidth > 350) {  
    AOS.init({
      disable: false,  
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 50, 
      throttleDelay: 99, 
      offset: 120, 
      delay: 5, 
      duration: 400, 
      easing: 'ease',
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom'
    });
  } else {
    AOS.init({
      disable: true,  
    });
  }
