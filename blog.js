let blogs = [];

function addBlog() {
  let project = document.getElementById('input-project').value;
  let startDate = document.getElementById('input-startdate').value;
  let endDate = document.getElementById('input-enddate').value;
  let description = document.getElementById('input-description').value;
  let nodeJs = document.getElementById('input-nodejs').checked;
  let reactJs = document.getElementById('input-reactjs').checked;
  let nextJs = document.getElementById('input-nextjs').checked;
  let typeScript = document.getElementById('input-typescript').checked;
  let image = document.getElementById('input-image').files[0];
  // let skill =document.getElementById('grouptech');


  image = URL.createObjectURL(image);

  // skill.addEventListener('submit', function(e){
  //   e.preventDefault();
  //   let checkboxes = document.getElementsByName('technologies')

  //   // console.log(checkboxes)
  // })


  if (nodeJs){
    nodeJs = (document.getElementById('input-nodejs').value);
  }else {
    nodeJs = ""
  }
  if (reactJs){
    reactJs = (document.getElementById('input-reactjs').value);
  }else {
    reactJs = ""
  }
  if (nextJs) {
    nextJs = (document.getElementById('input-nextjs').value);
  }else {
    nextJs = ""
  }
  if (typeScript) {
    typeScript = (document.getElementById('input-typescript').value);
  }else {
    typeScript = ""
  }



  let blog = {
    project: project,
    startDate: new Date (startDate),
    endDate: new Date (endDate),
    description: description,
    nodeJs: nodeJs,
    reactJs: reactJs,
    nextJs: nextJs,
    typeScript: typeScript,
    image: image,
    // skill: checkboxes,
    postAt: duration()


    
    
  };

  console.log(blog)

  function duration(){
    
    let distance = new Date (endDate) - new Date (startDate);
  
   let monthDistance = Math.floor (distance / (30 * 24 * 60 * 60 * 1000))
  
   if (monthDistance != 0) {
     return monthDistance + ' bulan'
   }else {
     let dayDistance = Math.floor (distance / (24 * 60 * 60 * 1000))
  
     if (dayDistance != 0) {
       return dayDistance + ' hari'
     }
   }
  }


  blogs.push(blog);

  renderBlog();
}



function renderBlog() {
  // let lengthData = blogs.length

  let blogContainer = document.getElementById('contents')

  blogContainer.innerHTML = firstBlog();

  // let i = 0
  for (i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `  <div class="item-card">
    <img src="${blogs[i].image}" alt=""/>
    <div class="content-card">
    <a href="detail.html"><h3>${blogs[i].project}</h3></a>
      <div class="duration" > durasi ${blogs[i].postAt}</div>
          <p>${blogs[i].description}</p>
          <div class="checkbox">
            <p>${blogs[i].nodeJs} ${blogs[i].reactJs} ${blogs[i].nextJs} ${blogs[i].typeScript}</p>
          </div>
          <br>
          <div class="btn-group">
            <a href="#" class="btn-edit">edit</a>
              <a href="#" class="btn-delete">delete</a>
          </div>
    </div>
  </div>`
  }
}


function firstBlog() {
  return `  <div class="item-card">
  <img src="./asset2/images2.jpg" alt=""/>
  <div class="content-card">
  <a href="detail.html"><h3>Dumbways Mobile App-2021</h3></a>
    <div class="duration" >durasi 3 bulan</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vero deleniti repudiandae reprehenderit! </p>
        <div class="checkbox">
          <p>nodeJs, reactJs, nextJs, typeScript </p>
        </div>
        <br>
        <div class="btn-group">
          <a href="#" class="btn-edit">edit</a>
            <a href="#" class="btn-delete">delete</a>
        </div>
  </div>
</div>`
}


