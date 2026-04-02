document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
  var icon = document.createElement('span');
  icon.setAttribute('aria-hidden', 'true');
  icon.className = 'external-link-icon';
  icon.textContent = ' ↗';
  link.appendChild(icon);

  var srText = document.createElement('span');
  srText.className = 'sr-only';
  srText.textContent = '(opens in new tab)';
  link.appendChild(srText);
});
