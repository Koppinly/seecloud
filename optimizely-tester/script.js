document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('optimizelyForm');
    const results = document.getElementById('results');
    const status = document.getElementById('status');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const sdkKey = document.getElementById('sdkKey').value;
      const flagName = document.getElementById('flagName').value;
      const userId = document.getElementById('userId').value;
      const attributesInput = document.getElementById('attributes').value;
      const eventName = document.getElementById('eventName').value;
  
      if (!sdkKey || !flagName || !userId) {
        status.textContent = "Please fill out SDK Key, Flag Name, and User ID.";
        return;
      }
  
      const attributes = {};
      if (attributesInput) {
        attributesInput.split(',').forEach((pair) => {
          const [key, value] = pair.split(':').map((item) => item.trim());
          if (key && value) {
            attributes[key] = value;
          }
        });
      }
  
      status.textContent = "Initializing Optimizely...";
  
      const optimizelyClient = window.optimizelySdk.createInstance({ sdkKey });
  
      optimizelyClient.onReady().then(function (result) {
        if (result.success) {
          const user = optimizelyClient.createUserContext(userId, attributes);
          const decision = user.decide(flagName);
  
          results.innerHTML = `
            <p><strong>SDK Key:</strong> ${sdkKey}</p>
            <p><strong>Flag Name:</strong> ${flagName}</p>
            <p><strong>User ID:</strong> ${userId}</p>
            <p><strong>Attributes:</strong> ${JSON.stringify(attributes)}</p>
            <p><strong>Flag Decision:</strong> ${decision.variationKey || 'No variation'}</p>
          `;
  
          if (eventName) {
            user.trackEvent(eventName);
            results.innerHTML += `<p><strong>Event Tracked:</strong> ${eventName}</p>`;
          }
        } else {
          status.textContent = "Error initializing Optimizely: " + result.reason;
        }
      }).catch(function (error) {
        status.textContent = "Error initializing Optimizely: " + error.message;
      });
    });
  });
  