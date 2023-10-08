// Team members object
let teamMembers = [
  {
    name: "Emma Van der Merwe",
    role: "CEO/Founder",
    img: "/public/assets/images/team/member1.jpg",
  },
  {
    name: "Thandiwe Dlamini",
    role: "CTO/Lead Software Engineer",
    img: "/public/assets/images/team/tesetMember2.jpg",
  },
  {
    name: "Daniel Fourie",
    role: "Head of Marketing",
    img: "/public/assets/images/team/tesetMember3.jpg",
  },
  {
    name: "Sibusiso Ngubane",
    role: "Head of Sales",
    img: "/public/assets/images/team/testMember4.jpg",
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
        <div class="flex items-center gap-x-8">
        <img
        class="rounded-full h-14 w-14 object-cover"
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
