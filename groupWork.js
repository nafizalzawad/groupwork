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
