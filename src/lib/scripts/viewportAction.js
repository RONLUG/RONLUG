let observer;

function getIntersectionObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // First time element is shown in viewport
        if (entry.isIntersecting && !entry.target.classList.contains("shown")) {
          entry.target.classList.add("shown");
          entry.target.dispatchEvent(new CustomEvent("firstEnterViewport"));
        }
        const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
        entry.target.dispatchEvent(new CustomEvent(eventName));
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { rootMargin: "-100px" },
  );
  console.log("create observer");
  return observer;
}

export function viewport(node) {
  observer = getIntersectionObserver();
  observer.observe(node);
  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
