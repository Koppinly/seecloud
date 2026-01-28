

// Global click event for Optimizely sitewide_click
document.addEventListener('click', function() {
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push({
    type: "event",
    eventName: "sitewide_click",
    tags: {
      revenue: 0,
      value: 0.00
    }
  });
});
