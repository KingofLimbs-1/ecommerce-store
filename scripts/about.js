// Team members object
let teamMembers = [
  {
    name: "Emma Van der Merwe",
    role: "Founder",
    img: "/public/assets/images/team/member1.jpg",
  },
  {
    name: "Thandiwe Dlamini",
    role: "Head of Marketing",
    img: "/public/assets/images/team/member3.jpg",
  },
  {
    name: "Daniel Fourie",
    role: "Head of Advertising",
    img: "/public/assets/images/team/member2.jfif",
  },
  {
    name: "Sibusiso Ngubane",
    role: "Head of Sales",
    img: "/public/assets/images/team/member4.jpg",
  },
];
// ...

// Script to create team members
const teamUl = document.querySelector("ul");

let populateTeamContainer = () => {
  if (teamMembers) {
    teamMembers.forEach((member) => {
      teamUl.innerHTML += `
       <li>
        <div class="flex items-center gap-x-6">
        <img
        class="h-16 w-16 rounded-full"
        src="${member["img"]}"
        alt=""
        />
       <div>
        <h3
        class="text-base font-semibold leading-7 tracking-tight text-gray-900"
        >
        ${member["name"]}   
       </h3>
        <p class="text-sm font-semibold leading-6 text-red-600">
        ${member["role"]}           
        </p>
      </div>
    </div>
  </li>
      `;
    });
  } else {
    console.log("error");
  }
};

populateTeamContainer();
// ...
