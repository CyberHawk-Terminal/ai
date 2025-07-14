  const js = new Blob(["alert(document.domain)"], { type: "application/javascript" });
  const jsURL = URL.createObjectURL(js);
  const html = new Blob([`<script src='${jsURL}'><\/script>`], { type: "text/html" });
  location.href = URL.createObjectURL(html);
