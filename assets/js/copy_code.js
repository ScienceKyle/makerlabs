document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("div[class^='code-']");

  codeBlocks.forEach((block) => {
    // Extract language from class (e.g., "code-shell" → "shell")
    let lang = block.className.replace("code-", "").toLowerCase();

    // Create container
    let container = document.createElement("div");
    container.classList.add("code-block-container");

    // Create header
    let header = document.createElement("div");
    header.classList.add("code-header");
    header.innerHTML = `<strong>${lang}</strong>`;

    // Create copy button
    let copyButton = document.createElement("button");
    copyButton.innerText = "Copy Code";
    copyButton.classList.add("copy-button");

    // Add copy functionality
    copyButton.addEventListener("click", async () => {
      let text = block.innerText.trim();
      await navigator.clipboard.writeText(text);
      copyButton.innerText = "Copied!";
      setTimeout(() => {
        copyButton.innerText = "Copy Code";
      }, 1000);
    });

    header.appendChild(copyButton);
    container.appendChild(header);

    // Create code wrapper
    let codeWrapper = document.createElement("div");
    codeWrapper.classList.add("code-block");
    codeWrapper.innerText = block.innerText;

    container.appendChild(codeWrapper);

    // Replace the original block
    block.replaceWith(container);
  });
});