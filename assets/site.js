// Set active nav item + allow easy name/config editing
(function(){
  const cfg = window.SITE_CFG || {
    name: "Christopher Tortorella",
    github: "https://github.com/tort1493",
    linkedin: "https://www.linkedin.com/in/christopher-tortorella-0a24b991",
    email: "christopher.tortorella@capitalone.com"
  };
  document.getElementById("siteName") && (document.getElementById("siteName").textContent = cfg.name);
  document.getElementById("footerName") && (document.getElementById("footerName").textContent = cfg.name);

  const page = document.body.getAttribute("data-page");
  const links = document.querySelectorAll('#navLinks a');
  links.forEach(a=>{
    if(a.dataset.page === page) a.classList.add("active");
  });

  // Fill common links where present
  document.querySelectorAll("[data-fill='github']").forEach(el=> el.setAttribute("href", cfg.github));
  document.querySelectorAll("[data-fill='linkedin']").forEach(el=> el.setAttribute("href", cfg.linkedin));
  document.querySelectorAll("[data-fill='email']").forEach(el=> el.setAttribute("href", "mailto:"+cfg.email));
})();
