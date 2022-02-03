export function observingScroll(customOptions) {
  
  const observerOptions = {
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold
  };

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //callback - empty for now
      }
    });
  },observerOptions);

  customOptions.targets.forEach(item => {
    observer.observe(item);
  });

  if(customOptions.duration !== undefined) {
    document.documentElement.style.setProperty("--duration", customOptions.duration + "s")
  }
}
