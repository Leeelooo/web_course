import { quicksort } from './quicksort.js'
import { self_max, self_min, self_median } from './array_utils.js'
 
const numbers = []
for (var i = 0; i < 1e7; i++) {
    numbers[i] = Math.floor(1e9 * Math.random());
}

const max_ = self_max(numbers);
console.log('Max value = ' + max_);

const min_ = self_min(numbers);
console.log('Min value = ' + min_);

const median_ = self_median(numbers);
console.log('Median value = ' + median_);

const quicksortedArray = quicksort(numbers.slice());
const builtinSortedArray = numbers.slice().sort((a, b) => a - b);
const isTheSame = quicksortedArray.every(function(value, index){ return value == builtinSortedArray[index] });
console.log('Is the same output with built-in sort = ' + isTheSame);

const tagToCount = {};
const tags = document.getElementsByTagName("*");
for (var i = 0; i < tags.length; i++) {
    const tagName = tags[i].tagName;
    if (tagToCount[tagName] !== undefined) {
        tagToCount[tagName]++;
    } else {
        tagToCount[tagName] = 1;
    }
}
console.log(tagToCount);


const contacts = document.querySelector('div.contacts');
const fab = document.querySelector('button.contacts_fab');
const shadow = document.createElement('div');
shadow.className = 'shadow';

shadow.onclick = function () {
    shadow.removeChild(contacts);
    document.body.removeChild(shadow);
    contacts.style.display = 'none';
};

fab.onclick = function() {
    contacts.style.display = 'flex';
    shadow.appendChild(contacts);
    document.body.appendChild(shadow);
};

const avatars = [
    '/assets/images/me1.jpg',
    '/assets/images/me2.jpg',
    '/assets/images/me3.jpg'
];
var currentAvatar = 0;
const avatarImage = document.querySelector('img.profile_picture');
avatarImage.onclick = function() {
    currentAvatar = (currentAvatar + 1) % avatars.length;
    avatarImage.src = avatars[currentAvatar];
};