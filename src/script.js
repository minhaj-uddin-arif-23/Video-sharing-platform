// console.log('connected...');
// 1 - fetch ,load and show Categories on html
// [ create loadCategoryies ]
// [ show displayData ]
// https://openapi.programming-hero.com/api/phero-tube/categories

// category: "Music"
// category_id :"1001"
// ---------------------------------  Category showing part
const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories") // ai link ah request korci jodi reqest accept kore tahole
    .then((res) => res.json()) // aikane jave res.json ah convert korve it means object akare
    .then((data) => displayData(data.categories)) // then show korve
    .catch((error) => console.log(error)); // naile akta error show korvi
};

const displayData = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
  
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn ";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
  // console.log(data); //show data
};


// ............................... video showing part ..........
// const videoPlay = {
  
//   "category_id": "1003",
//   "video_id": "aaac",
//   "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//   "title": "Laugh at My Pain",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//           "profile_name": "Kevin Hart",
//           "verified": false
//       }
//   ],
//   "others": {
//       "views": "1.1K",
//       "posted_date": "13885"
//   },
//   "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }

const loadVideo = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then((res) => res.json())
  .then((data) => displayVideo(data.videos))
  .catch((err) => console.log(err))
}

const displayVideo = (videos) => {
    const videoShow  =  document.getElementById('videos')
    videos.forEach((videos) => {
      console.log(videos);
      const card = document.createElement('div')
      card.classList = "card card-compact"
      //  card design 
      card.innerHTML = `
      <figure class="h-[200px] relative">
          <img
            src=${videos.thumbnail} class="h-full w-full object-cover" 
            >
            <span class="absolute right-2 bottom-2 bg-black text-white">${videos.others.posted_date}</span>
      </figure>
            <div class="px-0 py-2">
           <div class="flex gap-4">
                 <div>
              <img src= ${videos.authors[0].profile_picture} class="w-10 h-10 rounded-full object-cover" >
            </div>
                <div>
                    <h2 class="card-title">Shoes!</h2>
                    <p class="font-bold">${videos.title}</p>
                    <div class="flex gap-1">
                    <p class="font-semibold">${videos.authors[0].profile_name}</p> 
                   ${
                        videos.authors[0].verified === true ? ` <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png">` : " "
                    }
                    </div>
                    <p>${videos.others.views} views</p>
                </div>
           </div>
              
            </div>
            `
            videoShow.append(card)
    })
   
}
loadData();
loadVideo()