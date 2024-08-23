var arr = [
    {dp: "https://www.instyle.com/thmb/pMP6ifcMyk2PyTfxxSrM--dLpXc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/adriana-lima-vs-nyfw-soc-d23715b85d7b41719280a1d717a048ba.jpg", story: "https://media.glamourmagazine.co.uk/photos/6138d347a8f6b78280dd9cd8/master/w_1600%2Cc_limit/adriana-lima_glamour_12dec17_rexfeatures_9251346b_p.jpg"},
 

    {dp: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gigi_Hadid_Maybelline_Director_Cut_2_%28cropped%29.png/640px-Gigi_Hadid_Maybelline_Director_Cut_2_%28cropped%29.png", story: "https://media.glamour.com/photos/5fe619d21d04b354d394ea13/master/w_2560%2Cc_limit/gigi-hadid.jpg"},

    {dp: "https://deadline.com/wp-content/uploads/2024/07/GettyImages-2154313331.jpg?w=1024", story: "https://www.hollywoodreporter.com/wp-content/uploads/2024/04/Bella-Hadid-getty-H-2024.jpg?w=1296"},
   

    {dp: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kendall_Jenner_at_Met_Gala_2021_5.jpg", story: "https://hips.hearstapps.com/hmg-prod/images/kendall-jenner-wears-bottega-veneta-1-649c076385091.jpg"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
     clutter +=  ` <div class="story">
    <img id="${idx}"src= "${elem.dp}" alt="">
    </div> `
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets){
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


  setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
  },3000);
});
