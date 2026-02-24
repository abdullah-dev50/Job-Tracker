let currentTab = "all";

let jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130k-$175k", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"not-applied"},
  {id:2, company:"WebFlow Agency", position:"Web Designer", location:"LA", type:"Part-time", salary:"$80k-$100k", description:"Design and maintain websites.", status:"not-applied"},
  {id:3, company:"DataViz Solutions", position:"Data Specialist", location:"Boston", type:"Full-time", salary:"$120k-$150k", description:"Create dashboards and analyze datasets.", status:"not-applied"},
  {id:4, company:"CloudFirst Inc", position:"Backend Dev", location:"Seattle", type:"Full-time", salary:"$140k-$160k", description:"API development and server-side logic.", status:"not-applied"},
  {id:5, company:"Innovation Labs", position:"UI Engineer", location:"Austin", type:"Full-time", salary:"$100k-$130k", description:"Develop UI systems and maintain consistency.", status:"not-applied"},
  {id:6, company:"MegaCorp", position:"JS Developer", location:"NY", type:"Full-time", salary:"$130k-$160k", description:"Enterprise JavaScript applications.", status:"not-applied"},
  {id:7, company:"StartupXYZ", position:"Fullstack Developer", location:"Remote", type:"Full-time", salary:"$120k-$150k", description:"Work on startup platform end-to-end.", status:"not-applied"},
  {id:8, company:"TechCorp", position:"Frontend Dev", location:"SF", type:"Full-time", salary:"$135k-$170k", description:"React-based frontend applications.", status:"not-applied"}
];

function render() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  // Filter jobs manually
  const filtered = [];
  for (let i = 0; i < jobs.length; i++) {
    if (currentTab === "all" || jobs[i].status === currentTab) {
      filtered.push(jobs[i]);
    }
  }
  document.getElementById("tab-count").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <img src="./images/jobs.png" width="80" style="opacity:.6;margin-bottom:15px;">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>`;
    updateDashboard();
    return;
  }

  
  // Render each job using classic for loop
  for (let i = 0; i < filtered.length; i++) {
    const job = filtered[i];

    let badgeText = job.status === "not-applied" ? "NOT APPLIED" :
                    job.status === "interview" ? "INTERVIEW" : "REJECTED";

    let badgeClass = job.status === "not-applied" ? "not-applied" :
                     job.status === "interview" ? "interview" : "rejected";

    container.innerHTML += `
      <div class="job">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h4>${job.company}</h4>
          <span class="delete-icon" onclick="deleteJob(${job.id})">🗑️</span>
        </div>

        <p class="position">${job.position}</p>
        <p class="details">${job.location} • ${job.type} • ${job.salary}</p>

        <span class="badge ${badgeClass}">${badgeText}</span>
        <p class="short-desc">${job.description}</p>

        <div class="buttons">
          <div class="left-buttons">
            <button class="interview" onclick="setStatus(${job.id},'interview')">Interview</button>
            <button class="rejected" onclick="setStatus(${job.id},'rejected')">Rejected</button>
          </div>
        </div>
      </div>`;
  }

  updateDashboard();