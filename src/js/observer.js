export function observingScroll(customOptions) {
  
  const observerOptions = {
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold
  };

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //callback
        entry.target.classList.add('loaded');
      }
    });
  },observerOptions);

  customOptions.targets.forEach(item => {
    observer.observe(item);
  });

  if(customOptions.duration !== undefined) {
    document.documentElement.style.setProperty("--duration", customOptions.duration + "s")
  }

  if(customOptions.timingFunction !== undefined) {
    document.documentElement.style.setProperty("--timing-function", customOptions.timingFunction)
  }
}
