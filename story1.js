// Example archive of chapters
const chapters = [
    { id: 1, title: "Chapter One: The Dust of Nowhere", file: "chapter1.html" },
    { id: 2, title: "Chapter Two: Neon Shadows", file: "chapter2.html" },
    { id: 3, title: "Chapter Three: Echoes of Silence", file: "chapter3.html" }
  ];
  
  // Show archive list dynamically
  function showArchive() {
    const archiveContainer = document.getElementById("archive");
    if (!archiveContainer) return;
  
    chapters.forEach(chapter => {
      const link = document.createElement("a");
      link.href = chapter.file;
      link.textContent = chapter.title;
      archiveContainer.appendChild(link);
      archiveContainer.appendChild(document.createElement("br"));
    });
  }
  
  // Like button logic
  function likeStory() {
    const likeBtn = document.getElementById("likeBtn");
    if (likeBtn) {
      likeBtn.textContent = "Liked!";
      likeBtn.disabled = true;
    }
  }
  
  // Share button logic (redirect to WhatsApp share)
  function shareStory() {
    const text = encodeURIComponent("Check out this story: " + window.location.href);
    const url = "https://api.whatsapp.com/send?text=" + text;
    window.open(url, "_blank");
  }
  
  // Navigation logic for next/prev
  function setupNavigation(currentChapterId) {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    const currentIndex = chapters.findIndex(ch => ch.id === currentChapterId);
  
    // Previous
    if (currentIndex > 0) {
      prevBtn.onclick = () => {
        window.location.href = chapters[currentIndex - 1].file;
      };
    } else {
      prevBtn.style.display = "none"; // hide if no previous
    }
  
    // Next
    if (currentIndex < chapters.length - 1) {
      nextBtn.onclick = () => {
        window.location.href = chapters[currentIndex + 1].file;
      };
    } else {
      nextBtn.style.display = "none"; // hide if no next
    }
  }
  
  // Run archive setup if archive container exists
  document.addEventListener("DOMContentLoaded", () => {
    showArchive();
  });
  