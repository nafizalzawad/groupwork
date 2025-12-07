// টিম মেম্বারদের নামের অ্যারে
const teamMembers = ['Nafiz', 'Millat', 'Touheul'];

// স্কোর ভেরিয়েবল
let NafizScore = 0;
let MillatScore = 0;
let TouhedulScore = 0;

const Nafiz = {
  id: Symbol('Nafiz'),
  name: 'Nafiz',
  age: 23,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Login Bug'],
  bugCount: 3
};

const Millat = {
  id: Symbol('Millat'),
  name: 'Millat',
  age: 21,
  isActive: true,
  bugs: ['UI Bug'],
  bugCount: 1
};

const Touhedul = {
  id: Symbol('Touhedul'),
  name: 'Touhedul',
  age: 25,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Logic Bug', 'DB Bug', 'Crash Bug', 'Auth Bug'],
  bugCount: 6
};

function calculateGrade(bugCount) {
  if (bugCount > 5) {
    return '⭐ Bug Star';
  } else if (bugCount >= 3) {
    return '✅ Active Hunter';
  } else {
    return '🔍 Needs Improvement';
  }
}

// Arrow function → bug array length return
const totalBugs = (user) => user.bugs.length;


const users = ['Nafiz', 'Millat', 'Touheul'];
for (const user of users) {
  console.log(`\n👤 Name: ${user.name} (Age: ${user.age})`);

  // for...of loop → bugs দেখানো
  console.log(`📌 Bugs Found: ${user.bugs.join(', ')}`);

  // bugCount update
  user.bugCount = totalBugs(user);

  // Grade দেখানো
  console.log(`🎯 Grade: ${calculateGrade(user.bugCount)}`);
}

// নতুন bug যোগ করলাম Rafi-এর জন্য
Nafiz.bugs.push('Navbar Bug');

// একটা bug fix হয়ে গেছে, pop দিয়ে সরালাম Meem-এর bug list থেকে
Millat.bugs.pop();
