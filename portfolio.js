import emoji from "react-easy-emoji";

export const greetings = {
	name: "Zaid Bashir",
	title: "Hi all, I'm Zaid Bashir",
	description:
		"I'm passionate Full Stack Mobile App developer having an experience of building high performance Cross Platform Mobile Apps using Google's UI Kit Flutter",
	resumeLink:
		"https://drive.google.com/file/d/1I-hDooXAyS5gFfFlsCzrhXIG_C60fYxG/view?usp=sharing",
};

export const openSource = {
	githubUserName: "zaid-bashir",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/zaid.wani.399",
	// instagram: "#",
	// twitter: "#",
	github: "https://github.com/zaid-bashir",
	linkedin: "https://www.linkedin.com/in/zaid-bashir-714956156/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"PASSIONATE FULL STACK MOBILE APPLICATION DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Mobile Application Development",
			lottieAnimationFile: "/lottie/skills/onlyflutter.json",
			skills: [
				emoji(
					"⚡ Building responsive Cross Platform Mobile and Desktop Apps"
				),
				emoji("⚡ Building responsive static websites using React JS"),
				emoji(
					"⚡ Building RESTful APIs in Node JS & Express Framework backed with NoSQL MongoDB Database"
				),
			],
			softwareSkills: [
				{
					skillName: "Flutter",
					fontAwesomeClassname: "vscode-icons:file-type-flutter",
				},
				{
					skillName: "Dart",
					fontAwesomeClassname: "logos:dart",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "React JS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Express JS",
					fontAwesomeClassname: "logos:express",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "Node JS",
					fontAwesomeClassname: "logos:nodejs",
				},

				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		// {
		// 	title: "Cloud Infra-Architecture",
		// 	lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji("⚡ Experience of working on multiple cloud platforms"),
		// 		emoji(
		// 			"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
		// 		),
		// 		emoji(
		// 			"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "AWS",
		// 			fontAwesomeClassname: "logos:aws",
		// 		},
		// 		{
		// 			skillName: "Azure",
		// 			fontAwesomeClassname: "logos:microsoft-azure",
		// 		},
		// 		{
		// 			skillName: "Heroku",
		// 			fontAwesomeClassname: "logos:heroku-icon",
		// 		},
		// 		{
		// 			skillName: "PostgreSQL",
		// 			fontAwesomeClassname: "logos:postgresql",
		// 		},
		// 		{
		// 			skillName: "Github",
		// 			fontAwesomeClassname: "akar-icons:github-fill",
		// 		},
		// 		{
		// 			skillName: "Docker",
		// 			fontAwesomeClassname: "logos:docker-icon",
		// 		},
		// 		{
		// 			skillName: "Github Actions",
		// 			fontAwesomeClassname: "logos:github-actions",
		// 		},
		// 		{
		// 			skillName: "Cloudinary",
		// 			fontAwesomeClassname: "logos:cloudinary",
		// 		},
		// 		{
		// 			skillName: "Nginx",
		// 			fontAwesomeClassname: "logos:nginx",
		// 		},
		// 		{
		// 			skillName: "Sentry",
		// 			fontAwesomeClassname: "logos:sentry-icon",
		// 		},
		// 	],
		// },
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University Of Kashmir (KU)",
		subHeader: "Bachelors in Computer Application (BCA)",
		duration: "May 2019 - May 2022",
		desc: "Learned various Technologies including Web Technology, Backend Technology and Full Stack Mobile App Development",
		descBullets: [
			"Elected as the CR of my Batch",
			"Got 8.02 CGPA",
			"Created one Complete Full Stack Project as my Major Project",
		],
	},
	{
		schoolName: "All Indian Council for Professional Education (AICPE)",
		subHeader: "Advaned Diploma in Computer Application (ADCA)",
		duration: "May 2019 - May 2020",
		desc: "Learned Various Subjects of Computer Science",
		descBullets: [
			"Got 82% Percentage",
			"Gained Knowledge Of Operating System, Computer Networks, Programming Languages and Data Structures & Algorithms",
		],
	},
];

export const experience = [
	{
		role: "Lead Flutter Developer",
		company: "ClustTech Innovations Private Limited",
		companylogo: "/img/icons/common/clusttech.png",
		date: "August 2021 – April 2022",
		desc: "I was working there on a Complete Job Portal Mobile / Web Application using Flutter as UI Framework and was also integrating REST API's using http dart package",
		descBullets: [
			"OTP Verification with Timer",
			"Login / Signup funtionalties with JWT Authentication",
			"Registration Wizard including Auth, Basic details, Professional, Qualification, Key Skill Pages etc",
			"Complete Candidate Page",
			"Complete Profile Page",
			"Personalised Job Suggestions",
			"Profile Completion Indicators",
		],
	},
	{
		role: "Flutter Intern",
		company: "Zumr Private Limited",
		companylogo: "/img/icons/common/zumr.png",
		date: "June 2021 - Oct 2021",
		desc: "Working as Flutter Intern and my Key responsibilty was to maintain and develop clean UI for their Restuarant Project using Flutter and Dart",
		descBullets: [
			"OTP Verification Page",
			"Login / Signup Authentication Pages",
			"Complete Home Page with various Food Categories",
			"Complete Profile Page",
			"Personalised Food Products",
			"Cart and Notification Pages",
			"Pincode Check and Delivery Address Pages",
			"Checkout Pages",
			"Complete Order Status from Pickup to Delivery Pages"
		],
	},
];

export const projects = [
	{
		name: "JobPortal Mobile App",
		desc: "JobPortal is a Flutter based Mobile app that was developed to get latest updates regarding Jobs",
		github: "https://github.com/zaid-bashir/jobportalapp1",
	},
	{
		name: "Khtfoods",
		desc: "A Complte Flutter based UI only App for Restaurant",
		github: "https://github.com/zaid-bashir/khtfoods",
	},
	{
		name: "CSCGuru",
		desc: "CSCGuru is my own initiative to develop a Mobile App to put all the Study Materials for Computer Science Students to get free access to all Videos, Notes, Syllabus and MCQ etc",
		github: "https://github.com/zaid-bashir/cscguru_project",
	},
	{
		name: "JKSSBPing",
		desc: "Another Flutter based Mobile app helpful all Aspirants preparing for Govt Service Exams (In Progress)",
		github: "https://github.com/zaid-bashir/jkssbping",
	},
	{
		name: "CSCGuru Custum Backend & Restful API Services",
		desc: "A Custum backend and Restful API Services using Node JS, Express JS and MongoDB \n Branding Page for Restful API's http://cscguru.herokuapp.com/",
		link: "http://cscguru.herokuapp.com/semester"
	},
];

// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];
