export default query =>
  `https://www.facebook.com/search?q=${encodeURIComponent(query)}`;
