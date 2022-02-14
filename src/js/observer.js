export function observingScroll(customOptions) {
  
  const observerOptions = {
    root: customOptions.root,
    rootMargin: customOptions.rootMargin,
    threshold: customOptions.threshold
  };

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //callback
        entry.target.classList.add('loaded')
      }
    });
  },observerOptions);

  customOptions.targets.forEach(item => {
    observer.observe(item);
    if(item.dataset.vsize !== undefined) {
      item.style.setProperty("--size", item.dataset.vsize + "px")
    }
  });

  if(customOptions.duration !== undefined) {
    document.documentElement.style.setProperty("--duration", customOptions.duration + "s")
  }

  if(customOptions.timingFunction !== undefined) {
    document.documentElement.style.setProperty("--timing-function", customOptions.timingFunction)
  }

  if(customOptions.size !== undefined) {
    document.documentElement.style.setProperty("--size", customOptions.size)
  }
}
