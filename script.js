const data = [
    {
      id: "1",
      question: "Who are you?",
      answer: "My name is Ankit Chowdhury",
    },
    {
      id: "2",
      question: "What do you do?",
      answer: "I study in college 3rd year",
    },
    {
      id: "3",
      question: "Where are you from?",
      answer: "I am from Asansol west bengal",
    },
    {
      id: "4",
      question: "Why are you here?",
      answer: "for learning web dev",
    },
  ];
  
  const accordineWrapper = document.querySelector(".accordine");
  
  function createAccordineData() {
    accordineWrapper.innerHTML = data
      .map(
        (dataItem) => `
          <div class="accordine_item">
            <div class="accordine_title">
              <h3>${dataItem.question}</h3>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div class="accordine_content">
              <p>${dataItem.answer}</p>  
            </div>  
          </div>    
        `
      )
      .join("");
  }
  
  createAccordineData();
  
  const accordineItems = document.querySelectorAll(".accordine_item");
  
  accordineItems.forEach((currentItem) => {
    const title = currentItem.querySelector(".accordine_title");
    const content = currentItem.querySelector(".accordine_content");
  
    title.addEventListener("click", () => {
      const activeItem = document.querySelector(".accordine_item .accordine_title.active");
  
      // Close the previously opened accordine
      if (activeItem && activeItem !== title) {
        activeItem.classList.remove("active");
        activeItem.nextElementSibling.style.display = "none";
      }
  
      // Toggle the current accordine
      if (title.classList.contains("active")) {
        title.classList.remove("active");
        content.style.display = "none";
      } else {
        title.classList.add("active");
        content.style.display = "block";
      }
    });
  });
  