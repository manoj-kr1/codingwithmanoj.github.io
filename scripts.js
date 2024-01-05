document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('nav ul li a');
  const tabContents = document.querySelectorAll('.tab-content');

  function hideAllTabs() {
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      hideAllTabs();
      document.getElementById(targetId).classList.add('active');
    });
  });

  document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const isTab = clickedElement.closest('nav ul li a');
    const isTabContent = clickedElement.closest('.tab-content');
    if (!isTab && !isTabContent) {
      hideAllTabs();
    } else if (isTab) {
      const targetId = isTab.getAttribute('href').substring(1);
      hideAllTabs();
      document.getElementById(targetId).classList.add('active');
    }
  });
});
