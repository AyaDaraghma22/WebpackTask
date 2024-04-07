const elementGenerator = (elm, html) => {
    const el = document.createElement(elm);
    el.innerHTML = html; // Corrected typo here
    document.body.appendChild(el);
  }
  
  export default elementGenerator;