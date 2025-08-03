class User {
  constructor(
    firstName,
    lastName,
    profilePhoto,
    birthday,
    nickname,
    likesCount
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profilePhoto = profilePhoto;
    this._birthday = birthday;
    this._nickname = nickname;
    this._likesCount = likesCount;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  get profilePhoto() {
    return this._profilePhoto;
  }
  get birthday() {
    return this._birthday;
  }
  get nickname() {
    return this._nickname;
  }
  get likesCount() {
    return this._likesCount;
  }

  get age() {
    const today = new Date();
    const birthDate = new Date(this._birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

  addLike() {
    this._likesCount++;
  }
}

const user = new User(
  'Test',
  'Testovych',
  'https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg',
  new Date('2000-05-16'),
  'Super Dev',
  10
);

const loadBtn = document.querySelector('.load');
const userName = document.querySelector('.userName');
const nickname = document.querySelector('.nickname');
const birthDate = document.querySelector('.birthDate');
const faHeart = document.querySelector('.fa-heart');
const likesCount = document.querySelector('.likesCount');

function loadContent() {
  userName.textContent = user.fullName;
  nickname.textContent = user.nickname;
  birthDate.textContent = user.birthday.toISOString().split('T')[0];
  likesCount.textContent = user.likesCount;
}

function likesChange() {
  faHeart.classList.toggle('liked');
  user.addLike();
  likesCount.textContent = user.likesCount;
}

function fullYears() {
  this.textContent = `${user.age} years`;
}

loadBtn.addEventListener('click', loadContent);
faHeart.addEventListener('click', likesChange);
birthDate.addEventListener('mouseenter', fullYears);
