// import $ from 'jquery';


/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }

/* ============================== typing animation ============================ */



document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code here...

    var typed2 = new Typed(".typing2", {
        strings: ["Modern C++", "Technical Interview Basics", "Data Structures and Algorithms", "Computer Architecture"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing", {
        strings: ["", "Software Engineer", "Teacher", "Hardware Engineer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var dummyTyped = new Typed(".typingDummy", {
        strings: ["a, aa"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // ... Rest of your code
});

/* ============================== search ============================ */
//function that searches for a company in the JSON data
function search() {
    // Get the company name from the input field
    let companyName = document.getElementById("company-name").value;

    // Fetch the JSON data from the server
    fetch('path/to/data.json')
    .then(response => response.json())
    .then(data => {
        // Filter the JSON data based on the company name
        let searchResults = data.jobs.filter(job => job.title.toLowerCase() === companyName.toLowerCase());
        // Clear the search results div
        document.getElementById("results").innerHTML = "";
        // Loop through the search results and display the job details
        searchResults.forEach(job => {
            document.getElementById("results").innerHTML += `
                <div class="job">
                    <h3>${job.title}</h3>
                    <p>Location: ${job.location}</p>
                    <p>Role Type: ${job.roleType}</p>
                    <p>TC: ${job.tc}</p>
                    <p>Difficulty Rating: ${job.difficultyRating}</p>
                    <p>Experience: ${job.experience}</p>
                </div>
            `;
        });
    });
}

function redirect() {
    window.location.hash = "#CompanyInfo";
}

function showWhiskeyFactsPanel(element) {
    const whiskeyFactsPanel = element.closest('.portfolio-item').querySelector('.whiskey-facts-panel');
    console.log('Element:', element);
    console.log('whiskeyFactsPanel:', whiskeyFactsPanel);
    whiskeyFactsPanel.classList.add('show');
 }
 
 function hideWhiskeyFactsPanel(element) {
    const whiskeyFactsPanel = element.closest('.portfolio-item').querySelector('.whiskey-facts-panel');
    console.log('Element:', element);
    console.log('whiskeyFactsPanel:', whiskeyFactsPanel);
    whiskeyFactsPanel.classList.remove('show');
 }
 