document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (
      href &&
      (
        href.endsWith(".pdf") ||
        href.startsWith("https://www.linkedin.com") ||
        href.startsWith("mailto:")
      )
    ) {
      link.setAttribute("target", "_blank");

      link.setAttribute("rel", "noopener noreferrer");
    }

  });

});